(
    function () {
        let App = window.App || {};
        window.App = App;
        let $ = window.jQuery;

        function RemotedThingDataStore(url) {
            if (!url) throw Error("URL isn't defined");
            this.serverUrl = url;
        }

        RemotedThingDataStore.prototype.add = async function (thing) {
            console.log(thing);
            let rez = "[n";
            await $.ajax({
                url: this.serverUrl + 'thing',
                type: 'POST',
                data:
                    JSON.stringify(thing),
                contentType: 'application/json',

                success: function (data) {
                    rez = data;
                }
            })
            return {rez};
        };

        RemotedThingDataStore.prototype.remove = async function (nameThing) {
            console.log("ya remove")
            let rez = 'l';
            await $.ajax({
                url: this.serverUrl + 'thing/' + encodeURIComponent(nameThing),
                type: 'DELETE',
                success: function (data) {
                    rez = data;
                }
            });
            return rez;
        };

        RemotedThingDataStore.prototype.getAll = function () {
            return $.ajax({
                url: this.serverUrl + 'thing/all'
            })
        };

        RemotedThingDataStore.prototype.getAllShelfs = function () {
            return $.ajax({
                url: this.serverUrl + 'shelf/all'
            })
        };



        RemotedThingDataStore.prototype.get = function (nameThing) {
            let res;
            $.ajax({
                url: this.serverUrl + 'thing/' + encodeURIComponent(nameThing),
                async: false,
                success: function (response) {
                    res = response;
                }
            });
            return res;
        };

        RemotedThingDataStore.prototype.getThingNotOnTheShef = function () {
            let res;
            $.ajax({
                url: this.serverUrl + 'thing/withoutplace',
                async: false,
                success: function (response) {
                    res = response;
                }
            });
            return res;
        };

        RemotedThingDataStore.prototype.putThingOnTheShelf = async function (thing,thingJson) {
            console.log(thing);
            let rez = "[n";
            await $.ajax({
                url: this.serverUrl + 'thing',
                type: 'PUT',
                data:
                    JSON.stringify(thingJson),
                contentType: 'application/json',

                success: function (data) {
                    rez = data;
                }
            })
            return {rez};
        };



        App.RemotedThingDataStore = RemotedThingDataStore;

    }())
