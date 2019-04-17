
let makingJsonQuartes = new App.MakingJson();
let server = new App.RemoteDataStore('http://localhost:8080/api/');
//
QUARTES_SELECTOR = '[data-seder-quartes="quartes"]';
QUARTES_CHEKLIST_SELECTOR = '[data-seder-quartes="quartes_checklist"]';
QUARTES_REMOVE_SELECTOR = '[data-seder-quartes="removeQuartes"]';
let quartesFormhandler = new App.Quartes(QUARTES_SELECTOR);
let quartesCheckList = new App.QuartesCheckList(QUARTES_CHEKLIST_SELECTOR);
let quartesRemoveList = new App.RemoveQuartes(QUARTES_REMOVE_SELECTOR);
let quartesNavigator = new App.QuartesNavigator();
let lastQuartes = {};
let arrayQuartesForRemove = []







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
        }
    });
}


displayAll();
