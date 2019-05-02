(
    function (window) {
        let App = window.App || {};
        let $ = window.jQuery;

        function FindShelf(selector){
            if (!selector) {
                throw new Error('No selector provided');
            }
            this.$formElement = $(selector);
            if (this.$formElement.length === 0) {
                throw new Error('Could not find element with selector: ' + selector);
            }
        };
        FindShelf.prototype.addHandlerFindShelf = function (fn) {

            this.$formElement.on('submit', function (event) {
                // this.$formElement.empty();
                event.preventDefault();
                let data = {};
                $(this).serializeArray().forEach(function (item) {
                    data[item.name] = item.value;
                });
                fn(data);
                this.reset();
            });
        };


        App.FindShelf = FindShelf
        window.App = App;


    })(window)
