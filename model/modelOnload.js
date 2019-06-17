(
    function (window) {

        let App = window.App || {};
        let $ = window.jQuery;

        function OnLoadModel(array) {
            this.$array = array;
        }

//poisk modeli - making array
        function makingArrayModel(array) {
            let options = [];
            for (let i = 0; i < Object.keys(array).length; i++) {
                options[i] = array[i].nameModel;
            }
            return options;
        }
// spoisk shkafa
        OnLoadModel.prototype.loadModelForFind = async function getModel(arrayThings) {
            let options = makingArrayModel(arrayThings);
            let select = document.getElementById('Photo');


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


        //=====sobiraem massiv nazvaniy вещей iz bazi для списка
        function makingArrayOfThings(array) {
            let options = [];
            for (let i = 0; i < Object.keys(array).length; i++) {
                options[i] = array[i].nameThing;
            }
            return options;
        }
//====vivodim v poisk nazvaniya vseh polok kotorie est v baze=======//
        OnLoadModel.prototype.loadThingsForAddingModel = async function getThings(arrayThing){
            let options = makingArrayOfThings(arrayThing);
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

        //=====sobiraem massiv nazvaniy хозяев iz bazi для списка
        function makingArrayOfOwners(array) {
            let options = [];
            for (let i = 0; i < Object.keys(array).length; i++) {
                options[i] = array[i].owner;
            }

            return options;
        };

        OnLoadModel.prototype.loadOwnersForAddingModel = async function getOwners(arrayOwners){
            let options = makingArrayOfOwners(arrayOwners);
            let selectOwners = document.getElementById('Owner');
            let select = document.getElementById("GetOwner");


            while (selectOwners.options.length > 0) {
                selectOwners.options.remove(0);
            }
            for (let i = 0; i < options.length; i++) {
                let option = document.createElement('option');
                option.value = options[i];
                option.text = options[i];
                selectOwners.options.add(option);
            }


            for (let i = 0; i < options.length; i++) {
                let option = document.createElement('option');
                option.value = options[i];
                option.text = options[i];
                select.options.add(option);
            }
        };

        //=====sobiraem massiv nazvaniy seasons iz bazi для списка
        function makingArrayOfSeasons(array) {
            let options = [];
            for (let i = 0; i < Object.keys(array).length; i++) {
                options[i] = array[i].season;
            }
console.log(options);
            return options;
        };

        OnLoadModel.prototype.loadSeasonForAddingModel = async function getSeason(array){
            console.log(array + " hjhjhjkh");
            let options = makingArrayOfSeasons(array);
            // let selectSeason = document.getElementById('Season');
            let select = document.getElementById("GetSeason");


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

        //=====sobiraem massiv nazvaniy razmerov iz bazi для списка
        function makingArrayOfSize(array) {
            let options = [];
            for (let i = 0; i < Object.keys(array).length; i++) {
                options[i] = array[i].size;
            }
            console.log(options);
            return options;
        };

        OnLoadModel.prototype.loadSizeForAddingModel = async function getSize(array){
            console.log(array + " hjhjhjkh");
            let options = makingArrayOfSize(array);
            let select = document.getElementById("GetSize");


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

        App.OnLoadModel = OnLoadModel;
        window.App = App;
    }
)(window);

