(
    function () {
        let App = window.App || {};
        window.App = App;
        let $ = window.jQuery;

        function OwnerRemoteDataStore(url) {
            if (!url) throw Error("URL isn't defined");
            this.serverUrl = url;
        }

        OwnerRemoteDataStore.prototype.add = async function (owner) {


            let rez = "[n";


            await $.ajax({
                url: this.serverUrl + 'owner',
                type: 'POST',
                data:
                    JSON.stringify(owner),
                contentType: 'application/json',

                success: function (data) {
                    rez = data;
                }
            })

            return {rez};
        };

        OwnerRemoteDataStore.prototype.remove = async function (nameOwner) {
            console.log("ya remove")
            let rez = 'l';
            await $.ajax({
                url: this.serverUrl + 'owner/' + encodeURIComponent(nameOwner),
                type: 'DELETE',
                success: function (data) {
                    rez = data;
                }
            });
            return rez;
        };

        OwnerRemoteDataStore.prototype.getAll = function () {
            return $.ajax({
                url: this.serverUrl + 'owner/all'
            })
        };

        OwnerRemoteDataStore.prototype.get = function (nameOwner) {
            let res;
            $.ajax({
                url: this.serverUrl + 'owner/' + encodeURIComponent(nameOwner),
                async: false,
                success: function (response) {
                    res = response;
                }
            });
            return res;
        };
        App.OwnerRemoteDataStore = OwnerRemoteDataStore;

    }())
