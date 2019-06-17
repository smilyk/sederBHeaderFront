(
    function (window) {
        let App = window.App || {};
        let $ = window.jQuery;

        function RemoveRoom(selector) {
            console.log(selector);
            this.$removeRoom = $(selector);
        };

        RemoveRoom.prototype.addCheckHandler = function (fn) {
            this.$removeRoom.on
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
        RemoveRoom.prototype.addRemoveHandler = function (fn) {
            this.$removeRoom.on(
                'click', 'button', function (event) {
                    event.preventDefault();
                    fn();
                }
            )
        }

        RemoveRoom.prototype.removeRoom = function (arrayForRemove) {
            let coutn = 0;
            console.log(coutn + " count");
            for(let i = 0; i<arrayForRemove.length;i++){
                coutn=coutn+1;
                this.$removeRoom
                        .find(`[value=${arrayForRemove[i]}`)
                        .closest('[data-seder-room="checkbox"]')
                        .remove();
                }

            if (coutn === arrayForRemove.length) {
                arrayForRemove.length = 0;
            }
            console.log(arrayForRemove);
        };

        App.RemoveRoom = RemoveRoom;
        window.App = App;
    }


)(window)