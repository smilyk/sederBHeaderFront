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
                    value: quartes.quanity

                });

            let content = `<hr><strong>Помещение</strong>: ${quartes.quanity},<br><strong>Описание</strong>: ${quartes.quanityDescriptionName},<br><strong>Комнаты в помещении</strong>: ${quartes.roomName} <hr>`;
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



        App.QuartesCheckList = QuartesCheckList;
        window.App = App;
    }
)(window);