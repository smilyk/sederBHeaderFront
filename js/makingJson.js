(
    function (window) {
        let App = window.App || {};

        function MakingJson() {

        }

        MakingJson.prototype.makeJsonQuartes = function (data) {
            let array = [];
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
                    "nameQuartes": data.nameQuartes,
                    "cupboards": array
                }
            return dataNew;
        };

        MakingJson.prototype.CupboardMakeJson = function (data) {
            let arrayShelf = [];
            let arrayPhoto = [];
            const dataNew =
                {
                    "nameCupboard": data.nameCupboard,
                    "description": data.description,
                    "nameRoom": data.nameRoom,
                    "fool": false,
                    "nameShel": arrayShelf,
                    "namePhoto": arrayPhoto
                }
            return dataNew;
        };

        MakingJson.prototype.CupboardMakeForRemoveJson = function (data) {
            const dataNew =
                {
                    "nameCupboard": data[0],
                    "nameRoomFrom": data[1],
                    "nameRoomTo": data[2]
                }
            return dataNew;
        };

        MakingJson.prototype.ShelfMakeJson = function (data) {
            let arrayThings = [];
            console.log(data)
            // let arrayPhoto = [];
            const dataNew =
                {

                    "nameShelf": data.nameShelf,
                    "description": data.description,
                    "nameCupboard": data.nameCupboard,
                    "fool": false,
                    "nameThings": arrayThings,
                }
            return dataNew;
        };

        MakingJson.prototype.ThingMakeJsonMakeJson = function (data) {
            const dataNew =
                {

                    "nameThing": data.nameThing,
                    "description": data.description,
                    "nameCupboard": data.nameCupboard,
                    "onTheShelf": false,
                }
            console.log(dataNew + " json");
            return dataNew;
        };

        MakingJson.prototype.ModelMakeJson = function (data) {
            data.nameThing = data.nameThing;
            data.cupboard = data.nameCupboard;
            let array = [
                "cupboard",
                "nameCupboard",
                "nameRoom"


                                ]
            const dataNew =
                {

                    "nameModel": data.nameModel,
                    "description": data.description,
                    "color": data.color,
                    "size": data.size,
                    "seazon": data.seazon,
                    "owner": data.owner,
                    "thing": {"nameThing":data.nameThing},
                    "cupboard":array
                }
            console.log(dataNew + " json");
            return dataNew;
        };

        MakingJson.prototype.PhotoCupboardJson = function (data) {
            console.log(data)
            const dataNew =
                {
                    "namePhoto": data.namePhotoCupboard,
                    "description": data.description,
                    "nameCupboard":data.cupboardForPhoto
                }
            return dataNew;
        };

        MakingJson.prototype.PhotoThingJson = function (data) {
            const dataNew =
                {
                   "namePhoto":data.namePhoto,
                    "description": data.description,
                   "nameThing":data.thingForPhoto
                }
            return dataNew;
        };

        MakingJson.prototype.OwnerJson = function (data) {
            const dataNew =
                {
                    "owner":data.nameOwner

                }
            return dataNew;
        };

        App.MakingJson = MakingJson;
        window.App = App;

    })(window)
