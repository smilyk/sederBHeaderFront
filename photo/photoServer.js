(
    function () {
        let App = window.App || {};
        window.App = App;
        let $ = window.jQuery;

        function RemotedPhotolDataStore(url) {
            if (!url) throw Error("URL isn't defined");
            this.serverUrl = url;
        }

        RemotedPhotolDataStore.prototype.addPhotoThing = async function (photo, namePhotoThing) {

            let rez = "[n";
            await $.ajax({
                url: this.serverUrl + 'photo/photothing/'+ encodeURIComponent(namePhotoThing),
                type: 'POST',
                data:
                    JSON.stringify(photo),
                contentType: 'application/json',

                success: function (data) {
                    rez = data;
                }
            })
            return {rez};
        };


        RemotedPhotolDataStore.prototype.addPhotoCupboard = async function (photo, namePhotoCupboard) {

            let rez = "[n";
            await $.ajax({
                url: this.serverUrl + 'photo/photocupboard/'+ encodeURIComponent(namePhotoCupboard),
                type: 'POST',
                data:
                    JSON.stringify(photo),
                contentType: 'application/json',

                success: function (data) {
                    rez = data;
                }
            })
            return {rez};
        };

        RemotedPhotolDataStore.prototype.remove = async function (namePhoto) {
            console.log("ya remove")
            let rez = 'l';
            await $.ajax({
                url: this.serverUrl + 'photo/' + encodeURIComponent(namePhoto),
                type: 'DELETE',
                success: function (data) {
                    rez = data;
                }
            });
            return rez;
        };

        RemotedPhotolDataStore.prototype.getAll = function () {
            return $.ajax({
                url: this.serverUrl + 'photo/all'
            })
        };


        RemotedPhotolDataStore.prototype.get = function (namePhoto) {
            let res;
            $.ajax({
                url: this.serverUrl + 'photo/photo/' + encodeURIComponent(namePhoto),
                async: false,
                success: function (response) {
                    res = response;
                }
            });
            return res;
        };

        RemotedPhotolDataStore.prototype.getAllCupboards = function () {
            return $.ajax({
                url: this.serverUrl + 'cupboard/all'
            })
        };

        RemotedPhotolDataStore.prototype.getAllThings = function () {
            return $.ajax({
                url: this.serverUrl + 'thing/all'
            })
        };

        App.RemotedPhotolDataStore = RemotedPhotolDataStore;

    }())
