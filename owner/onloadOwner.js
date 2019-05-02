(
    function (window) {

        let App = window.App || {};
        let $ = window.jQuery;

        function OnLoadOwner(array) {
            this.$array = array;
        }


//=====sobiraem massiv nazvaniy pomesheniy iz bazi
        function makingArrayOwners(array) {
            let options = [];
            for (let i = 0; i < Object.keys(array).length; i++) {
                options[i] = array[i].owner;
            }
            return options;
        }
//====vivodim v poisk nazvaniya vseh pomesheniy kotorie est v baze=======//
        OnLoadOwner.prototype.loadOwner = async function getOwner(array){
            let options = makingArrayOwners(array);
            let select = document.getElementById('Owner');

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
        App.OnLoadOwner = OnLoadOwner;
        window.App = App;
    }
)(window);

