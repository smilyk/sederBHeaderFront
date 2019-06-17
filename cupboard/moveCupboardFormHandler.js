(
    function (window) {
        let App = window.App || {};
        let $ = window.jQuery;

        function MoveCupboard(selector){
            if (!selector) {
                throw new Error('No selector provided');
            }
            this.$formElement = $(selector);
            if (this.$formElement.length === 0) {
                throw new Error('Could not find element with selector: ' + selector);
            }
        };



        MoveCupboard.prototype.addHandlerMoveCupboards = function (fn) {

            this.$formElement.on('submit', function (event) {
                event.preventDefault();
                let data = {};
                let rez = [];
                $(this).serializeArray().forEach(function (item) {

                    data[item.name] = item.value;
                 rez.push(item.value);
                });
                fn(rez);
                this.reset();

            });
        };



        App.MoveCupboard = MoveCupboard
        window.App = App;


    })(window)
