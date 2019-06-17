(
    function (window) {
        let App = window.App || {};
        let $ = window.jQuery;

        function RemoveOwner(selector) {
            console.log(selector);
            // selector = '[data-seder-quartes="removeQuartes"]'
            this.$removeQuartes = $(selector);
        };

        RemoveOwner.prototype.addCheckHandler = function (fn) {
            this.$removeQuartes.on
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
        RemoveOwner.prototype.addRemoveHandler = function (fn) {
            this.$removeQuartes.on(
                'click', 'button', function (event) {
                    event.preventDefault();
                    fn();
                }
            )
        }

        RemoveOwner.prototype.removeOwner = function (arrayForRemove) {
            let coutn = 0;
            console.log(coutn + " count");
            for(let i = 0; i<arrayForRemove.length;i++){
                coutn=coutn+1;
                this.$removeQuartes
                        .find(`[value=${arrayForRemove[i]}`)
                        .closest('[data-seder-quartes="checkbox"]')
                        .remove();
                }


            if (coutn === arrayForRemove.length) {
                arrayForRemove.length = 0;
            }
            console.log(arrayForRemove);
        };

        App.RemoveOwner = RemoveOwner;
        window.App = App;
    }


)(window)
