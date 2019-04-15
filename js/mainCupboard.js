let cupboardNavigator = new App.CupboardNavigator();
let cupboardServer = new App.RemoteCupboardDataStore('http://localhost:8080/api/');
let makingJsonCupboard = new App.MakingJson();
CUPBOARD_SELECTOR = '[data-seder-cupboard="cupboard"]';
CUPBOARD_CHECKLIST_SELECTOR = '[data-seder-cupboard="cupboard_checklist"]';
CUPBOARD_REMOVE_SELECTOR = '[data-seder-cupboard="remove-cupboard"]';

let cupboardCheckList = new App.CupboardCheckList(CUPBOARD_CHECKLIST_SELECTOR);
let cupboardRemoveList = new App.RemoveCupboard(CUPBOARD_REMOVE_SELECTOR);
let cupboardFormhandler = new App.Cupboard(CUPBOARD_SELECTOR);
let lastCupboards = {};
let arrayCupboardForRemove = []



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

cupboardRemoveList.addCheckHandler(function (name, flag) {
    if (flag) {
        arrayCupboardForRemove.push(name);
        console.log(flag);
    } else {
        console.log(flag);
        let position = $.inArray(name, arrayCupboardForRemove);
        console.log(position + " position")
        if (~position) arrayCupboardForRemove.splice(position, 1);
    }
    console.log(arrayCupboardForRemove);

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
    console.log(arrayCupboardForRemove + "       pered udaleniem");
    await cupboardRemoveList.removeCupboard(arrayCupboardForRemove);
    await displayAll();
});

function displayAll() {
    console.log("ya vse pechatayu")
    cupboardServer.getAll().then(function (cupboard) {
        if (JSON.stringify(lastCupboards) !== JSON.stringify(cupboard)) {
            cupboardCheckList.removeAllCupboards(cupboard);
            Object.values(cupboard).forEach(function (cupboardOne) {
                cupboardCheckList.addCupboard(cupboardOne);
            });
            lastCupboards = {...cupboard};
        }
    });
}

displayAll();

