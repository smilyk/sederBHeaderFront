(
    function (window) {
        let App = window.App || {};
        let $ = window.jQuery;

        function RemoveCupboard(selector) {
            console.log(selector);
            this.$removeCupboard = $(selector);
        };

        RemoveCupboard.prototype.addCheckHandler = function (fn) {
            this.$removeCupboard.on
            ('click', 'input', function (event, flag) {
                // event.preventDefault();

                console.log(event.target.value+ "    value for remove");
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
        RemoveCupboard.prototype.addRemoveHandler = function (fn) {
            this.$removeCupboard.on(
                'click', 'button', function (event) {
                    event.preventDefault();
                    fn();
                }
            )
        }

        RemoveCupboard.prototype.removeCupboard = function (arrayForRemove) {
            let coutn = 0;
            console.log(coutn + " count");
            for(let i = 0; i<arrayForRemove.length;i++){
                coutn=coutn+1;
                this.$removeCupboard
                        .find(`[value=${arrayForRemove[i]}`)
                        .closest('[data-seder-cupboard="checkbox"]')
                        .remove();
                }

            if (coutn === arrayForRemove.length) {
                arrayForRemove.length = 0;
            }
            console.log(arrayForRemove);
        };

        App.RemoveCupboard = RemoveCupboard;
        window.App = App;
    }


)(window)