(
    function () {
        let App = window.App || {};
        window.App = App;
        let $ = window.jQuery;

        function RemoteShelfdDataStore(url) {
            if (!url) throw Error("URL isn't defined");
            this.serverUrl = url;
        }

        RemoteShelfdDataStore.prototype.add = async function (shelf) {
            console.log(shelf);
            let rez = "[n";
            await $.ajax({
                url: this.serverUrl + 'shelf',
                type: 'POST',
                data:
                    JSON.stringify(shelf),
                contentType: 'application/json',

                success: function (data) {
                    rez = data;
                }
            })
            return {rez};
        };

        RemoteShelfdDataStore.prototype.remove = async function (nameShelf) {
            console.log("ya remove")
            let rez = 'l';
            await $.ajax({
                url: this.serverUrl + 'shelf/' + encodeURIComponent(nameShelf),
                type: 'DELETE',
                success: function (data) {
                    rez = data;
                }
            });
            return rez;
        };

        RemoteShelfdDataStore.prototype.getAll = function () {
            return $.ajax({
                url: this.serverUrl + 'shelf/all'
            })
        };

        RemoteShelfdDataStore.prototype.getAllCupboards = function () {
            return $.ajax({
                url: this.serverUrl + 'cupboard/all'
            })
        };



        RemoteShelfdDataStore.prototype.get = function (nameShelf) {
            let res;
            $.ajax({
                url: this.serverUrl + 'shelf/' + encodeURIComponent(nameShelf),
                async: false,
                success: function (response) {
                    res = response;
                }
            });
            return res;
        };



        App.RemoteShelfdDataStore = RemoteShelfdDataStore;

    }())
