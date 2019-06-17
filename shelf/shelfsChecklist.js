(
    function (window) {

        let App = window.App || {};
        let $ = window.jQuery;


        function RowShelf(shelf) {
            let $div = $('<div></div>',
                {
                    class: 'form_display',
                    'data-seder-shelf': 'checkbox'
                });

            let $label = $('<label></label>',
                {
                    class: 'form_display'
                });
            let $input = $('<input>',
                {
                    class: 'input_display',
                    type: "checkbox",
                    value: shelf.nameShelf
                });

            let content = `<hr><hr><hr> <strong>Полка</strong>: ${shelf.nameShelf}<hr><br><strong>Шкаф</strong>: ${shelf.nameCupboard}<br><strong>Описание</strong>: ${shelf.description}<br>
<strong>Вещи</strong>: ${shelf.nameThings}<hr><hr><hr>`;


            $input.append(content);
            $label.append($input).append(content);
            $div.append($label);
            this.$rowElement = $div;
        }

        function ShelfCheckList(selector) {
            this.$shelfElement = $(selector);
        };

        ShelfCheckList.prototype.addShelf = function (shelf) {
            let row = new RowShelf(shelf);
            this.$shelfElement.append(row.$rowElement);
        };

        ShelfCheckList.prototype.print = function (shelf) {
            console.log(shelf + " shelf")
            $('[data-seder-shelf="print_find_shelf"]').empty();
            let row = new RowShelf(shelf)
            this.$shelfElement.append(row.$rowElement);
        };

        ShelfCheckList.prototype.removeAllShelfs = function () {
            this.$shelfElement.empty();
        }
        App.ShelfCheckList = ShelfCheckList;
        window.App = App;
    }
)(window);
