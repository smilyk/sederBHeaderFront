(
    function (window) {

        let App = window.App || {};
        let $ = window.jQuery;


        function RowOwner(owner) {
            let $div = $('<div></div>',
                {
                    class: 'form_display',
                    'data-seder-owner':'checkbox'
                });

            let $label = $('<label></label>',
                {
                    class: 'form_display'
                });
            let $input = $('<input>',
                {
                    class: "input_display",
                    type: "checkbox",
                    value: owner.owner

                });
            let content = `<hr><strong>Хозяин</strong>: ${owner.owner}<hr><hr><hr>`;
$input.append(content);
            $label.append($input).append(content);
            $div.append($label);
            this.$rowElement = $div;
        }
        function OwnerCheckList(selector) {
            this.$ownerElement = $(selector);
        };


        OwnerCheckList.prototype.print = function (owner) {

            $('[data-seder-owner="print_find_quartes"]').empty();
            let row  = new RowOwner(owner);
            this.$ownerElement.append(row.$rowElement);

        };

        OwnerCheckList.prototype.addOwner = function (owner) {
            let row = new RowOwner(owner);
            this.$ownerElement.append(row.$rowElement);
        };

        OwnerCheckList.prototype.removeAllOwner = function(){
            this.$ownerElement.empty();
        }

        App.OwnerCheckList = OwnerCheckList;
        window.App = App;
    }
)(window);
