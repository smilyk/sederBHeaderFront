(
    function (window) {

        let App = window.App || {};
        let $ = window.jQuery;

        function OnLoad(array) {
            this.$array = array;
        }

        function makingArray(array) {
            let options = [];
            for (let i = 0; i < Object.keys(array).length; i++) {
                options[i] = array[i].nameQuartes;
            }
            return options;
        }

        OnLoad.prototype.load = async function getQuartes(arrayQuartes) {
            let options = makingArray(arrayQuartes);
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

        function makingArrayRooms(array) {
            let options = [];
            for (let i = 0; i < Object.keys(array).length; i++) {
                options[i] = array[i].nameRoom;
            }
            return options;
        }

        OnLoad.prototype.loadRooms = async function getRooms(arrayRooms){
            let options = makingArrayRooms(arrayRooms);
            let select = document.getElementById('Rooms');

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
        App.OnLoad = OnLoad;
        window.App = App;
    }
)(window);

