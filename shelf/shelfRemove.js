(
    function (window) {
        let App = window.App || {};
        let $ = window.jQuery;

        function RemoveShelf(selector) {
            this.$removeShelf = $(selector);
        };

        RemoveShelf.prototype.addCheckHandler = function (fn) {
            this.$removeShelf.on
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
        RemoveShelf.prototype.addRemoveHandler = function (fn) {
            this.$removeShelf.on(
                'click', 'button', function (event) {
                    event.preventDefault();
                    fn();
                }
            )
        }

        RemoveShelf.prototype.removeShelf = function (arrayForRemove) {
            let coutn = 0;
            for(let i = 0; i<arrayForRemove.length;i++){
                coutn=coutn+1;
                this.$removeShelf
                        .find(`[value=${arrayForRemove[i]}`)
                        .closest('[data-seder-shelf="checkbox"]')
                        .remove();
                }

            if (coutn === arrayForRemove.length) {
                arrayForRemove.length = 0;
            }
        };

        App.RemoveShelf = RemoveShelf;
        window.App = App;
    }


)(window)
