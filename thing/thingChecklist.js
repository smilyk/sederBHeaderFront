(
    function (window) {

        let App = window.App || {};
        let $ = window.jQuery;


        function RowThing(thing) {
            let $div = $('<div></div>',
                {
                    class: 'form_display',
                    'data-seder-thing': 'checkbox'
                });

            let $label = $('<label></label>',
                {
                    class: 'form_display'
                });
            let $input = $('<input>',
                {
                    class: 'input_display',
                    type: "checkbox",
                    value: thing.nameThing
                });

            let content = `<hr><hr><hr> <strong>Вещь</strong>: ${thing.nameThing}<hr><br><strong>Шкаф</strong>: ${thing.nameCupboard}<br><strong>Описание</strong>: ${thing.description}<br>
<strong>Полка</strong>: ${thing.nameShelf} <strong></strong><hr><hr><hr>`;


            $input.append(content);
            $label.append($input).append(content);
            $div.append($label);
            this.$rowElement = $div;
        }

        function ThingChecklist(selector) {
            console.log(selector)
            this.$thingElement = $(selector);
        };

        ThingChecklist.prototype.addThing = function (thing) {
            let row = new RowThing(thing);
            this.$thingElement.append(row.$rowElement);
        };

        ThingChecklist.prototype.print = function (thing) {
            $('[data-seder-thing="print_find_thing"]').empty();
            let row = new RowThing(thing)
            this.$thingElement.append(row.$rowElement);
        };

        ThingChecklist.prototype.reemoveAllThings = function () {
            this.$thingElement.empty();
        }
        App.ThingChecklist = ThingChecklist;
        window.App = App;
    }
)(window);
