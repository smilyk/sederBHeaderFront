(
    function () {
        let App = window.App || {};
        let $ = window.jQuery;

        function toggleGetAndDeliteButton() {
            let $delite = $('#del_room');
            let $get = $('#get_room');
            let $add = $('#add_room');
            let $find = $('#find_room');
            $get.removeClass('active');
            $delite.removeClass('active');
            $add.addClass('active');
            $find.removeClass('active');
        }



        function toggleGetAndAddButton() {
            let $delite = $('#del_room');
            let $get = $('#get_room');
            let $add = $('#add_room');
            let $find = $('#find_room');
            $get.removeClass('active');
            $delite.addClass('active');
            $add.removeClass('active');
            // $find.removeClass('active');
        }

        function toggleAddAndDeliteButton() {
            let $delite = $('#del_room');
            let $get = $('#get_room');
            let $add = $('#add_room');
            let $find = $('#find_room');
            $get.addClass('active');
            $delite.removeClass('active');
            $add.removeClass('active');
            $find.removeClass('active');
        }

        function showDelliteButton() {
            let $delite = $('#del_room');
            let $get = $('#get_room');
            let $add = $('#add_room');
            let $find = $('#find_room');
            $delite.attr('hidden', false);
            $get.attr('hidden', true);
            $add.attr('hidden', true);
            $find.attr('hidden', true);
        }

        function showAddButton() {
            let $delite = $('#del_room');
            let $get = $('#get_room');
            let $add = $('#add_room');
            let $find = $('#find_room');
            $delite.attr('hidden', true);
            $get.attr('hidden', true);
            $add.attr('hidden', false);
            $find.attr('hidden', true);
        }

        function showGetButton() {
            let $delite = $('#del_room');
            let $get = $('#get_room');
            let $add = $('#add_room');
            let $find = $('#find_room');
            $delite.attr('hidden', true);
            $get.attr('hidden', false);
            $add.attr('hidden', true);
            $find.attr('hidden', false);
        }

        function RoomNavigator(){
            $('#del_room_button').on('click', function (event) {
                event.preventDefault();
                showDelliteButton();
                toggleGetAndAddButton();
            });
            $('#add_room_button').on('click', function (event) {
                event.preventDefault();
                showAddButton();
                toggleGetAndDeliteButton();

            });
            $('#get_room_button').on('click', function (event) {
                event.preventDefault();
                showGetButton();
                toggleAddAndDeliteButton();
            })
        }

        App.RoomNavigator = RoomNavigator;
        window.App = App;
    }
)()
