(
    function (window) {

        let App = window.App || {};
        let $ = window.jQuery;

        function OnLoadQuartes(array) {
            this.$array = array;
        }

        function makingArrayRooms(array) {
            let options = [];
            for (let i = 0; i < Object.keys(array).length; i++) {
                options[i] = array[i].nameQuartes;
            }
            return options;
        }

        OnLoadQuartes.prototype.loadRoomsForQuartes = async function getQuartes(arrayQuartes) {
            let options = makingArrayRooms(arrayQuartes);
            let select = document.getElementById('Quartes');

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
//=====sobiraem massiv nazvaniy pomesheniy iz bazi
        function makingArrayQuartes(array) {
            let options = [];
            for (let i = 0; i < Object.keys(array).length; i++) {
                options[i] = array[i].nameQuartes;
            }
            return options;
        }
//====vivodim v poisk nazvaniya vseh pomesheniy kotorie est v baze=======//
        OnLoadQuartes.prototype.loadQuartes = async function getRooms(arrayQuartes){
            let options = makingArrayQuartes(arrayQuartes);
            let select = document.getElementById('Quarteses');

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
        App.OnLoadQuartes = OnLoadQuartes;
        window.App = App;
    }
)(window);

