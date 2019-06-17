(
    function (window) {
        let App = window.App || {};
        let $ = window.jQuery;

        function Photo(selector){
            console.log(selector);
            if (!selector) {
                throw new Error('No selector provided');
            }
            this.$formElement = $(selector);
            if (this.$formElement.length === 0) {
                throw new Error('Could not find element with selector: ' + selector);
            }
        };

      Photo.prototype.addHandlerAdd = function (fn) {
          console.log("jijiji")
            this.$formElement.on('submit', function (event) {
                event.preventDefault();
                let data = {};
                $(this).serializeArray().forEach(function (item) {
                    data[item.name] = item.value;
                });
                fn(data);
                this.reset();
                this.elements[0].focus();
            });
        };


        App.Photo = Photo
        window.App = App;

    })(window)
