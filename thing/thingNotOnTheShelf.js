(
    function (window) {

        let App = window.App || {};
        let $ = window.jQuery;


        function RowThingNotOnTheShelf(thing) {
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

            let content = `<hr><hr><hr> <strong>Вещь</strong>: ${thing.nameThing}<hr><br><strong></strong>`;
            $input.append(content);
            $label.append($input).append(content);
            $div.append($label);
            this.$rowElement = $div;
        }

        function ThingNotOnThePlaceChecklist(selector) {
            console.log(selector)
            this.$thingElement = $(selector);
        };


        ThingNotOnThePlaceChecklist.prototype.print = function (thing) {
            $('[data-seder-thing="things_not_on_the_shelf"]').empty();
            $('[data-seder-thing="thing_putting"]').empty();
            $('[data-seder-thing="button_put"]').attr('hidden', false);
            $('[data-seder-thing="putting_on_the_shelf"]').attr('hidden', false);
            $('[data-seder-thing="put_on_shelf_button"]').attr('hidden', false);
            $('[data-seder-thing="put_on_shelf_button"]').addClass('active');
            for(let i = 0; i < thing.length; i++){

                        let row = new RowThingNotOnTheShelf(thing[i]);
            this.$thingElement.append(row.$rowElement);}
        };

        ThingNotOnThePlaceChecklist.prototype.reemoveAllThings = function () {
            this.$thingElement.empty();
        }
        App.ThingNotOnThePlaceChecklist = ThingNotOnThePlaceChecklist;
        window.App = App;
    }
)(window);
