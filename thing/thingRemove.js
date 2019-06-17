(
    function (window) {
        let App = window.App || {};
        let $ = window.jQuery;

        function RemoveThing(selector) {
            this.$removeThing = $(selector);
        };

        RemoveThing.prototype.addCheckHandler = function (fn) {
            this.$removeThing.on
            ('click', 'input', function (event, flag) {
                if (this.checked) {
                    this.removeAttribute('checked', this.checked);
                } else {
                    this.setAttribute('checked', this.checked);
                    flag = false;
                    return fn(event.target.value, flag);
                }
                this.setAttribute('checked', this.checked);
                flag = true;
                return fn(event.target.value, flag);
            });
        };

        RemoveThing.prototype.addRemoveHandler = function (fn) {
            this.$removeThing.on(
                'click', 'button', function (event) {
                    event.preventDefault();
                    fn();
                }
            )
        }

        RemoveThing.prototype.removeThing = function (arrayForRemove) {
            let coutn = 0;
            for(let i = 0; i<arrayForRemove.length;i++){
                coutn=coutn+1;
                this.$removeThing
                        .find(`[value=${arrayForRemove[i]}`)
                        .closest('[data-seder-thing="checkbox"]')
                        .remove();
                }

            if (coutn === arrayForRemove.length) {
                arrayForRemove.length = 0;
            }
        };



        App.RemoveThing = RemoveThing;
        window.App = App;
    }


)(window)
