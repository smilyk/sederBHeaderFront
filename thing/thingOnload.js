(
    function (window) {

        let App = window.App || {};
        let $ = window.jQuery;

        function OnLoadThing(array) {
            this.$array = array;
        }

//poisk shkafa - making array
        function makingArrayThing(array) {
            let options = [];
            for (let i = 0; i < Object.keys(array).length; i++) {
                options[i] = array[i].nameThing;
            }
            return options;
        }
// spoisk shkafa
        OnLoadThing.prototype.loadThingForFind = async function getThings(arrayThings) {
            let options = makingArrayThing(arrayThings);
            let select = document.getElementById('Thing');


            while (select.options.length > 0) {
                select.options.remove(0);
            }

            for (let i = 0; i < options.length; i++) {
                let option = document.createElement('option');
                option.value = options[i];
                option.text = options[i];
                select.options.add(option);
            }

        };


        //=====sobiraem massiv nazvaniy кломнат iz bazi
        function makingArrayOfShelf(array) {
            let options = [];
            for (let i = 0; i < Object.keys(array).length; i++) {
                options[i] = array[i].nameShelf;
            }

            return options;
        }
//====vivodim v poisk nazvaniya vseh polok kotorie est v baze=======//
        OnLoadThing.prototype.loadShelfsForAddingThing = async function getShelfs(arrayShelfs){
            let options = makingArrayOfShelf(arrayShelfs);
            let select = document.getElementById('ThingPut');

            while (select.options.length > 0) {
                select.options.remove(0);
            }
            for (let i = 0; i < options.length; i++) {
                let option = document.createElement('option');
                option.value = options[i];
                option.text = options[i];
                select.options.add(option);
            }

        }
        App.OnLoadThing = OnLoadThing;
        window.App = App;
    }
)(window);

