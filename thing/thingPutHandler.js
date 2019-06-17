(
    function (window) {
        let App = window.App || {};
        let $ = window.jQuery;

        function ThingPutHandler(selector) {
            console.log(selector + " selector")
            this.$putThing = $(selector);
        };

        ThingPutHandler.prototype.addPutHandler = function (fn) {
            this.$putThing.on('submit', function (event) {
                event.preventDefault();
                let data = {};
                $(this).serializeArray().forEach(function (item) {
                    data = item.value;

                });
                fn(data);
                this.reset();
                this.elements[0].focus();
            });
        };


        App.ThingPutHandler = ThingPutHandler;
        window.App = App;
    }


)(window)
