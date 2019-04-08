(
    function (window) {
        let App = window.App || {};

        function MakingJson() {

        }

        MakingJson.prototype.makeJsonQuartes = function (data) {
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
            return dataNew;
        };

        MakingJson.prototype.RoomMakeJson = function (data) {
            let array = [];
            let nameRoom = null;
            array.push(nameRoom);
            const dataNew =
                {
                    "nameRoom": data.nameRoom,
                    "description": data.description,
                    "nameQuartes":data.nameQuartes,
                    "cupboards": array
                }
            return dataNew;
        };

        // String nameRoom;
        // String description;
        // String nameQuartes;
        // List<String> cupboards;

        App.MakingJson = MakingJson;
        window.App = App;

    })(window)