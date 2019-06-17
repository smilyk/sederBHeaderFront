(
    function () {
        let App = window.App || {};
        window.App = App;
        let $ = window.jQuery;

        function RemoteDataStore(url) {
            if (!url) throw Error("URL isn't defined");
            this.serverUrl = url;
        }

        RemoteDataStore.prototype.add = async function (quartes) {


            let rez = "[n";


            await $.ajax({
                url: this.serverUrl + 'quartes',
                type: 'POST',
                data:
                    JSON.stringify(quartes),
                contentType: 'application/json',

                success: function (data) {
                    rez = data;
                }
            })

            return {rez};
        };

        RemoteDataStore.prototype.remove = async function (nameQuartes) {
            console.log("ya remove")
            let rez = 'l';
            await $.ajax({
                url: this.serverUrl + 'quartes/' + encodeURIComponent(nameQuartes),
                type: 'DELETE',
                success: function (data) {
                    rez = data;
                }
            });
            return rez;
        };

        RemoteDataStore.prototype.getAll = function () {
            return $.ajax({
                url: this.serverUrl + 'quartes/all'
            })
        };

        RemoteDataStore.prototype.get = function (nameQuartes) {
            let res;
            $.ajax({
                url: this.serverUrl + 'quartes/' + encodeURIComponent(nameQuartes),
                async: false,
                success: function (response) {
                    res = response;
                }
            });
            return res;
        };
        App.RemoteDataStore = RemoteDataStore;

    }())
