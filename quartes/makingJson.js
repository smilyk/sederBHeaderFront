(
    function (window) {
        let App = window.App || {};

        function MakingJson() {

        }

        MakingJson.prototype.makeJson = function (data) {
            console.log(data);
            let array = [];
            let nameRoom = null;
            array.push(nameRoom);
            const dataNew =
                {
                    "nameQuartes": data.nameQuartes,
                    "description": data.description,
                    "nameRoom": array
                }
            console.log(dataNew);
            return dataNew;
        };
        App.MakingJson = MakingJson;
        window.App = App;

    })(window)