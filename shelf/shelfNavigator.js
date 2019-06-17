(
    function () {
        let App = window.App || {};
        let $ = window.jQuery;

        function toggle_Add_Button() {
            let $delite = $('#del_shelf');
            let $get = $('#get_shelf');
            let $add = $('#add_shelf');
            let $move = $('#move_shelf');

            $get.removeClass('active');
            $delite.removeClass('active');
            $add.addClass('active');
            $move.removeClass('active');
        }



        function toggle_Delite_Button() {
            let $delite = $('#del_shelf');
            let $get = $('#get_shelf');
            let $add = $('#add_shelf');
            let $move = $('#move_shelf');
            $get.removeClass('active');
            $delite.addClass('active');
            $add.removeClass('active');
            $move.removeClass('active');
        }

        function toggle_Get_Button() {
            let $delite = $('#del_shelf');
            let $get = $('#get_shelf');
            let $add = $('#add_shelf');
            let $move = $('#move_shelf');
            $get.addClass('active');
            $delite.removeClass('active');
            $add.removeClass('active');
            $move.removeClass('active');
        }

        function toggle_Move_Button() {
            let $delite = $('#del_shelf');
            let $get = $('#get_shelf');
            let $add = $('#add_shelf');
            let $move = $('#move_shelf');
            $get.removeClass('active');
            $delite.removeClass('active');
            $add.removeClass('active');
            $move.addClass('active');
        }

        function showDelliteButton() {
            let $delite = $('#del_shelf');
            let $get = $('#get_shelf');
            let $add = $('#add_shelf');
            let $move = $('#move_shelf');
            $delite.attr('hidden', false);
            $get.attr('hidden', true);
            $add.attr('hidden', true);
            $move.attr('hidden', true);
        }

        function showAddButton() {
            let $delite = $('#del_shelf');
            let $get = $('#get_shelf');
            let $add = $('#add_shelf');
            let $move = $('#move_shelf');
            $delite.attr('hidden', true);
            $get.attr('hidden', true);
            $add.attr('hidden', false);
            $move.attr('hidden', true);
        }

        function showGetButton() {
            let $delite = $('#del_shelf');
            let $get = $('#get_shelf');
            let $add = $('#add_shelf');
            let $move = $('#move_shelf');
            $delite.attr('hidden', true);
            $get.attr('hidden', false);
            $add.attr('hidden', true);
            $move.attr('hidden', true);
        }

        function showMoveButton() {
            let $delite = $('#del_shelf');
            let $get = $('#get_shelf');
            let $add = $('#add_shelf');
            let $move = $('#move_shelf');
            $delite.attr('hidden', true);
            $get.attr('hidden', true);
            $add.attr('hidden', true);
            $move.attr('hidden', false);
        }




        function ShelfNavigator(){
            $('#del_shelf_button').on('click', function (event) {
                event.preventDefault();
                showDelliteButton();
                toggle_Delite_Button();

            });
            $('#add_shelf_button').on('click', function (event) {
                event.preventDefault();
                showAddButton();
                toggle_Add_Button();

            });
            $('#get_shelf_button').on('click', function (event) {
                event.preventDefault();
                showGetButton();
                toggle_Get_Button();
            })
            $('#move_shelf_button').on('click', function (event) {
                event.preventDefault();
                showMoveButton();
                toggle_Move_Button();

            })
        }

        App.ShelfNavigator = ShelfNavigator;
        window.App = App;
    }
)()
