(
    function (window) {
        let App = window.App || {};
        let $ = window.jQuery;

        function FindRoom(selector){
            if (!selector) {
                throw new Error('No selector provided');
            }
            this.$formElement = $(selector);
            if (this.$formElement.length === 0) {
                throw new Error('Could not find element with selector: ' + selector);
            }
        };

        FindRoom.prototype.addHandlerFindRoom = function (fn) {

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


        App.FindRoom = FindRoom
        window.App = App;


    })(window)
