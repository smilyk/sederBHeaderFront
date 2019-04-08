(
    function () {
        let App = window.App || {};
        window.App = App;
        let $ = window.jQuery;

        function RemoteRoomDataStore(url) {
            if (!url) throw Error("URL isn't defined");
            this.serverUrl = url;
        }

        RemoteRoomDataStore.prototype.add = async function (room) {


            let rez = "[n";


            await $.ajax({
                url: this.serverUrl + 'room',
                type: 'POST',
                data:
                    JSON.stringify(room),
                contentType: 'application/json',

                success: function (data) {
                    rez = data;
                }
            })

            return {rez};
        };

        RemoteRoomDataStore.prototype.remove = async function (nameRoom) {
            console.log("ya remove")
            let rez = 'l';
            await $.ajax({
                url: this.serverUrl + 'room/' + encodeURIComponent(nameRoom),
                type: 'DELETE',
                success: function (data) {
                    rez = data;
                }
            });
            return rez;
        };

        RemoteRoomDataStore.prototype.getAll = function () {
            return $.ajax({
                url: this.serverUrl + 'room/all'
            })
        };
        RemoteRoomDataStore.prototype.get = function (nameRoom) {
            let res;
            $.ajax({
                url: this.serverUrl + 'room/' + encodeURIComponent(nameRoom),
                async: false,
                success: function (response) {
                    res = response;
                }
            });
            return res;
        };
        App.RemoteRoomDataStore = RemoteRoomDataStore;

    }())