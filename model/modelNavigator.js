(
    function () {
        let App = window.App || {};
        let $ = window.jQuery;






        function toggle_Add_Button() {
            let $delite = $('#del_model');
            let $get = $('#get_model');
            let $add = $('#add_model');
            let $season = $('#get_by_season_model');
            let $owner = $('#get_by_owner_model');
            let $size = $('#get_by_size_model');
            $season.removeClass('active')
            $owner.removeClass('active')
            $size.removeClass('active')
            $get.removeClass('active');
            $delite.removeClass('active');
            $add.addClass('active');
        }


        function toggle_Delite_Button() {
            let $delite = $('#del_model');
            let $get = $('#get_model');
            let $add = $('#add_model');
            let $season = $('#get_by_season_model');
            let $owner = $('#get_by_owner_model');
            let $size = $('#get_by_size_model');
            $season.removeClass('active')
            $owner.removeClass('active')
            $size.removeClass('active')
            $get.removeClass('active');
            $delite.addClass('active');
            $add.removeClass('active');

        }

        function toggle_Get_Button() {
            let $delite = $('#del_model');
            let $get = $('#get_model');
            let $add = $('#add_model');
            let $season = $('#get_by_season_model');
            let $owner = $('#get_by_owner_model');
            let $size = $('#get_by_size_model');
            $season.addClass('active');
            $owner.addClass('active');
            $size.addClass('active');
            $get.addClass('active');
            $delite.removeClass('active');
            $add.removeClass('active');

        }

        function showSeazonButton() {
            let $delite = $('#del_model');
            let $get = $('#get_model');
            let $add = $('#add_model');
            let $season = $('#get_by_season_model');
            let $owner = $('#get_by_owner_model');
            let $size = $('#get_by_size_model');
            $season.addClass('active');
            $owner.removeClass('active');
            $size.removeClass('active');
            $get.removeClass('active');
            $delite.removeClass('active');
            $add.removeClass('active');
        }

        // SHOW

        function showDelliteButton() {
            let $delite = $('#del_model');
            let $get = $('#get_model');
            let $add = $('#add_model');
            let $season = $('#get_by_season_model');
            let $owner = $('#get_by_owner_model');
            let $size = $('#get_by_size_model');
            $season.attr('hidden', true);
            $owner.attr('hidden', true);
            $size.attr('hidden', true);
            $delite.attr('hidden', false);
            $get.attr('hidden', true);
            $add.attr('hidden', true);


        }

        function showAddButton() {
            let $delite = $('#del_model');
            let $get = $('#get_model');
            let $add = $('#add_model');
            let $season = $('#get_by_season_model');
            let $owner = $('#get_by_owner_model');
            let $size = $('#get_by_size_model');
            $season.attr('hidden', true);
            $owner.attr('hidden', true);
            $size.attr('hidden', true);
            $delite.attr('hidden', true);
            $get.attr('hidden', true);
            $add.attr('hidden', false);

        }

        function showGetButton() {
            let $delite = $('#del_model');
            let $get = $('#get_model');
            let $add = $('#add_model');
            let $season = $('#get_by_season_model');
            let $owner = $('#get_by_owner_model');
            let $size = $('#get_by_size_model');
            $season.attr('hidden', false);
            $owner.attr('hidden', false);
            $size.attr('hidden', false);
            $delite.attr('hidden', true);
            $get.attr('hidden', false);
            $add.attr('hidden', true);

        }


        function toggle_Seazon_Button() {
            let $delite = $('#del_model');
            let $get = $('#get_model');
            let $add = $('#add_model');
            let $season = $('#get_by_season_model');
            let $owner = $('#get_by_owner_model');
            let $size = $('#get_by_size_model');
            $season.attr('hidden', false);
            $owner.attr('hidden', true);
            $size.attr('hidden', true);
            $delite.attr('hidden', true);
            $get.attr('hidden', true);
            $add.attr('hidden', true);
        }



        function ModelNavigator() {
            $('#del_model_button').on('click', function (event) {
                event.preventDefault();
                showDelliteButton();
                toggle_Delite_Button();

            });
            $('#add_model_button').on('click', function (event) {
                event.preventDefault();
                showAddButton();
                toggle_Add_Button();

            });
            $('#get_model_button').on('click', function (event) {
                event.preventDefault();
                showGetButton();
                toggle_Get_Button();
            });

        }
        App.ModelNavigator = ModelNavigator;
        window.App = App;
    }
)()
