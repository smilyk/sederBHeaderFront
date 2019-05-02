(
    function (window) {
        let App = window.App || {};
        let $ = window.jQuery;

        function Thing(selector){
            if (!selector) {
                throw new Error('No selector provided');
            }
            this.$formElement = $(selector);
            if (this.$formElement.length === 0) {
                throw new Error('Could not find element with selector: ' + selector);
            }
        };

      Thing.prototype.addHandlerAdd = function (fn) {
            this.$formElement.on('submit', function (event) {
                event.preventDefault();
                let data = {};
                $(this).serializeArray().forEach(function (item) {
                    data[item.name] = item.value;
                });
                fn(data);
                this.reset();
                this.elements[0].focus();
            });
        };


        App.Thing = Thing
        window.App = App;

    })(window)
