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
            }
            return options;
        }
// spoisk shkafa
        OnLoadCupboards.prototype.loadCupboardsForFind = async function getRooms(arrayCupboards) {
            let options = makingArrayRooms(arrayCupboards);
            let select = document.getElementById('Cupboards');
            let moveSelect = document.getElementById('CupboardsMove');
            // let pointFoolNotFoolCupboard = document.getElementById('CupboardsFoolNotFool')

            while (select.options.length > 0) {
                select.options.remove(0);
            }
            while (moveSelect.options.length > 0) {
                moveSelect.options.remove(0);
            }
            for (let i = 0; i < options.length; i++) {
                let option = document.createElement('option');
                option.value = options[i];
                option.text = options[i];
                select.options.add(option);
            }
            for (let i = 0; i < options.length; i++) {
                let option = document.createElement('option');
                option.value = options[i];
                option.text = options[i];
               moveSelect.options.add(option);
            }


        };
//=====sobiraem massiv nazvaniy кломнат iz bazi
        function makingArrayCupboards(array) {
            let options = [];
            for (let i = 0; i < Object.keys(array).length; i++) {
                options[i] = array[i].nameRoom;
            }

            return options;
        }
//====vivodim v poisk nazvaniya vseh komnat kotorie est v baze=======//
        OnLoadCupboards.prototype.loadRoomsForAddingCupboard = async function getCupboards(arrayRooms){
            let options = makingArrayCupboards(arrayRooms);
            let select = document.getElementById('room');
            let moveRoomFromSelect = document.getElementById('FromRoom');
            let moveRoomToSelect = document.getElementById('Toroom');
            // let allCupboardInTheRoom = document.getElementById('AllCupboardsInTheRoom');
            // let notFoolCupboardsInTheRoom = document.getElementById('AllNotFoolCupboardsInTheRoom')

            while (select.options.length > 0) {
                select.options.remove(0);
            }
            for (let i = 0; i < options.length; i++) {
                let option = document.createElement('option');
                option.value = options[i];
                option.text = options[i];
                select.options.add(option);
            }
            for (let i = 0; i < options.length; i++) {
                let option = document.createElement('option');
                option.value = options[i];
                option.text = options[i];
                moveRoomFromSelect.options.add(option);
            }
            for (let i = 0; i < options.length; i++) {
                let option = document.createElement('option');
                option.value = options[i];
                option.text = options[i];
                moveRoomToSelect.options.add(option);
            }
            // for (let i = 0; i < options.length; i++) {
            //     let option = document.createElement('option');
            //     option.value = options[i];
            //     option.text = options[i];
            //     allCupboardInTheRoom.options.add(option);
            // }
            // for (let i = 0; i < options.length; i++) {
            //     let option = document.createElement('option');
            //     option.value = options[i];
            //     option.text = options[i];
            //     notFoolCupboardsInTheRoom.options.add(option);
            // }
        }
        App.OnLoadCupboards = OnLoadCupboards;
        window.App = App;
    }
)(window);

