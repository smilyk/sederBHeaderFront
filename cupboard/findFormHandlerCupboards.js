(
    function (window) {
        let App = window.App || {};
        let $ = window.jQuery;

        function FindCupboards(selector){
            if (!selector) {
                throw new Error('No selector provided');
            }
            this.$formElement = $(selector);
            if (this.$formElement.length === 0) {
                throw new Error('Could not find element with selector: ' + selector);
            }
        };
        FindCupboards.prototype.addHandlerFindCupboards = function (fn) {

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


        App.FindCupboards = FindCupboards
        window.App = App;


    })(window)
