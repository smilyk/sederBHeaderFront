(
    function (window) {

        let App = window.App || {};
        let $ = window.jQuery;

        function OnLoadPhoto(array) {
            this.$array = array;
        }

//poisk modeli - making array
        function makingArrayPhoto(array) {
            let options = [];
            for (let i = 0; i < Object.keys(array).length; i++) {
                options[i] = array[i].namePhoto;
            }
            return options;
        }
// spoisk shkafa
        OnLoadPhoto.prototype.loadPhotoForFind = async function getPhoto(arrayPhoto) {
            let options = makingArrayPhoto(arrayPhoto);
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
        OnLoadPhoto.prototype.loadThingsForAddingModel = async function getThings(arrayThing){
            let options = makingArrayOfThings(arrayThing);
            let select = document.getElementById('ThingForPhoto');

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

        //=====sobiraem massiv nazvaniy шкафов iz bazi для списка
        function makingArrayOfCupboards(array) {

            let options = [];
            for (let i = 0; i < Object.keys(array).length; i++) {

                options[i] = array[i].nameCupboard;
                // console.log(options[i].nameCupboard);
            }

            return options;
        };

        OnLoadPhoto.prototype.loadCupboardsForAddingPhoto = async function getCupboard(arrayCupboards){
            console.log(lastCupboards[0].nameCupboard + "jjj")
            let options = makingArrayOfCupboards(arrayCupboards);
            let select = document.getElementById("CupboardForPhoto");


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

        App.OnLoadPhoto = OnLoadPhoto;
        window.App = App;
    }
)(window);

