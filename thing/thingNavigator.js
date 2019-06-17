(
    function () {
        let App = window.App || {};
        let $ = window.jQuery;

        // id="get_thing_not_on_the_shelf" - кнопка вешь не на полке
        // !!!!!!
        // id="put_thing_not_on_the_shelf" - форма - вещи, которы не на полках - список
        // id="putting_thing" - форма, физического пложения вещей на полку
        // id = "put_thing" = кнопка физического ложени на полку!!!!!!!!


        // +
        // id="put_on_the_shelf" - кнопка "положить на полку"!!!!!!


        function toggle_Add_Button() {
            let $delite = $('#del_thing');
            let $get = $('#get_thing');
            let $add = $('#add_thing');
            let $put = $('#put_on_shelf')
            $put.removeClass('active');
            $get.removeClass('active');
            $delite.removeClass('active');
            $add.addClass('active');
            let $xx = $('#put_thing_not_on_the_shelf');
            $xx.removeClass('active');

        }


        function toggle_Delite_Button() {
            let $delite = $('#del_thing');
            let $get = $('#get_thing');
            let $add = $('#add_thing');
            let $put = $('#put_on_shelf')
            $put.removeClass('active');
            let $xx = $('#put_thing_not_on_the_shelf');
            $xx.removeClass('active');
            $get.removeClass('active');
            $delite.addClass('active');
            $add.removeClass('active');

        }

        function toggle_Get_Button() {
            let $delite = $('#del_thing');
            let $get = $('#get_thing');
            let $add = $('#add_thing');
            let $put = $('#put_on_shelf')
            let $xx = $('#put_thing_not_on_the_shelf');
            $xx.removeClass('active');
            $put.removeClass('active');
            $get.addClass('active');
            $delite.removeClass('active');
            $add.removeClass('active');

        }

        function toggle_ThingsNotOnTheShelf_button() {
            let $delite = $('#del_thing');
            let $get = $('#get_thing');
            let $add = $('#add_thing');
            let $put = $('#put_on_shelf')
            $put.addClass('active');
            $get.removeClass('active');
            $delite.removeClass('active');
            $add.removeClass('active');
            let $xx = $('#put_thing_not_on_the_shelf');
            $xx.addClass('active');
        }

        // SHOW

        function showDelliteButton() {
            let $delite = $('#del_thing');
            let $get = $('#get_thing');
            let $add = $('#add_thing');
            let $put = $('#put_on_shelf');
            let $xx = $('#put_thing_not_on_the_shelf');
            $xx.attr('hidden', true);
            $put.attr('hidden', true);
            $delite.attr('hidden', false);
            $get.attr('hidden', true);
            $add.attr('hidden', true);


        }

        function showAddButton() {
            let $delite = $('#del_thing');
            let $get = $('#get_thing');
            let $add = $('#add_thing');
            let $put = $('#put_on_shelf');
            let $xx = $('#put_thing_not_on_the_shelf');
            $xx.attr('hidden', true);
            $put.attr('hidden', true);
            $delite.attr('hidden', true);
            $get.attr('hidden', true);
            $add.attr('hidden', false);

        }

        function showGetButton() {
            let $delite = $('#del_thing');
            let $get = $('#get_thing');
            let $add = $('#add_thing');
            let $put = $('#put_on_shelf');
            let $xx = $('#put_thing_not_on_the_shelf');
            $xx.attr('hidden', true);
            $put.attr('hidden', true);
            $delite.attr('hidden', true);
            $get.attr('hidden', false);
            $add.attr('hidden', true);

        }


        function showThingsNotOnTheShelf() {
            let $delite = $('#del_thing');
            let $get = $('#get_thing');
            let $add = $('#add_thing');
            let $put = $('#put_on_shelf')
            $put.attr('hidden', false);
            $delite.attr('hidden', true);
            $get.attr('hidden', true);
            $add.attr('hidden', true);
            let $xx = $('#put_thing_not_on_the_shelf');
            $xx.attr('hidden', false);
        }


        function ThingNavigator() {
            $('#del_thing_button').on('click', function (event) {
                event.preventDefault();
                showDelliteButton();
                toggle_Delite_Button();

            });
            $('#add_thing_button').on('click', function (event) {
                event.preventDefault();
                showAddButton();
                toggle_Add_Button();

            });
            $('#get_thing_button').on('click', function (event) {
                event.preventDefault();
                showGetButton();
                toggle_Get_Button();
            });
            //
            // $('#get_thing_not_on_the_shelf').on('click', function (event) {
            //     event.preventDefault();
            //     showThingsNotOnTheShelf();
            //     toggle_ThingsNotOnTheShelf_button();
            // })

        }

        App.ThingNavigator = ThingNavigator;
        window.App = App;
    }
)()
