
let makingJsonQuartes = new App.MakingJson();
let server = new App.RemoteDataStore('https://sederbheader.herokuapp.com/api/');
//
OWNER_FIND = '[data-seder-quartes="quartes_find"]';
Owner_SELECTOR = '[data-seder-quartes="quartes"]';
OWNER_CHEKLIST = '[data-seder-quartes="quartes_checklist"]';
OWNER_REMOVE = '[data-seder-quartes="removeQuartes"]';
PRINT_FIND_OWNER = '[data-seder-quartes="print_find_quartes"]'
let quartesFormhandler = new App.Quartes(Owner_SELECTOR);
let quartesCheckList = new App.QuartesCheckList(OWNER_CHEKLIST);
let quartesRemoveList = new App.RemoveQuartes(OWNER_REMOVE);
let quartesNavigator = new App.QuartesNavigator();
let findQuartes = new App.FindQuartes(OWNER_FIND);
let array = [];
let onLoadQuartes = new App.OnLoadQuartes(array);
let lastQuartes = {};
let lastRooms = {};
let arrayQuartesForRemove = []
let printFindQuartes = new App.QuartesCheckList(PRINT_FIND_OWNER);




quartesFormhandler.addHandlerAdd(async function (quartes) {
    const quartes1 = await makingJsonQuartes.makeJsonQuartes(quartes)
    let addQuartes = await server.add(quartes1);
    if (addQuartes.rez === "OK") {
        alert("помещение успешно добавлено в базу данных")
    } else {
        alert("помещение с таким названием уже есть в базе данных")
        return;
    }
    const addQuartesLine = await quartesCheckList.addQuartes(quartes);
    return quartes1;

});
quartesRemoveList.addCheckHandler(function (name, flag) {
    if (flag) {
        arrayQuartesForRemove.push(name);
        console.log(flag);
    } else {
        console.log(flag);
        let position = $.inArray(name, arrayQuartesForRemove);
        console.log(position + " position")
        if (~position) arrayQuartesForRemove.splice(position, 1);
    }
    console.log(arrayQuartesForRemove);

});
async function removeFromDataBase() {
    for (let i = 0; i < arrayQuartesForRemove.length; i++) {
        await server.remove(arrayQuartesForRemove[i]);
    }
    arrayQuartesForRemove.forEach(async (q) => {
        await server.remove(q);
    })
}

quartesRemoveList.addRemoveHandler(async function () {
    await removeFromDataBase();
    console.log(arrayQuartesForRemove + "       pered udaleniem");
    await quartesRemoveList.removeQuartes(arrayQuartesForRemove);
    await displayAll();
});

function displayAll() {
    console.log("ya vse pechatayu")
    server.getAll().then(function (quartes) {
        if (JSON.stringify(lastQuartes) !== JSON.stringify(quartes)) {
            quartesCheckList.removeAllQuartes();
            Object.values(quartes).forEach(function (quartesOne) {
                quartesCheckList.addQuartes(quartesOne);
            });
            lastQuartes = {...quartes};
            onLoadQuartes.loadQuartes(lastQuartes);
        }
    });
}

findQuartes.addHandlerFindQuartes(async function (quartes) {
    let gettingQuartes = await server.get(quartes.searchQuartes);
    printFindQuartes.print(gettingQuartes);
});

displayAll();
