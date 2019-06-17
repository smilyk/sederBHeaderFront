(
    function (window) {
        let App = window.App || {};
        let $ = window.jQuery;

        function RemoveCupboard(selector) {
            this.$removeCupboard = $(selector);
        };

        RemoveCupboard.prototype.addCheckHandler = function (fn) {
            console.log('hihihi')
            this.$removeCupboard.on
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
        };

        App.RemoveCupboard = RemoveCupboard;
        window.App = App;
    }


)(window)
