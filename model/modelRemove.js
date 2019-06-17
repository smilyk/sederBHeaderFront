(
    function (window) {
        let App = window.App || {};
        let $ = window.jQuery;

        function RemoveModel(selector) {
            this.$removePhoto = $(selector);
        };


        RemoveModel.prototype.addCheckHandler = function (fn) {
            this.$removePhoto.on
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

        RemoveModel.prototype.addRemoveHandler = function (fn) {
            this.$removePhoto.on(
                'click', 'button', function (event) {
                    event.preventDefault();
                    fn();
                }
            )
        }

        RemoveModel.prototype.removePhoto = function (arrayForRemove) {
            let coutn = 0;
            for(let i = 0; i<arrayForRemove.length;i++){
                coutn=coutn+1;
                this.$removePhoto
                        .find(`[value=${arrayForRemove[i]}`)
                        .closest('[data-seder-photo="checkbox"]')
                        .remove();
                }

            if (coutn === arrayForRemove.length) {
                arrayForRemove.length = 0;
            }
        };



        App.RemoveModel = RemoveModel;
        window.App = App;
    }


)(window)
