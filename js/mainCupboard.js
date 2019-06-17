
let cupboardNavigator = new App.CupboardNavigator();
let cupboardServer = new App.RemoteCupboardDataStore('https://sederbheader.herokuapp.com/api/');
let makingJsonCupboard = new App.MakingJson();
SHELF_SELECTOR = '[data-seder-cupboard="cupboard"]';
SHELF_CHECKLIST_SELECTOR = '[data-seder-cupboard="cupboard_checklist"]';
SHELF_REMOVE_SELECTOR = '[data-seder-cupboard="remove-cupboard"]';

let cupboardCheckList = new App.CupboardCheckList(SHELF_CHECKLIST_SELECTOR);
let cupboardRemoveList = new App.RemoveCupboard(SHELF_REMOVE_SELECTOR);
let cupboardFormhandler = new App.Cupboard(SHELF_SELECTOR);
let lastCupboards = {};
let arrayCupboardForRemove = []
//poisk
OWNER_FIND = '[data-seder-cupboard="cupboard_findCupboard"]';
let findCupboards = new App.FindCupboards(OWNER_FIND);
let array = [];
let onLoadCupboards = new App.OnLoadCupboards(array);
PRINT_FIND_OWNER = '[data-seder-cupboards="print_find_cupboards"]'
let printFindCupboards = new App.CupboardCheckList(PRINT_FIND_OWNER);
//vibor iz spiska
let onLoadRooms = new App.OnLoadCupboards(array);
//peremeshaem iz komnaty v komnaty
SHELFS_MOVE_SHELF = '[data-seder-cupboard="cupboard-move-from-room-to-room"]'
let moveCupboard = new App.MoveCupboard(SHELFS_MOVE_SHELF);
// посмотреть все шкафы в комнате
// CUPBOARD_GET_ALL_CUPBOARD_IN_THE_ROOM = '[data-seder-cupboard="all"]';
// let getAllCupboardsInTheRoom = new App.GetAllCupboardsInTheRoom(CUPBOARD_GET_ALL_CUPBOARD_IN_THE_ROOM);
// let printAllCupboardsInTheRoom = new App.CupboardCheckList(CUPBOARD_GET_ALL_CUPBOARD_IN_THE_ROOM);

// все не полные шкафы в помещении
// CUPBOARD_NOT_FOOL = '[data-seder-cupboard="cupboard_not_fool"]';
// let allNotFoolCupboards = new App.GetNotFoolCupboards(CUPBOARD_NOT_FOOL);
// let printNotFoolCupboards = new App.CupboardCheckList(CUPBOARD_NOT_FOOL);

// // все неполные шкафы в комнате
// CUPBOARD_NOT_FOOL_IN_THE_ROOM = '[data-seder-cupboard="cupboard_not_fool_cupboards_in_the_room"]';
// let allNotFoolCupboardsInTheRoom = new App.GetAllCupboardsInTheRoom(CUPBOARD_NOT_FOOL_IN_THE_ROOM);
// let printNotFoolCupboardsInTheRoom = new App.CupboardCheckList(CUPBOARD_NOT_FOOL_IN_THE_ROOM);
// пометить полным или пустым
// CUPBOARD_FOOL_NOT_FOOL_POINT = '[data-seder-cupboard="data-seder-cupboard="check_fool_notfool_cupboard"]';
// let pointCupboardFoolNotFool = new App.PointCheckbox(CUPBOARD_FOOL_NOT_FOOL_POINT);

//
// pointCupboardFoolNotFool.addPointHandler(async function (fn) {
//     console.log('hi-hi');
// })


// все неполные шкафы в комнате
// allNotFoolCupboardsInTheRoom.addHandlerFindCupboards(async function (room) {
//     let allCupboards = await shelfServer.getAllCupboardInTheRoom(room);
//     printAllCupboardsInTheRoom.removeAllCupboards();
//     Object.values(allCupboards).forEach(function (cupboardOne) {
//         printAllCupboardsInTheRoom.addShelf(cupboardOne);
//     });
// })


