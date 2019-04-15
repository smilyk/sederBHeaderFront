(
    function (window) {
        let App = window.App || {};

        function MakingJson() {

        }

        MakingJson.prototype.makeJsonQuartes = function (data) {
            // console.log(data);
            let array = [];
            // let nameRoom = null;
            // array.push(nameRoom);
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
            const dataNew =
                {
                    "nameRoom": data.nameRoom,
                    "description": data.description,
                    "nameQuartes":data.nameQuartes,
                    "cupboards": array
                }
            return dataNew;
        };

        MakingJson.prototype.CupboardMakeJson = function(data){
            let arrayShelf = [];
            let arrayPhoto = [];
const dataNew =
    {
        "nameCupboard":data.nameCupboard,
        "description":data.description,
        "nameRoom":data.nameRoom,
        "fool":false,
        "nameShel":arrayShelf,
        "namePhoto":arrayPhoto
    }
    return dataNew;
        };

        App.MakingJson = MakingJson;
        window.App = App;

    })(window)