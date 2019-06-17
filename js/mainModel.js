let modelNavigator = new App.ModelNavigator();
let modelServer = new App.RemotedModelDataStore('https://sederbheader.herokuapp.com/api/');
let makingJsonModel = new App.MakingJson();
// addModel
MODEL_SELECTOR = '[data-seder-model="model"]';
let modelFormhandler = new App.Model(MODEL_SELECTOR);
MODEL_CHECKLIST_SELECTOR = '[data-seder-model="model_checklist"]';
let modelCheckList = new App.ModelChecklist(MODEL_CHECKLIST_SELECTOR);

//удалить модель
MODEL_REMOVE_SELECTOR = '[data-seder-model="remove-model"]';
let modelRemoveList = new App.RemoveModel(MODEL_REMOVE_SELECTOR);
let arrayModelForRemove = [];

//напечатать все
let lastModels = [];

//для загрузки
let array = [];
let onLoadModel = new App.OnLoadModel(array);

//для списка вещей
let lastThings = [];

// для списка хозяев, сезонов, размеров
let lastOwners = [];
let lastSeasons = [];
let lastSizes = [];

//поиск модели
MODEL_FIND = '[data-seder-model="model_find_model"]';
let findModel = new App.Model(MODEL_FIND);
PRINT_FIND_MODEL = '[data-seder-model="print_find_model"]'
let printFindModel = new App.ModelChecklist(PRINT_FIND_MODEL);

// получить по хозяину
GET_MODEL_BY_OWNER = '[data-seder-model="get-model-by-owner"]';
let getModelByOwner = new App.Model(GET_MODEL_BY_OWNER);
PRINT_BY_OWNER = '[data-seder-model="model_checklist_by_owner"]';
let printByOwner = new App.ModelChecklist(PRINT_BY_OWNER);

//получить по сезону
GET_MODEL_BY_SEASON = '[data-seder-model="get-model-by-season"]';
let getModelBySeason = new App.Model(GET_MODEL_BY_SEASON);
PRINT_BY_SEASON = '[data-seder-model="model_checklist_by_season"]';
let printBySeason = new App.ModelChecklist(PRINT_BY_SEASON);

//получить по размеру
GET_MODEL_BY_SIZE = '[data-seder-model="get-model-by-size"]';
let getModelBySize = new App.Model(GET_MODEL_BY_SIZE);
PRINT_BY_SIZE = '[data-seder-model="model_checklist_by_size"]';
let printBySize = new App.ModelChecklist(PRINT_BY_SIZE);

// +++++++++++++++++++++++++ЛОГИКА+++++++++++++++
// добавить модель
modelFormhandler.addHandlerAdd(async function (model) {
    console.log(model + " shelf")
    const model1 = await makingJsonModel.ModelMakeJson(model)
    let addModel = await modelServer.add(model1);
    if (addModel.rez === "OK") {
        alert("моель успешно добавлена в базу данных");
    } else if (addModel === "MODEL_EXIST") {

        alert("модель с таким названием уже есть в базе данных")
        return;
    } else if (addModel.rez === "THING_OR_MODEL_WRONG") {

        alert("модель или вещь введены неправильно");
        return;
    }

    await modelCheckList.addModel(model);
    return model1;
});

//удалить модель

modelRemoveList.addCheckHandler(function (name, flag) {
    if (flag) {
        arrayModelForRemove.push(name);
    } else {
        let position = $.inArray(name, arrayModelForRemove);
        if (~position) arrayModelForRemove.splice(position, 1);
    }
});
//
// удалить из базы
async function removeFromDataBase() {
    for (let i = 0; i < arrayModelForRemove.length; i++) {
        await modelServer.remove(arrayModelForRemove[i]);
    }
    arrayModelForRemove.forEach(async (q) => {
        await modelServer.remove(q);
    })
}

// удалить из списка
modelRemoveList.addRemoveHandler(async function () {
    await removeFromDataBase();
    await modelRemoveList.removeModel(arrayModelForRemove);
    // await displayAll();
});

//найти модель
findModel.addHandlerAdd(async function (model) {
    let gettingModel = await modelServer.get(model.searchModel);
    console.log(gettingModel);
    printFindModel.print(gettingModel);
});

// получить по хозяину
getModelByOwner.addHandlerAdd(async function (modelByOwner) {
    let model = modelByOwner.get_owner;
    let model1 = modelServer.getByOwner(model);
    for(let i = 0; i< model1.length; i++){
        printByOwner.print(model1[i]);
    }
})

// получить по сезону
getModelBySeason.addHandlerAdd(async function (modelBySeason) {
    let model = modelBySeason.get_season;
    let model1 = modelServer.getBySeason(model);

    console.log(model1);
    for(let i = 0; i< model1.length; i++){
        printBySeason.print(model1[i]);
    }
});

// получить по размеру
getModelBySize.addHandlerAdd(async function (modelBySize) {
    // console.log(modelBySeason)
    let model = modelBySize.get_size;
    let model1 = modelServer.getBySize(model);

    for(let i = 0; i< model1.length; i++){
        printBySize.print(model1[i]);
    }
})

// напечатать все
function displayAll() {
    modelServer.getAll().then(function (model) {
        if (JSON.stringify(lastModels) !== JSON.stringify(model)) {
            modelCheckList.reemoveAllModels(model);
            Object.values(model).forEach(function (modelOne) {
                modelCheckList.addModel(modelOne);
            });
            lastModels = {...model};
            onLoadModel.loadModelForFind(lastModels);
        }
    });
}

// для выборки вещей
function displayThing() {
    modelServer.getAllThings().then(function (things) {
        Object.values(things).forEach(function (thingOne) {
        });
        lastThings = {...things}
        onLoadModel.loadThingsForAddingModel(lastThings);
    })
}

// для выборки хозяина вещей
function displayOwner() {
    modelServer.getAllOwners().then(function (owner) {
        Object.values(owner).forEach(function (ownerOne) {
        });
        lastOwners = {...owner}
        onLoadModel.loadOwnersForAddingModel(lastOwners);
    })
}

// для выборки сезона вещей
function displaySeason() {
    modelServer.getAllSeasons().then(function (season) {
        Object.values(season).forEach(function (seasonOne) {
        });
        lastSeasons = {...season}
        onLoadModel.loadSeasonForAddingModel(lastSeasons);
    })
}

// для выборки размера вещей
function displaySize() {
console.log(modelServer.getAllSizes() + " size");
    modelServer.getAllSizes().then(function (size) {
        Object.values(size).forEach(function (sizeOne) {
        });
        lastSizes = {...size}
        onLoadModel.loadSizeForAddingModel(lastSizes);
    })
}


displayAll();
displayOwner();
displayThing();
displaySeason();
displaySize();


