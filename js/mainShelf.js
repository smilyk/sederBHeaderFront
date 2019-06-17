
let shelfNavigator = new App.ShelfNavigator();
let shelfServer = new App.RemoteShelfdDataStore('https://sederbheader.herokuapp.com/api/');
let makingJsonShelf = new App.MakingJson();
SHELF_SELECTOR = '[data-seder-shelf="shelf"]';
SHELF_CHECKLIST_SELECTOR = '[data-seder-shelf="shelf_checklist"]';
SHELF_REMOVE_SELECTOR = '[data-seder-shelf="remove-shelf"]';

let shelfCheckList = new App.ShelfCheckList(SHELF_CHECKLIST_SELECTOR);
let shelfRemoveList = new App.RemoveShelf(SHELF_REMOVE_SELECTOR);
let shelfFormhandler = new App.Shelf(SHELF_SELECTOR);
let lastShelfs = {};
let arrayShelfForRemove = []
//poisk
OWNER_FIND = '[data-seder-shelf="shelf_find_shelf"]';
let findShelfs = new App.FindShelf(OWNER_FIND);
let array = [];
let onLoadShelfs = new App.OnLoadShelf(array);
PRINT_FIND_OWNER = '[data-seder-shelf="print_find_shelf"]'
let printFindShelfs = new App.ShelfCheckList(PRINT_FIND_OWNER);
//vibor iz spiska
let onLoadShelf = new App.OnLoadShelf(array);


//найти полку
findShelfs.addHandlerFindShelf(async function (shelf) {
    let gettingShelf = await shelfServer.get(shelf.searchShelf);
    printFindShelfs.print(gettingShelf);
});

// добавить полку
shelfFormhandler.addHandlerAdd(async function (shelf) {
    console.log(shelf + " shelf")
    const shelf1 = await makingJsonShelf.ShelfMakeJson(shelf)
    let addShelf = await shelfServer.add(shelf1);
    if (addShelf.rez === "OK") {
        alert("полка успешно добавлен в базу данных")
    } else {
        alert("полка с таким названием уже есть в комнате")
        return;
    }
    await shelfCheckList.addShelf(shelf);
    return shelf1;
});


//удалить полку
shelfRemoveList.addCheckHandler(function (name, flag) {
    if (flag) {
        arrayShelfForRemove.push(name);
    } else {
        let position = $.inArray(name, arrayShelfForRemove);
        if (~position) arrayShelfForRemove.splice(position, 1);
    }

});

// удалить из базы
async function removeFromDataBase() {
    for (let i = 0; i < arrayShelfForRemove.length; i++) {
        await shelfServer.remove(arrayShelfForRemove[i]);
    }
    arrayShelfForRemove.forEach(async (q) => {
        await shelfServer.remove(q);
    })
}

// удалить из списка
shelfRemoveList.addRemoveHandler(async function () {
    await removeFromDataBase();
    await shelfRemoveList.removeShelf(arrayShelfForRemove);
    await displayAll();
});

// напечатать все
function displayAll() {
    shelfServer.getAll().then(function (shelf) {
        if (JSON.stringify(lastShelfs) !== JSON.stringify(shelf)) {
            shelfCheckList.removeAllShelfs(shelf);
            Object.values(shelf).forEach(function (shelfOne) {
                shelfCheckList.addShelf(shelfOne);
            });
            lastShelfs = {...shelf};
            console.log(lastShelfs + " lasShelf");
            onLoadShelfs.loadShelfsForFind(lastShelfs);
        }
    });
}

// напечать шкафы (список)
function displayCupboards() {
    shelfServer.getAllCupboards().then(function (cupboards) {
        Object.values(cupboards).forEach(function (cupboardOne) {
        });
        lastCupboards = {...cupboards}
        onLoadShelf.loadRoomsForAddingCupboard(lastCupboards);
    })
}

displayAll();
displayCupboards()

