(
    function () {
        let App = window.App || {};
        let $ = window.jQuery;

        function toggleGetAndDeliteButton() {
            let $delite = $('#del_owner');
            let $get = $('#get_owner');
            let $add = $('#add_owner');

            $delite.removeClass('active');
            $add.addClass('active');
            $find.removeClass('active');
        }



        function toggleGetAndAddButton() {
            let $delite = $('#del_owner');
            let $get = $('#get_owner');
            let $add = $('#add_owner');
            $get.removeClass('active');
            $delite.addClass('active');
            $add.removeClass('active');
        }

        function toggleAddAndDeliteButton() {
            let $delite = $('#del_owner');
            let $get = $('#get_owner');
            let $add = $('#add_owner');

            $get.addClass('active');
            $delite.removeClass('active');
            $add.removeClass('active');

        }

        function showDelliteButton() {
            let $delite = $('#del_owner');
            let $get = $('#get_owner');
            let $add = $('#add_owner');

            $delite.attr('hidden', false);
            $get.attr('hidden', true);
            $add.attr('hidden', true);

        }

        function showAddButton() {
            let $delite = $('#del_owner');
            let $get = $('#get_owner');
            let $add = $('#add_owner');

            $delite.attr('hidden', true);
            $get.attr('hidden', true);
            $add.attr('hidden', false);

        }

        function showGetButton() {
            let $delite = $('#del_owner');
            let $get = $('#get_owner');
            let $add = $('#add_owner');

            $delite.attr('hidden', true);
            $get.attr('hidden', false);
            $add.attr('hidden', true);
        }

        function OwnerNavigator(){
            $('#del_owner_button').on('click', function (event) {
                event.preventDefault();
                showDelliteButton();
                toggleGetAndAddButton();

            });
            $('#add_owner_button').on('click', function (event) {
                event.preventDefault();
                showAddButton();
                toggleGetAndDeliteButton();

            });
            $('#get_owner_button').on('click', function (event) {
                event.preventDefault();
                showGetButton();
                toggleAddAndDeliteButton();
            })
        }

        App.OwnerNavigator = OwnerNavigator;
        window.App = App;
    }
)()
