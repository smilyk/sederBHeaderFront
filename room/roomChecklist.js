(
    function (window) {

        let App = window.App || {};
        let $ = window.jQuery;


        function RowRoom(room) {
            let $div = $('<div></div>',
                {
                    class: 'form_display',
                    'data-seder-room':'checkbox'
                });

            let $label = $('<label></label>',
                {
                    class: 'form_display'
                });
            let $input = $('<input>',
                {
                    class: "input_display",
                    type: "checkbox",
                    value: room.nameRoom

                });
            let content = `<strong>Помещение</strong>: ${room.nameQuartes}<hr><br><strong>Клмната</strong>: ${room.nameRoom}<br><strong>Описание</strong>: ${room.description}<br><strong>Шкаф</strong>: ${room.cupboards}<hr><hr><hr>`;
$input.append(content);
            $label.append($input).append(content);
            $div.append($label);
            this.$rowElement = $div;
        }
        function RoomCheckList(selector) {
            console.log(selector)
            this.$roomsElementElement = $(selector);
        };

        RoomCheckList.prototype.addRoom = function (room) {
            let row = new RowRoom(room);
            this.$roomsElementElement.append(row.$rowElement);
        };

        RoomCheckList.prototype.print = function (room) {
            console.log("hi")
            $('[data-seder-room="print_find_room"]').empty();
            let row  = new RowRoom(room);
            // let row = `<strong>Помещение</strong>: ${room.nameQuartes}<hr><br><strong>Клмната</strong>: ${room.nameRoom}<br><strong>Описание</strong>: ${room.description}<br><strong>Шкаф</strong>: ${room.cupboards}<hr>`;
            this.$roomsElementElement.append(row.$rowElement);
        };

        RoomCheckList.prototype.removeAllRooms = function(room){
            console.log(this.$roomsElementElement)
            this.$roomsElementElement.empty();
        };
        App.RoomCheckList = RoomCheckList;
        window.App = App;
    }
)(window);
