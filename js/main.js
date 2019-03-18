
QUARTES_SELECTOR = '[data-seder-quartes="quartes"]';
QUARTES_CHEKLIST_SELECTOR = '[data-seder-quartes="quartes_checklist"]';
QUARTES_REMOVE_SELECTOR = '[data-seder-quartes="removeQuartes"]';


let quartesFormhandler = new App.Quartes(QUARTES_SELECTOR);
let quartesCheckList= new App.QuartesCheckList(QUARTES_CHEKLIST_SELECTOR);
let quartesRemoveList = new App.RemoveQuartes(QUARTES_REMOVE_SELECTOR);
let arrayForRemove = []



quartesFormhandler.addHandlerAdd(function (quartes) {
    quartesCheckList.addQuartes(quartes);//tyt nujen promise
});


quartesRemoveList.addCheckHandler(function (name, flag) {
    console.log("y");
    if(flag){
        arrayForRemove.push(name);
        console.log(flag);
    }else{
        console.log(flag);
        let position = $.inArray(name, arrayForRemove);
console.log(position + " position")
        if ( ~position ) arrayForRemove.splice(position, 1);
    }
    console.log(arrayForRemove);
});
quartesRemoveList.addRemoveHandler(function () {
    console.log("delite");
    quartesRemoveList.removeQuartes(arrayForRemove);

});


