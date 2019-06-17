(
    function (window) {
        let App = window.App || {};
        let $ = window.jQuery;

        function GetAllCupboardsInTheRoom(selector){
            if (!selector) {
                throw new Error('No selector provided');
            }
            this.$formElement = $(selector);
            if (this.$formElement.length === 0) {
                throw new Error('Could not find element with selector: ' + selector);
            }
        };
        GetAllCupboardsInTheRoom.prototype.addHandlerFindCupboards = function (fn) {

            this.$formElement.on('submit', function (event) {
                // this.$formElement.empty();
                console.log(event)
                event.preventDefault();
                let data = {};
                $(this).serializeArray().forEach(function (item) {
                    data = item.value;
                    console.log(data);
                });
                fn(data);
                this.reset();
            });
        };


        App.GetAllCupboardsInTheRoom = GetAllCupboardsInTheRoom
        window.App = App;


    })(window)
