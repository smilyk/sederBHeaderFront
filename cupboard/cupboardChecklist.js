(
    function (window) {

        let App = window.App || {};
        let $ = window.jQuery;


        function RowCupboard(cupboard) {
            let $div = $('<div></div>',
                {
                    class: 'form_display',
                    'data-seder-cupboard': 'checkbox'
                });

            let $label = $('<label></label>',
                {
                    class: 'form_display'
                });
            let $input = $('<input>',
                {
                    class: "input_display",
                    type: "checkbox",
                    value: cupboard.nameCupboard

                });
            let content = `<strong>Комната</strong>: ${cupboard.nameRoom}<hr><br><strong>Шкаф</strong>: ${cupboard.nameCupboard}<br><strong>Описание</strong>: ${cupboard.description}<br><strong>Полки</strong>: ${cupboard.nameShelf}<br><strong>Фотографии</strong>: ${cupboard.namePhoto}<hr>`;
            $input.append(content);
            $label.append($input).append(content);
            $div.append($label);
            this.$rowElement = $div;
        }

        function CupboardCheckList(selector) {
            console.log(selector)
            this.$cupboardElement = $(selector);
        };

        CupboardCheckList.prototype.addCupboard = function (cupboard) {
            let row = new RowCupboard(cupboard);
            this.$cupboardElement.append(row.$rowElement);
        };

        CupboardCheckList.prototype.print = function (cupboard) {
            console.log("hi")
            $('[data-seder-cupboards="print_find_cupboards"]').empty();
            let row  = new RowCupboard(cupboard)
            // let row = `<strong>Помещение</strong>: ${room.nameQuartes}<hr><br><strong>Клмната</strong>: ${room.nameRoom}<br><strong>Описание</strong>: ${room.description}<br><strong>Шкаф</strong>: ${room.cupboards}<hr>`;
            this.$cupboardElement.append(row.$rowElement);
            console.log(this.$quartes);
        };

        CupboardCheckList.prototype.removeAllCupboards = function (cupboard) {
            console.log(this.$cupboardElement)
            this.$cupboardElement.empty();
        }
        App.CupboardCheckList = CupboardCheckList;
        window.App = App;
    }
)(window);
