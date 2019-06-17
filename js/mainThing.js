let thingNavigator = new App.ThingNavigator();
let thingServer = new App.RemotedThingDataStore('https://sederbheader.herokuapp.com/api/');
let makingJsonThing = new App.MakingJson();
THING_SELECTOR = '[data-seder-thing="thing"]';
THING_CHECKLIST_SELECTOR = '[data-seder-thing="thing_checklist"]';
THING_REMOVE_SELECTOR = '[data-seder-thing="remove-thing"]';

let thingCheckList = new App.ThingChecklist(THING_CHECKLIST_SELECTOR);
let thingRemoveList = new App.RemoveThing(THING_REMOVE_SELECTOR);
let thingFormhandler = new App.Thing(THING_SELECTOR);
let lastThings = {};
let arrayThingsForRemove = []
// //poisk
THING_FIND = '[data-seder-thing="thing_find_thing"]';
let findThings = new App.Thing(THING_FIND);
let array = [];
let onLoadThings = new App.OnLoadThing(array);
PRINT_FIND_THING = '[data-seder-thing="print_find_thing"]'
let printFindThings = new App.ThingChecklist(PRINT_FIND_THING);
// //vibor iz spiska
let onLoadThing = new App.OnLoadThing(array);
let lastShelfs = [];
//вещи, которые еще не лежат на полках
THINGS_NOT_ON_THE_SHELF = '[data-seder-thing="thing_not_on_shelf_button"]';
let things_not_on_the_shelf = new App.Thing(THINGS_NOT_ON_THE_SHELF);
PRINT_THINGS_NO_ON_THE_PLACE = '[data-seder-thing="things_not_on_the_shelf"]'
let thing_not_on_the_shelf_print = new App.ThingNotOnThePlaceChecklist(PRINT_THINGS_NO_ON_THE_PLACE)
//положить вещь на полку
PUT_THING_ON_THE_SHELF = '[data-seder-thing="put_on_shelf_button"]';
let put_thing_on_the_shelf = new App.PutThingOnTheShelf(PUT_THING_ON_THE_SHELF);
let thing = "";

//кнопка - положить на полку
PUT = '[data-seder-thing="put"]';
let put = new App.ThingPutHandler(PUT);
PUT_PRINT_THING = '[data-seder-thing="things_not_on_the_shelf]';
PUTTING = '[data-seder-thing="thing_putting"]'
let printPutOnTheShelf = new App.PutThingPrint(PUTTING);

//физически положить вещь на полку
PUTTING_THING_ON_THE_SHELF_FINISH = '[data-seder-thing="putting_on_the_shelf"]';
let puttingThingOnTheShelfFinish = new App.ThingPutHandler(PUTTING_THING_ON_THE_SHELF_FINISH);

//физиччески положить вещь на полку
puttingThingOnTheShelfFinish.addPutHandler(async function (data) {
    let jsonForPuttingOnTheShelf = {
        "shelfName" : data,
        "thingName" : thing
    }
   let rez =  await thingServer.putThingOnTheShelf(thing, jsonForPuttingOnTheShelf);
console.log(rez + "rez");
})

//выбор вещей не на полке
put_thing_on_the_shelf.addCheckHandler(async function (nameThing) {
    thing = nameThing;
})

// выбор вещи которую нужно положить на полку
put.addPutHandler(async function (fn) {
    printPutOnTheShelf.addThing(thing);
})


//вещи, которые еще не лежат на полках
things_not_on_the_shelf.addHandlerAdd(async function (thing) {
    console.log("hi");
    let thingNotOnTheShelf = thingServer.getThingNotOnTheShef()
    console.log(thingNotOnTheShelf);
    thing_not_on_the_shelf_print.print(thingNotOnTheShelf);

})


// //найти полку
findThings.addHandlerAdd(async function (thing) {
    let gettingThing = await thingServer.get(thing.searchThing);
    console.log(gettingThing);
    printFindThings.print(gettingThing);
});

// добавить полку
thingFormhandler.addHandlerAdd(async function (thing) {
    console.log(thing + " shelf")
    const thing1 = await makingJsonThing.ThingMakeJsonMakeJson(thing)
    let addThing = await thingServer.add(thing1);
    if (addThing.rez === "OK") {
        alert("вешь успешно добавлена в базу данных")
    } else {
        alert("вещь с таким названием уже есть в базе данных")
        return;
    }
    await thingCheckList.addThing(thing);
    return thing1;
});


// //удалить полку
thingRemoveList.addCheckHandler(function (name, flag) {
    if (flag) {
        arrayThingsForRemove.push(name);
    } else {
        let position = $.inArray(name, arrayThingsForRemove);
        if (~position) arrayThingsForRemove.splice(position, 1);
    }

});
//
// удалить из базы
async function removeFromDataBase() {
    for (let i = 0; i < arrayThingsForRemove.length; i++) {
        await thingServer.remove(arrayThingsForRemove[i]);
    }
    arrayThingsForRemove.forEach(async (q) => {
        await thingServer.remove(q);
    })
}

// удалить из списка
thingRemoveList.addRemoveHandler(async function () {
    await removeFromDataBase();
    await thingRemoveList.removeThing(arrayThingsForRemove);
    await displayAll();
});

// напечатать все
function displayAll() {
    thingServer.getAll().then(function (thing) {
        if (JSON.stringify(lastThings) !== JSON.stringify(thing)) {
            thingCheckList.reemoveAllThings(thing);
            Object.values(thing).forEach(function (thingOne) {
                thingCheckList.addThing(thingOne);
            });
            lastThings = {...thing};
            onLoadThings.loadThingForFind(lastThings);
        }
    });
}

// для выборки полок
function displayShelf() {
    thingServer.getAllShelfs().then(function (shelfs) {
        Object.values(shelfs).forEach(function (shelfOne) {
        });
        lastShelfs = {...shelfs}
        onLoadThing.loadShelfsForAddingThing(lastShelfs);
    })
}

displayAll();
displayShelf();


