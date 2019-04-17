(
    function (window) {

        let App = window.App || {};
        let $ = window.jQuery;

        function OnLoadCupboards(array) {
            this.$array = array;
        }
//poisk shkafa - making array
        function makingArrayRooms(array) {
            let options = [];
            for (let i = 0; i < Object.keys(array).length; i++) {
                options[i] = array[i].nameCupboard;
                console.log(options[i] + " jjjj");
            }
            return options;
        }
// spoisk shkafa
        OnLoadCupboards.prototype.loadCupboardsForFind = async function getRooms(arrayCupboards) {
            let options = makingArrayRooms(arrayCupboards);
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

        };
//=====sobiraem massiv nazvaniy кломнат iz bazi
        function makingArrayCupboards(array) {
            let options = [];
            console.log(Object.keys(array).length)
            console.log(array + " a")
            for (let i = 0; i < Object.keys(array).length; i++) {
                options[i] = array[i].nameRoom;
            }
            console.log(options);
            return options;
        }
//====vivodim v poisk nazvaniya vseh komnat kotorie est v baze=======//
        OnLoadCupboards.prototype.loadRoomsForAddingCupboard = async function getCupboards(arrayRooms){
            console.log(array + " a cddd")
            let options = makingArrayCupboards(arrayRooms);
            let select = document.getElementById('room');

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
        App.OnLoadCupboards = OnLoadCupboards;
        window.App = App;
    }
)(window);

