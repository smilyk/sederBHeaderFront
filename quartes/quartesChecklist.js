(
    function (window) {

        let App = window.App || {};
        let $ = window.jQuery;


        function RowQuartes(quartes) {
            let $div = $('<div></div>',
                {
                    class: 'form_display',
                    'data-seder-quartes':'checkbox'
                });

            let $label = $('<label></label>',
                {
                    class: 'form_display'
                });
            let $input = $('<input>',
                {
                    class: "input_display",
                    type: "checkbox",
                    value: quartes.nameQuartes

                });
            let content = `<hr><strong>Помещение</strong>: ${quartes.nameQuartes}<br><strong>Описание</strong>: ${quartes.description}<br><strong>Комнаты</strong>: ${quartes.nameRoom}<hr>`;
$input.append(content);
            $label.append($input).append(content);
            $div.append($label);
            this.$rowElement = $div;
        }
        function QuartesCheckList(selector) {
            this.$quartes = $(selector);
        };


        QuartesCheckList.prototype.print = function (quartes) {
            console.log("hi")
            $('[data-seder-quartes="print_find_quartes"]').empty();
            let row  = new RowQuartes(quartes);
            // let row = `<strong>Помещение</strong>: ${room.nameQuartes}<hr><br><strong>Клмната</strong>: ${room.nameRoom}<br><strong>Описание</strong>: ${room.description}<br><strong>Шкаф</strong>: ${room.cupboards}<hr>`;
            this.$quartes.append(row.$rowElement);
            console.log(this.$quartes)
        };

        QuartesCheckList.prototype.addQuartes = function (quartes) {
            let row = new RowQuartes(quartes);
            this.$quartes.append(row.$rowElement);
        };

        QuartesCheckList.prototype.removeAllQuartes = function(quartes){
            this.$quartes.empty();
        }

        App.QuartesCheckList = QuartesCheckList;
        window.App = App;
    }
)(window);
