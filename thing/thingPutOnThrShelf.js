(
    function (window) {
        let App = window.App || {};
        let $ = window.jQuery;

        function PutThingOnTheShelf(selector) {
            this.$putThing = $(selector);
        };

        PutThingOnTheShelf.prototype.addCheckHandler = function (fn) {
            this.$putThing.on
            ('click', 'input', function (event) {
                if (this.checked) {
                    this.removeAttribute('checked', this.checked);
                } else {
                    this.setAttribute('checked', this.checked);
                    flag = false;
                    return fn(event.target.value, flag);
                }
                this.setAttribute('checked', this.checked);
                return fn(event.target.value);
            });
        };
        PutThingOnTheShelf.prototype.addPutHandler = function (fn) {
            this.$putThing.on(
                'submit', 'button', function (event) {
                    event.preventDefault();
                    console.log("gjgjgjgjgg")
                    fn();
                }
            )
        }


        App.PutThingOnTheShelf = PutThingOnTheShelf;
        window.App = App;
    }


)(window)
