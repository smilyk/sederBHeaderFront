// <<<<<<< Updated upstream
// let roomNavigator = new App.RoomNavigator();
// let serverRoom = new App.RemoteRoomDataStore('http://localhost:8080/api/');
// let makingJsonRoom = new App.MakingJson();
// ROOM_SELECTOR = '[data-seder-room="room"]';
// ROOM_CHECKLIST_SELECTOR = '[data-seder-room="room_checklist"]';
// ROOM_REMOVE_SELECTOR = '[data-seder-room="remove-room"]';
//
// let roomCheckList = new App.RoomCheckList(ROOM_CHECKLIST_SELECTOR);
// // let roomChecklist = new App.RoomCheckList(ROOM_SELECTOR);
// let roomRemoveList = new App.RemoveRoom(ROOM_REMOVE_SELECTOR);
// let roomFormhandler = new App.Room(ROOM_SELECTOR);
// =======
CUPBOARD_SELECTOR = '[data-seder-room="room"]';

CUPBOARD_CHECKLIST_SELECTOR = '[data-seder-room="room_checklist"]';
CUPBOARD_REMOVE_SELECTOR = '[data-seder-room="remove-room"]';
ROOM_FIND_ROOM = '[data-seder-room="room_findRoom"]';
PRINT_FIND_ROOM = '[data-seder-room="print_find_room"]'

let roomCheckList = new App.RoomCheckList(CUPBOARD_CHECKLIST_SELECTOR);
let serverRoom = new App.RemoteRoomDataStore('http://localhost:8080/api/');
let makingJsonRoom = new App.MakingJson();
let roomNavigator = new App.RoomNavigator();
let roomRemoveList = new App.RemoveRoom(CUPBOARD_REMOVE_SELECTOR);
let roomFormhandler = new App.Room(CUPBOARD_SELECTOR);
// >>>>>>> Stashed changes
let lastRooms = {};
let lastQuartes = {};
let arrayRoomForRemove = [];
let array = [];
let onLoad = new App.OnLoad(array);
let onLoadFind = new App.OnLoad(array);
let findRoom = new App.FindRoom(ROOM_FIND_ROOM);
let printFindRoom = new App.RoomCheckList(PRINT_FIND_ROOM);

findRoom.addHandlerFindRoom(async function (room) {
    let gettingRoom = await serverRoom.get(room.searchRoom);
    // $('[data-seder-room="print_find_room"]').empty();
    printFindRoom.print(gettingRoom);
})

roomFormhandler.addHandlerAdd(async function (room) {
    const room1 = await makingJsonRoom.RoomMakeJson(room)
    let addRoom = await serverRoom.add(room1);
    if (addRoom.rez === "OK") {
        alert("комната успешно добавлено в базу данных")
    } else {
        alert("комната с таким названием уже есть в помещении")
        return;
    }
    const addRoomLine = await roomCheckList.addRoom(room);
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
    alert("Комната успешно удалена")
}

roomRemoveList.addRemoveHandler(async function () {
    await removeFromDataBase();
    await roomRemoveList.removeRoom(arrayRoomForRemove);
    await displayAll();
});

function displayAll() {
    serverRoom.getAll().then(function (room) {
        if (JSON.stringify(lastRooms) !== JSON.stringify(room)) {
            roomCheckList.removeAllRooms(room);
            Object.values(room).forEach(function (roomOne) {
                roomCheckList.addRoom(roomOne);
            });
            lastRooms = {...room};
            onLoadFind.loadRooms(lastRooms);
        }
    });
}

function displayQuartes() {
    serverRoom.getAllQuartes().then(function (quartes) {
        Object.values(quartes).forEach(function (quartesOne) {
        });
        lastQuartes = {...quartes}
        onLoad.load(lastRooms);
    })
}

displayAll();
displayQuartes();