// все не полные шкафы в помещении
// allNotFoolCupboards.getNotFoolCupboards(async function () {
//     let cupboards = await shelfServer.getAllNotFoolCupboards();
//     console.log(cupboards + " cupboards")
//     printNotFoolCupboards.removeAllCupboards();
//     Object.values(cupboards).forEach(function (cupboardOne) {
//         printAllCupboardsInTheRoom.addShelf(cupboardOne);
//     });

// })
// посмотреть все шкафы в комнате
// getAllCupboardsInTheRoom.addHandlerFindCupboards(async function (cupboardsInTheRoom) {
//     let allCupboards = await shelfServer.getAllCupboardInTheRoom(cupboardsInTheRoom);
//     printAllCupboardsInTheRoom.removeAllCupboards();
//     Object.values(allCupboards).forEach(function (cupboardOne) {
//         printAllCupboardsInTheRoom.addShelf(cupboardOne);
//     });
//         })
// передвинуть шкааф из комнаты в комнату
moveCupboard.addHandlerMoveCupboards(async function (element) {
    const obj = await makingJsonCupboard.CupboardMakeForRemoveJson(element);
    let moveCupboard = await cupboardServer.move(obj);
    console.log(moveCupboard);
    if (moveCupboard.rez === "NO_CUPBOARD") {
        alert('Такой шкаф не найден');
        return
    }
    if (moveCupboard.rez === "NO_ROOM_FROM") {
        alert('Не найдена комната из которой перемещаем шкаф');
        return
    }
    if (moveCupboard.rez === "NO_ROOM_TO") {
        alert('Не найдена комната в которую перемещаем шкаф');
        return
    }
    if (moveCupboard.rez === "OK") {
        alert('Шкаф передвинут');
        return
    }
    if (moveCupboard.rez === "NO_ROOM") {
        alert('Комната не найдена');
        return
    }
})


findCupboards.addHandlerFindCupboards(async function (cupboards) {
    let gettingCupboards = await cupboardServer.get(cupboards.searchCupboards);
    printFindCupboards.print(gettingCupboards);
});


cupboardFormhandler.addHandlerAdd(async function (cupboard) {
    const cupboard1 = await makingJsonCupboard.CupboardMakeJson(cupboard)
    let addCupboard = await cupboardServer.add(cupboard1);
    if (addCupboard.rez === "OK") {
        alert("шкаф успешно добавлен в базу данных")
    } else {
        alert("шкаф с таким названием уже есть в комнате")
        return;
    }
    await cupboardCheckList.addCupboard(cupboard);
    return cupboard1;
});


//удалить шкаф
cupboardRemoveList.addCheckHandler(function (name, flag) {
    if (flag) {
        arrayCupboardForRemove.push(name);
    } else {
        let position = $.inArray(name, arrayCupboardForRemove);
        if (~position) arrayCupboardForRemove.splice(position, 1);
    }

});

async function removeFromDataBase() {
    for (let i = 0; i < arrayCupboardForRemove.length; i++) {
        await cupboardServer.remove(arrayCupboardForRemove[i]);
    }
    arrayCupboardForRemove.forEach(async (q) => {
        await cupboardServer.remove(q);
    })
}

cupboardRemoveList.addRemoveHandler(async function () {
    await removeFromDataBase();
    await cupboardRemoveList.removeCupboard(arrayCupboardForRemove);
    await displayAll();
});

function displayAll() {
    cupboardServer.getAll().then(function (cupboard) {
        if (JSON.stringify(lastCupboards) !== JSON.stringify(cupboard)) {
            cupboardCheckList.removeAllCupboards(cupboard);
            Object.values(cupboard).forEach(function (cupboardOne) {
                cupboardCheckList.addCupboard(cupboardOne);
            });
            lastCupboards = {...cupboard};
            onLoadCupboards.loadCupboardsForFind(lastCupboards);
        }
    });
}

function displayQuartes() {
    cupboardServer.getAllRooms().then(function (rooms) {
        Object.values(rooms).forEach(function (roomOne) {
        });
        lastCupboards = {...rooms}
        onLoadRooms.loadRoomsForAddingCupboard(lastCupboards);
    })
}

displayAll();
displayQuartes()

