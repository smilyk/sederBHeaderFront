(
    function (window) {
        let App = window.App || {};
        let $ = window.jQuery;

        function PointCheckbox(selector) {
            this.$pointCupboard = $(selector);
        };

        PointCheckbox.prototype.addPointHandler = function (fn) {
            this.$formElement.on('submit', function (event) {
                // this.$formElement.empty();
                event.preventDefault();
                let data = {};
                $(this).serializeArray().forEach(function (item) {
                    data = item.value;
                });
                fn(data);
                this.reset();
            });
        }

        App.PointCheckbox = PointCheckbox;
        window.App = App;
    }


)(window)
