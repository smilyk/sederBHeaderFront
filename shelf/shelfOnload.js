(
    function (window) {

        let App = window.App || {};
        let $ = window.jQuery;

        function OnLoadShelf(array) {
            this.$array = array;
        }

//poisk shkafa - making array
        function makingArrayShelfs(array) {
            let options = [];
            for (let i = 0; i < Object.keys(array).length; i++) {
                options[i] = array[i].nameShelf;
            }
            return options;
        }
// spoisk shkafa
        OnLoadShelf.prototype.loadShelfsForFind = async function getCupboards(arrayShelfs) {
            let options = makingArrayShelfs(arrayShelfs);
            let select = document.getElementById('Shelf');


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
//=====sobiraem massiv nazvaniy шкафов iz bazi
        function makingArrayCupboards(array) {
            let options = [];
            for (let i = 0; i < Object.keys(array).length; i++) {
                options[i] = array[i].nameCupboard;
            }

            return options;
        }
//====vivodim v poisk nazvaniya vseh komnat kotorie est v baze=======//
        OnLoadShelf.prototype.loadRoomsForAddingCupboard = async function getCupboards(arrayShelfs){
            let options = makingArrayCupboards(arrayShelfs);
            let select = document.getElementById('Cupboards');

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
        App.OnLoadShelf = OnLoadShelf;
        window.App = App;
    }
)(window);

