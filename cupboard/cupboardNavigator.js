(
    function () {
        let App = window.App || {};
        let $ = window.jQuery;

        function toggleGetAndDeliteButton() {
            let $delite = $('#del_cupboard');
            let $get = $('#get_cupboard');
            let $add = $('#add_cupboard');
            $get.removeClass('active');
            $delite.removeClass('active');
            $add.addClass('active');
        }



        function toggleGetAndAddButton() {
            let $delite = $('#del_cupboard');
            let $get = $('#get_cupboard');
            let $add = $('#add_cupboard');
            $get.removeClass('active');
            $delite.addClass('active');
            $add.removeClass('active');
        }

        function toggleAddAndDeliteButton() {
            let $delite = $('#del_cupboard');
            let $get = $('#get_cupboard');
            let $add = $('#add_cupboard');
            $get.addClass('active');
            $delite.removeClass('active');
            $add.removeClass('active');
        }

        function showDelliteButton() {
            let $delite = $('#del_cupboardm');
            let $get = $('#get_cupboard');
            let $add = $('#add_cupboard');
            $delite.attr('hidden', false);
            $get.attr('hidden', true);
            $add.attr('hidden', true);
        }

        function showAddButton() {
            let $delite = $('#del_cupboard');
            let $get = $('#get_cupboard');
            let $add = $('#add_cupboard');
            $delite.attr('hidden', true);
            $get.attr('hidden', true);
            $add.attr('hidden', false);
        }

        function showGetButton() {
            let $delite = $('#del_cupboard');
            let $get = $('#get_cupboard');
            let $add = $('#add_cupboard');
            $delite.attr('hidden', true);
            $get.attr('hidden', false);
            $add.attr('hidden', true);
        }

        function CupboardNavigator(){
            $('#del_cupboard_button').on('click', function (event) {
                event.preventDefault();
                showDelliteButton();
                toggleGetAndAddButton();

            });
            $('#add_cupboard_button').on('click', function (event) {
                event.preventDefault();
                showAddButton();
                toggleGetAndDeliteButton();

            });
            $('#get_cupboard_button').on('click', function (event) {
                event.preventDefault();
                showGetButton();
                toggleAddAndDeliteButton();
            })
        }

        App.CupboardNavigator = CupboardNavigator;
        window.App = App;
    }
)()