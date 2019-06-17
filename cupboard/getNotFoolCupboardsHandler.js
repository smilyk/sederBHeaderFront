
(
    function (window) {
        let App = window.App || {};
        let $ = window.jQuery;

        function GetNotFoolCupboards(selector){
            if (!selector) {
                throw new Error('No selector provided');
            }
            this.$formElement = $(selector);
            if (this.$formElement.length === 0) {
                throw new Error('Could not find element with selector: ' + selector);
            }
        };
        GetNotFoolCupboards.prototype.getNotFoolCupboards = function (fn) {

            this.$formElement.on('submit', function (event) {
                // this.$formElement.empty();
                event.preventDefault();
                let data = {};
                $(this).serializeArray().forEach(function (item) {
                    data = item.value;
                });
                fn(data);
                this.reset();
            });

        };


        App.GetNotFoolCupboards = GetNotFoolCupboards
        window.App = App;


    })(window)
