(
    function (window) {

        let App = window.App || {};
        let $ = window.jQuery;


            function RowPhoto(photo) {


                let $div = $('<div></div>',
                    {
                        class: 'form_display',
                        'data-seder-photo': 'checkbox'
                    });

                let $label = $('<label></label>',
                    {
                        class: 'form_display'
                    });
                let $input = $('<input>',
                    {
                        class: 'input_display',
                        type: "checkbox",
                        value: photo.namePhoto
                    });

                let content = `<hr><hr><hr>
<strong>Фото</strong>: ${photo.namePhoto}<hr><br>
<strong>Описание</strong>: ${photo.description}<br>
<strong>Шкаф</strong>: ${photo.nameCupboard}<br>
<strong>Вещь</strong>: ${photo.nameThing}<br>

<hr><hr><hr>`;


                $input.append(content);
                $label.append($input).append(content);
                $div.append($label);
                this.$rowElement = $div;
            }

            function PhotoChecklist(selector) {
                console.log(selector + "hjhjhjhjhjhjhj")
                this.$photoElement = $(selector);
            };


            PhotoChecklist.prototype.addPhot = function(photo){
                let row = new RowPhoto(photo);
                this.$photoElement.append(row.$rowElement);
            }

            // PhotoChecklist.prototype.addPhoto = function (photoOne) {
            //     let row = new RowPhoto(photoOne);
            //     this.$photoElement.append(row.$rowElement);
            // };

            PhotoChecklist.prototype.print = function (photo) {
                $('[data-seder-photo="print_find_photo"]').empty();
                let row = new RowPhoto(photo)
                this.$photoElement.append(row.$rowElement);
            };

            PhotoChecklist.prototype.removeAllPhotos = function () {
                this.$photoElement.empty();
            }
            App.PhotoChecklist = PhotoChecklist;
            window.App = App;
        }

    )(window);
