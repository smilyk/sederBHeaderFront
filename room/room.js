(
    function (window) {
        let App = window.App || {};
        let $ = window.jQuery;

        function Room(selector){
            if (!selector) {
                throw new Error('No selector provided');
            }
            this.$formElement = $(selector);
            if (this.$formElement.length === 0) {
                throw new Error('Could not find element with selector: ' + selector);
            }
        };

      Room.prototype.addHandlerAdd = function (fn) {
            console.log('Setting submit handler for form');
            this.$formElement.on('submit', function (event) {
                event.preventDefault();
                let data = {};
                $(this).serializeArray().forEach(function (item) {
                    data[item.name] = item.value;
                    console.log(data);
                });
                fn(data);
                console.log(data);
                this.reset();
                this.elements[0].focus();
                console.log("selector proshel");
            });
        };


        App.Room = Room
        window.App = App;


    })(window)
