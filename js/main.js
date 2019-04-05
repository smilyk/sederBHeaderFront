let data = {};
let makingJsonQuartes = new App.MakingJson();
let quartesServer = new App.RemoteDataStore('http://localhost:8080/api/');
QUARTES_SELECTOR = '[data-seder-quartes="quartes"]';
QUARTES_CHEKLIST_SELECTOR = '[data-seder-quartes="quartes_checklist"]';
QUARTES_REMOVE_SELECTOR = '[data-seder-quartes="removeQuartes"]';


let quartesFormhandler = new App.Quartes(QUARTES_SELECTOR);
let quartesCheckList = new App.QuartesCheckList(QUARTES_CHEKLIST_SELECTOR);
let quartesRemoveList = new App.RemoveQuartes(QUARTES_REMOVE_SELECTOR);
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





quartesRemoveList.addRemoveHandler(async function () {
let name = arrayForRemove[0];
    await console.log(arrayForRemove + "       pered udaleniem");
    // await arrayForRemove.forEach((q) => quartesServer.remove(q));
    await quartesServer.remove(name);
    await quartesRemoveList.removeQuartes(arrayForRemove);
    displayAll();
    await console.log(arrayForRemove + "       posle udaleniem")
    await console.log("delited");
});

let lastQuartes = {};

function displayAll() {
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
