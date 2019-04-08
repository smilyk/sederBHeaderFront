let roomNavigator = new App.RoomNavigator();
let serverRoom = new App.RemoteRoomDataStore('http://localhost:8080/api/');
let makingJsonRoom = new App.MakingJson();
ROOM_SELECTOR = '[data-seder-room="room"]';
ROOM_CHECKLIST_SELECTOR = '[data-seder-room="room_checklist"]';
ROOM_REMOVE_SELECTOR = '[data-seder-room="remove-room"]';

let roomCheckList = new App.RoomCheckList(ROOM_CHECKLIST_SELECTOR);
// let roomChecklist = new App.RoomCheckList(ROOM_SELECTOR);
let roomRemoveList = new App.RemoveRoom(ROOM_REMOVE_SELECTOR);
let roomFormhandler = new App.Room(ROOM_SELECTOR);
let lastRooms = {};
let arrayRoomForRemove = []



roomFormhandler.addHandlerAdd(async function (room) {
    const room1 = await makingJsonRoom.RoomMakeJson(room)
    let addRoom = await serverRoom.add(room1);
    if (addRoom.rez === "OK") {
        alert("комната успешно добавлено в базу данных")
    } else {
        alert("комната с таким названием уже есть в помещении")
        return;
    }
    const addRoomLine = await roomChecklist.addRoom(room);
    return room1;
});

roomRemoveList.addCheckHandler(function (name, flag) {
    if (flag) {
        arrayRoomForRemove.push(name);
        console.log(flag);
    } else {
        console.log(flag);
        let position = $.inArray(name, arrayRoomForRemove);
        console.log(position + " position")
        if (~position) arrayRoomForRemove.splice(position, 1);
    }
    console.log(arrayRoomForRemove);

});

async function removeFromDataBase() {
    for (let i = 0; i < arrayRoomForRemove.length; i++) {
        await serverRoom.remove(arrayRoomForRemove[i]);
    }
    arrayRoomForRemove.forEach(async (q) => {
        await serverRoom.remove(q);
    })
}

roomRemoveList.addRemoveHandler(async function () {
    await removeFromDataBase();
    console.log(arrayRoomForRemove + "       pered udaleniem");
    await roomRemoveList.removeRoom(arrayRoomForRemove);
    await displayAll();
});

function displayAll() {
    console.log("ya vse pechatayu")
    serverRoom.getAll().then(function (room) {
        if (JSON.stringify(lastRooms) !== JSON.stringify(room)) {
            roomCheckList.removeAllRooms(room);
            Object.values(room).forEach(function (roomOne) {
                roomCheckList.addRoom(roomOne);
            });
            lastRooms = {...room};
        }
    });
}

displayAll();

