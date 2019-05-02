(
    function () {
        let App = window.App || {};
        let $ = window.jQuery;


        function toggle_Add__Cupboard_Button() {
            let $delite = $('#del_photo');
            let $get = $('#get_photo');
            let $add_cupboard = $('#add_photo_cupboard');
            let $add_thing = $('#add_photo_thing');

            $add_thing.removeClass('active');
            $get.removeClass('active');
            $delite.removeClass('active');
            $add_cupboard.addClass('active');
        }

        function toggle_Add__Thing_Button() {
            let $delite = $('#del_photo');
            let $get = $('#get_photo');
            let $addCupboard = $('#add_photo_cupboard');
            let $add_thing = $('#add_photo_thing');

            $add_thing.attr('hidden', false);
            $delite.attr('hidden', true);
            $get.attr('hidden', true);
            $addCupboard.attr('hidden', true);


        }



        function toggle_Delite_Button() {
            let $delite = $('#del_photo');
            let $get = $('#get_photo');
            let $addCupboard = $('#add_photo_cupboard');
            let $add_thing = $('#add_photo_thing');

            $add_thing.removeClass('active');
            $get.removeClass('active');
            $delite.addClass('active');
            $addCupboard.removeClass('active');

        }

        function toggle_Get_Button() {
            let $delite = $('#del_photo');
            let $get = $('#get_photo');
            let $addCupboard = $('#add_photo_cupboard');
            let $add_thing = $('#add_photo_thing');

            $add_thing.removeClass('active');
            $get.addClass('active');
            $delite.removeClass('active');
            $addCupboard.removeClass('active');

        }


        // SHOW

        function showDelliteButton() {
            let $delite = $('#del_photo');
            let $get = $('#get_photo');
            let $addCupboard = $('#add_photo_cupboard');
            let $add_thing = $('#add_photo_thing');

            $add_thing.attr('hidden', true);
            $delite.attr('hidden', false);
            $get.attr('hidden', true);
            $addCupboard.attr('hidden', true);


        }



        function showAddThingButton() {
            let $delite = $('#del_photo');
            let $get = $('#get_photo');
            let $add_cupboard = $('#add_photo_cupboard');
            let $add_thing = $('#add_photo_thing');

            $add_thing.addClass('active');
            $get.removeClass('active');
            $delite.removeClass('active');
            $add_cupboard.removeClass('active');
        }

        function showAddCupboardButton() {
            let $delite = $('#del_photo');
            let $get = $('#get_photo');
            let $addCupboard = $('#add_photo_cupboard');
            let $add_thing = $('#add_photo_thing');

            $add_thing.attr('hidden', true);
            $delite.attr('hidden', true);
            $get.attr('hidden', true);
            $addCupboard.attr('hidden', false);

        }



        function showGetButton() {
            let $delite = $('#del_photo');
            let $get = $('#get_photo');
            let $addCupboard = $('#add_photo_cupboard');
            let $add_thing = $('#add_photo_thing');

            $add_thing.attr('hidden', true);
            $delite.attr('hidden', true);
            $get.attr('hidden', false);
            $addCupboard.attr('hidden', true);

        }




        function PhotoNavigator() {
            $('#del_photo_button').on('click', function (event) {
                event.preventDefault();
                showDelliteButton();
                toggle_Delite_Button();

            });
            $('#add_photo_cupboard_button').on('click', function (event) {
                event.preventDefault();
                showAddCupboardButton();
                toggle_Add__Cupboard_Button();

            });
            $('#add_photo_thing_button').on('click', function (event) {
                event.preventDefault();
                showAddThingButton();
                toggle_Add__Thing_Button();

            });
            $('#get_photo_button').on('click', function (event) {
                event.preventDefault();
                showGetButton();
                toggle_Get_Button();
            });

        }

        App.PhotoNavigator = PhotoNavigator;
        window.App = App;
    }
)()
