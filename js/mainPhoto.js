let photoNavigator = new App.PhotoNavigator();
let photoServer = new App.RemotedPhotolDataStore('https://sederbheader.herokuapp.com/api/');
let makingJsonPhoto = new App.MakingJson();

//addPhotoCupboard
PHOTO_CUPBOARD_SELECTOR = '[data-seder-photo="photo_cupboard"]';
let photoCupboardSelector = new App.Photo(PHOTO_CUPBOARD_SELECTOR);
PHOTO_CHECKLIST_SELECTOR = '[data-seder-photo="photo_checklist"]';
let photoCheckList = new App.PhotoChecklist(PHOTO_CHECKLIST_SELECTOR);



//addPhotoThing
PHOTO_THING_SELECTOR = '[data-seder-photo="photo_thing"]';
let photoThingSelector = new App.Photo(PHOTO_THING_SELECTOR);
// PHOTO_CHECKLIST_SELECTOR = '[data-seder-photo="photo_checklist"]';
// let photoCheckList = new App.PhotoChecklist(PHOTO_CHECKLIST_SELECTOR);




// //удалить модель
PHOTO_REMOVE_SELECTOR = '[data-seder-photo="remove-photo"]';
let photoRemoveList = new App.RemoveModel(PHOTO_REMOVE_SELECTOR);
let arrayPhotoForRemove = [];
//
//напечатать все
let lastPhotos = [];
//
//для загрузки
let array = [];
let onLoadPhoto = new App.OnLoadPhoto(array);
let lastCupboards = [];
let lastThings = [];


//поиск модели
PHOTO_FIND = '[data-seder-photo="photo_find_photo"]';
let findPhoto = new App.Photo(PHOTO_FIND);
PRINT_FIND_PHOTO = '[data-seder-photo="print_find_photo"]'
let printFindPhoto = new App.PhotoChecklist(PRINT_FIND_PHOTO);


// // +++++++++++++++++++++++++ЛОГИКА+++++++++++++++
// добавить фото шкафа
photoCupboardSelector.addHandlerAdd(async function (cupboard) {
    console.log(cupboard + " shelf")
    const cupboard1 = await makingJsonPhoto.PhotoCupboardJson(cupboard)
    console.log(cupboard1)
    let cupboardName = cupboard1.nameCupboard;
    console.log(cupboardName);
    let addPhoto = await photoServer.addPhotoCupboard(cupboard1, cupboardName);
    if (addPhoto.rez === "OK") {
        alert("фото шкафа успешно добавлено в базу данных");
    } else if (addPhoto.rez === "PHOTO_EXIST") {

        alert("модель с таким названием уже есть в базе данных")
        return;
    } else if (addPhoto.rez === "CUPBOARD_IS_WRONG") {

        alert("шкаф введен неправильно");
        return;
    }
    await photoCheckList.addPhot(cupboard1);

});

// добавить фото вещи
photoThingSelector.addHandlerAdd(async function (thing) {
    const thing1 = await makingJsonPhoto.PhotoThingJson(thing)
    console.log(thing1)
    let thingName = thing1.nameThing;
    console.log(thingName);
    let addPhoto = await photoServer.addPhotoThing(thing1, thingName);
    if (addPhoto.rez === "OK") {
        alert("фото шкафа успешно добавлено в базу данных");
    } else if (addPhoto.rez === "PHOTO_EXIST") {

        alert("фото с таким названием уже есть в базе данных")
        return;
    } else if (addPhoto.rez === "THING_IS_WRONG") {

        alert("вещь введена неправильно");
        return;
    }
    await photoCheckList.addPhot(thing1);

});
//
// //удалить модель
//
photoRemoveList.addCheckHandler(function (name, flag) {
    if (flag) {
        arrayPhotoForRemove.push(name);
    } else {
        let position = $.inArray(name, arrayPhotoForRemove);
        if (~position) arrayPhotoForRemove.splice(position, 1);
    }
});
// //
// // удалить из базы
async function removeFromDataBase() {
    for (let i = 0; i < arrayPhotoForRemove.length; i++) {
        await photoServer.remove(arrayPhotoForRemove[i]);
    }
    arrayPhotoForRemove.forEach(async (q) => {
        await photoServer.remove(q);
    })
}
//
// // удалить из списка
photoRemoveList.addRemoveHandler(async function () {
    await removeFromDataBase();
    await photoRemoveList.removeModel(arrayPhotoForRemove);
    // await displayAll();
});
//
// найти модель
findPhoto.addHandlerAdd(async function (photo) {
    let gettingPhoto = await photoServer.get(photo.searchPhoto) ;
    console.log(gettingPhoto);
    printFindPhoto.print(gettingPhoto);
});


// напечатать все
function displayAll() {
    photoServer.getAll().then(function (photo) {
        if (JSON.stringify(lastPhotos) !== JSON.stringify(photo)) {
            photoCheckList.removeAllPhotos(photo);
            Object.values(photo).forEach(function (photoOne) {
                console.log(photoOne);
                photoCheckList.addPhot(photoOne);
            });
            lastPhotos = {...photo};
            onLoadPhoto.loadPhotoForFind(lastPhotos);
        }
    });
}

// для выборки шкафов
function displayCupboard() {
    photoServer.getAllCupboards().then(function (cupboard) {
        Object.values(cupboard).forEach(function (shelfOne) {
        });
        lastCupboards = {...cupboard}
        console.log(lastCupboards);
        onLoadPhoto.loadCupboardsForAddingPhoto(lastCupboards);
    })
}

// для выборки вещей
function displayThings() {
    photoServer.getAllThings().then(function (thing) {
        // Object.values(cupboard).forEach(function (shelfOne) {
        // });
        lastThings = {...thing}
        onLoadPhoto.loadThingsForAddingModel(lastThings);
    })
}


displayAll();
displayCupboard();
displayThings();

