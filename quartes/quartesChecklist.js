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