
(
    function (window) {
        let App = window.App || {};
        let $ = window.jQuery;

        function GetNotFoolCupboardsInTheRoom(selector){
            if (!selector) {
                throw new Error('No selector provided');
            }
            this.$formElement = $(selector);
            if (this.$formElement.length === 0) {
                throw new Error('Could not find element with selector: ' + selector);
            }
        };
        GetNotFoolCupboardsInTheRoom.prototype.getNotFoolCupboards = function (fn) {

            this.$formElement.on('submit', function (event) {
                let data = {};
                fn(data)
            });

        };


        App.GetNotFoolCupboardsInTheRoom = GetNotFoolCupboardsInTheRoom
        window.App = App;


    })(window)
