(
    function (window) {

        let App = window.App || {};
        let $ = window.jQuery;


            function RowModel(model) {


                let $div = $('<div></div>',
                    {
                        class: 'form_display',
                        'data-seder-model': 'checkbox'
                    });

                let $label = $('<label></label>',
                    {
                        class: 'form_display'
                    });
                let $input = $('<input>',
                    {
                        class: 'input_display',
                        type: "checkbox",
                        value: model.nameModel
                    });

                let content = `<hr><hr><hr>
<strong>Модель</strong>: ${model.nameModel}<hr><br>
<strong>Описание</strong>: ${model.description}<br>
<strong>Цвет</strong>: ${model.color}<br>
<strong>Размер</strong>: ${model.size}<br>
<strong>Сезон</strong>: ${model.seazon}<br>
<strong>Хозяин</strong>: ${model.owner}<br>
<strong>Вещь</strong>: ${model.thing.nameThing}<br>
<strong>Фото вещи</strong>: ${model.thing.namePhoto}<br>


<hr><hr><hr>`;


                $input.append(content);
                $label.append($input).append(content);
                $div.append($label);
                this.$rowElement = $div;
            }

            function ModelChecklist(selector) {
                console.log(selector)
                this.$modelElement = $(selector);
            };

            ModelChecklist.prototype.addModel = function (model) {
                let row = new RowModel(model);
                this.$modelElement.append(row.$rowElement);
            };

            ModelChecklist.prototype.print = function (model) {
                $('[data-seder-model="print_find_model"]').empty();
                // $('[data-seder-model="model_checklist_by_owner"]').empty();
                let row = new RowModel(model)
                this.$modelElement.append(row.$rowElement);
            };

            ModelChecklist.prototype.reemoveAllModels = function () {
                this.$modelElement.empty();
            }
            App.ModelChecklist = ModelChecklist;
            window.App = App;
        }

    )(window);
