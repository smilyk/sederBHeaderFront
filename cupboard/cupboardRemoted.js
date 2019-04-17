(
    function () {
        let App = window.App || {};
        window.App = App;
        let $ = window.jQuery;

        function RemoteCupboardDataStore(url) {
            if (!url) throw Error("URL isn't defined");
            this.serverUrl = url;
        }

        RemoteCupboardDataStore.prototype.add = async function (cupboard) {


            let rez = "[n";


            await $.ajax({
                url: this.serverUrl + 'cupboard',
                type: 'POST',
                data:
                    JSON.stringify(cupboard),
                contentType: 'application/json',

                success: function (data) {
                    rez = data;
                }
            })

            return {rez};
        };

        RemoteCupboardDataStore.prototype.remove = async function (nameCupboard) {
            console.log("ya remove")
            let rez = 'l';
            await $.ajax({
                url: this.serverUrl + 'cupboard/' + encodeURIComponent(nameCupboard),
                type: 'DELETE',
                success: function (data) {
                    rez = data;
                }
            });
            return rez;
        };

        RemoteCupboardDataStore.prototype.getAll = function () {
            return $.ajax({
                url: this.serverUrl + 'cupboard/all'
            })
        };

        RemoteCupboardDataStore.prototype.getAllRooms = function () {
            return $.ajax({
                url: this.serverUrl + 'room/all'
            })
        };

        RemoteCupboardDataStore.prototype.get = function (nameCupboard) {
            let res;
            $.ajax({
                url: this.serverUrl + 'cupboard/' + encodeURIComponent(nameCupboard),
                async: false,
                success: function (response) {
                    res = response;
                }
            });
            return res;
        };
        App.RemoteCupboardDataStore = RemoteCupboardDataStore;

    }())
