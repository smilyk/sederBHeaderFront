(
    function (window) {
        let App = window.App || {};
        let $ = window.jQuery;

        function FindQuartes(selector){
            if (!selector) {
                throw new Error('No selector provided');
            }
            this.$formElement = $(selector);
            if (this.$formElement.length === 0) {
                throw new Error('Could not find element with selector: ' + selector);
            }
        };

        FindQuartes.prototype.addHandlerFindQuartes = function (fn) {

            this.$formElement.on('submit', function (event) {
                // this.$formElement.empty();
                event.preventDefault();
                let data = {};
                $(this).serializeArray().forEach(function (item) {
                    data[item.name] = item.value;
                    console.log(data);
                });
                fn(data);
                console.log(data);
                this.reset();
                console.log("selector proshel");
            });
        };


        App.FindQuartes = FindQuartes
        window.App = App;


    })(window)
