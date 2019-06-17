(
    function (window) {

        let App = window.App || {};
        let $ = window.jQuery;


        function PutThing(nameThing) {
            console.log(nameThing + " nameThing");
            let $div = $('<div></div>',
                {
                    class: 'form_display',
                    'data-seder-thing': 'putting_on_the_shelf',

                });

            let $label = $('<label></label>',
                {
                    class: 'form_display'
                });
            // let $input = $('<input>',
            //     {
            //         class: 'input_display',
            //         type: "text",
            //         value: nameThing
            //     });
            //
            // let $select = $('<select></select>',
            //     {
            //         class: "input",
            //         type: "text",
            //         id: "ThingPut",
            //         name: "putThing"
            //     });
            // let $button = $('<button></button>',
            //     {
            //         class: "btns_2",
            //         type: "submit",
            //         value: "Положить на полку",
            //         // 'data-seder-thing': 'putting_on_the_shelf'
            //     })

            let content = `<hr><hr><hr> <strong>Вещь</strong>: ${nameThing}<hr><br><strong></strong>`;
            console.log(content + " content")
            let contentButton = "Положить";
            // $button.append(contentButton);
            $div.append(content);
            // $label.append($select).append($button);
            $div.append($label);
            this.$rowElement = $div;
        }

        function PutThingPrint(selector) {
            console.log(selector + " selector")
            this.$putThingElement = $(selector);
        };

        PutThingPrint.prototype.addThing = function (thing) {
            $('[data-seder-thing="things_not_on_the_shelf"]').empty();
            $('[data-seder-thing="thing_putting"]').empty();
            $('[data-seder-thing="button_put"]').attr('hidden', true);
            $('[data-seder-thing="putting_on_the_shelf"]').attr('hidden', false);
            $('[data-seder-thing="putting_on_the_shelf_select"]').attr('hidden', true);
            // $('[data-seder-thing="put_on_shelf_button"]').attr('hidden', true);
            // put_on_shelf_button


            let row = new PutThing(thing);
            console.log(row + " row");
            this.$putThingElement.append(row.$rowElement);
        };


        App.PutThingPrint = PutThingPrint;
        window.App = App;
    }
)(window);
