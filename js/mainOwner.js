
let makingJsonOwner = new App.MakingJson();
let server = new App.OwnerRemoteDataStore('https://sederbheader.herokuapp.com/api/');
//
OWNER_FIND = '[data-seder-owner="owner_find"]';
Owner_SELECTOR = '[data-seder-owner="owner"]';
OWNER_CHEKLIST = '[data-seder-owner="owner_checklist"]';
OWNER_REMOVE = '[data-seder-owner="removeOwner"]';
PRINT_FIND_OWNER = '[data-seder-owner="print_find_owner"]'
let ownerFormhandler = new App.Owner(Owner_SELECTOR);
let ownerCheckList = new App.OwnerCheckList(OWNER_CHEKLIST);
let ownerRemoveList = new App.RemoveOwner(OWNER_REMOVE);
let ownerNavigator = new App.OwnerNavigator();
let findOwner = new App.FindOwner(OWNER_FIND);
let array = [];
let onLoadOwner = new App.OnLoadOwner(array);
let lastOwners = {};
let lastRooms = {};
let arrayOwnersForRemove = []
let printFindOwner = new App.OwnerCheckList(PRINT_FIND_OWNER);




ownerFormhandler.addHandlerAdd(async function (owner) {
    const owner1 = await makingJsonOwner.OwnerJson(owner)
    let addOwner = await server.add(owner1);
    if (addOwner.rez === "OK") {
        alert("Хозяин успешно добавлено в базу данных")
    } else {
        alert("Хозяин с таким названием уже есть в базе данных")
        return;
    }
    const addOwnerLine = await ownerCheckList.addOwner(owner);
    return owner1;

});
ownerRemoveList.addCheckHandler(function (name, flag) {
    if (flag) {
        arrayOwnersForRemove.push(name);
        console.log(flag);
    } else {
        console.log(flag);
        let position = $.inArray(name, arrayOwnersForRemove);
        console.log(position + " position")
        if (~position) arrayOwnersForRemove.splice(position, 1);
    }
    console.log(arrayOwnersForRemove);

});
async function removeFromDataBase() {
    for (let i = 0; i < arrayOwnersForRemove.length; i++) {
        await server.remove(arrayOwnersForRemove[i]);
    }
    arrayOwnersForRemove.forEach(async (q) => {
        await server.remove(q);
    })
}

ownerRemoveList.addRemoveHandler(async function () {
    await removeFromDataBase();
    console.log(arrayOwnersForRemove + "       pered udaleniem");
    await ownerRemoveList.removeOwner(arrayOwnersForRemove);
    await displayAll();
});

function displayAll() {
    console.log("ya vse pechatayu")
    server.getAll().then(function (owner) {
        if (JSON.stringify(lastOwners) !== JSON.stringify(owner)) {
            ownerCheckList.removeAllOwner();
            Object.values(owner).forEach(function (ownerOnr) {
                ownerCheckList.addOwner(ownerOnr);
            });
            lastOwners = {...owner};
            onLoadOwner.loadOwner(lastOwners);
        }
    });
}

findOwner.addHandlerFindOwner(async function (owner) {
    let gettingOwner = await server.get(owner.searchOwner);
    printFindOwner.print(gettingOwner);
});

displayAll();
