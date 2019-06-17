(
    function () {
        let App = window.App || {};
        window.App = App;
        let $ = window.jQuery;

        function RemotedModelDataStore(url) {
            if (!url) throw Error("URL isn't defined");
            this.serverUrl = url;
        }

        RemotedModelDataStore.prototype.add = async function (model) {
console.log( JSON.stringify(model));
            let rez = "[n";
            await $.ajax({
                url: this.serverUrl + 'model',
                type: 'POST',
                data:
                    JSON.stringify(model),
                contentType: 'application/json',

                success: function (data) {
                    rez = data;
                }
            })
            return {rez};
        };

        RemotedModelDataStore.prototype.remove = async function (nameModel) {
            console.log("ya remove")
            let rez = 'l';
            await $.ajax({
                url: this.serverUrl + 'model/' + encodeURIComponent(nameModel),
                type: 'DELETE',
                success: function (data) {
                    rez = data;
                }
            });
            return rez;
        };

        RemotedModelDataStore.prototype.getAll = function () {
            return $.ajax({
                url: this.serverUrl + 'model/all'
            })
        };

        RemotedModelDataStore.prototype.getAllThings = function () {
            return $.ajax({
                url: this.serverUrl + 'thing/all'
            })
        };

        RemotedModelDataStore.prototype.getAllOwners = function () {
            return $.ajax({
                url: this.serverUrl + 'owner/all'
            })
        };
        
        RemotedModelDataStore.prototype.get = function (nameModel) {
            let res;
            $.ajax({
                url: this.serverUrl + 'model/' + encodeURIComponent(nameModel),
                async: false,
                success: function (response) {
                    res = response;
                }
            });
            return res;
        };

        RemotedModelDataStore.prototype.getByOwner = function (nameOwner) {
            let res;
            $.ajax({
                url: this.serverUrl + 'model/owner/' + encodeURIComponent(nameOwner),
                async: false,
                success: function (response) {
                    res = response;
                }
            });
            return res;
        };

        RemotedModelDataStore.prototype.getAllSeasons = function () {
            return $.ajax({
                url: this.serverUrl + 'season/all'
            })
        };


        RemotedModelDataStore.prototype.getBySeason = function (nameSeason) {
            let res;
            $.ajax({
                url: this.serverUrl + 'model/seazon/' + encodeURIComponent(nameSeason),
                async: false,
                success: function (response) {
                    res = response;
                }
            });
            console.log(res + " rezilt")
            return res;
        };

        RemotedModelDataStore.prototype.getAllSizes = function () {
            return $.ajax({
                url: this.serverUrl + 'size/all'
            })
        };


        RemotedModelDataStore.prototype.getBySize = function (nameSeason) {
            let res;
            $.ajax({
                url: this.serverUrl + 'model/size/' + encodeURIComponent(nameSeason),
                async: false,
                success: function (response) {
                    res = response;
                }
            });
            return res;
        };
        


        App.RemotedModelDataStore = RemotedModelDataStore;

    }())
