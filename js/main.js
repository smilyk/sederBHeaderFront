let makingJsonQuartes = new App.MakingJson();
let quartesServer = new App.RemoteDataStore('http://localhost:8080/api/');
QUARTES_SELECTOR = '[data-seder-quartes="quartes"]';
QUARTES_CHEKLIST_SELECTOR = '[data-seder-quartes="quartes_checklist"]';
QUARTES_REMOVE_SELECTOR = '[data-seder-quartes="removeQuartes"]';


let quartesFormhandler = new App.Quartes(QUARTES_SELECTOR);
let quartesCheckList = new App.QuartesCheckList(QUARTES_CHEKLIST_SELECTOR);
let quartesRemoveList = new App.RemoveQuartes(QUARTES_REMOVE_SELECTOR);
let navigator = new App.Navigator();
let lastQuartes = {};

let arrayForRemove = []

quartesFormhandler.addHandlerAdd(async function (quartes) {
    const quartes1 = await makingJsonQuartes.makeJson(quartes)
    let addQuartes = await quartesServer.add(quartes1);
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
        arrayForRemove.push(name);
        console.log(flag);
    } else {
        console.log(flag);
        let position = $.inArray(name, arrayForRemove);
        console.log(position + " position")
        if (~position) arrayForRemove.splice(position, 1);
    }
    console.log(arrayForRemove);

});
async function removeFromDataBase() {
    for (let i = 0; i < arrayForRemove.length; i++) {
        await quartesServer.remove(arrayForRemove[i]);
    }
    arrayForRemove.forEach(async (q) => {
        await quartesServer.remove(q);
    })

}

quartesRemoveList.addRemoveHandler(async function () {
    await removeFromDataBase();
    console.log(arrayForRemove + "       pered udaleniem");
    await quartesRemoveList.removeQuartes(arrayForRemove);
    await displayAll();
});

function displayAll() {
    console.log("ya vse pechatayu")
    quartesServer.getAll().then(function (quartes) {
        if (JSON.stringify(lastQuartes) !== JSON.stringify(quartes)) {
            quartesCheckList.removeAllQuartes();
            Object.values(quartes).forEach(function (quartesOne) {
                quartesCheckList.addQuartes(quartesOne);
            });
            lastQuartes = {...quartes};
        }
    });
}

//
displayAll();
