(
    function () {
        let App = window.App || {};
        let $ = window.jQuery;

        function toggleGetAndDeliteButton() {
            let $delite = $('#del_quartes');
            let $get = $('#get_quartes');
            let $add = $('#add_quartes');
            let $find = $('#find_quartes');
            $get.removeClass('active');
            $delite.removeClass('active');
            $add.addClass('active');
            $find.removeClass('active');
        }



        function toggleGetAndAddButton() {
            let $delite = $('#del_quartes');
            let $get = $('#get_quartes');
            let $add = $('#add_quartes');
            $get.removeClass('active');
            $delite.addClass('active');
            $add.removeClass('active');
        }

        function toggleAddAndDeliteButton() {
            let $delite = $('#del_quartes');
            let $get = $('#get_quartes');
            let $add = $('#add_quartes');
            let $find = $('#find_quartes');
            $get.addClass('active');
            $delite.removeClass('active');
            $add.removeClass('active');
            $find.removeClass('active');
        }

        function showDelliteButton() {
            let $delite = $('#del_quartes');
            let $get = $('#get_quartes');
            let $add = $('#add_quartes');
            let $find = $('#find_quartes');
            $delite.attr('hidden', false);
            $get.attr('hidden', true);
            $add.attr('hidden', true);
            $find.attr('hidden', true);
        }

        function showAddButton() {
            let $delite = $('#del_quartes');
            let $get = $('#get_quartes');
            let $add = $('#add_quartes');
            let $find = $('#find_quartes');
            $delite.attr('hidden', true);
            $get.attr('hidden', true);
            $add.attr('hidden', false);
            $find.attr('hidden', true);
        }

        function showGetButton() {
            let $delite = $('#del_quartes');
            let $get = $('#get_quartes');
            let $add = $('#add_quartes');
            let $find = $('#find_quartes');
            $delite.attr('hidden', true);
            $get.attr('hidden', false);
            $add.attr('hidden', true);
            $find.attr('hidden', false);
        }

        function QuartesNavigator(){
            $('#del_quartes_button').on('click', function (event) {
                event.preventDefault();
                showDelliteButton();
                toggleGetAndAddButton();

            });
            $('#add_quartes_button').on('click', function (event) {
                showAddButton();
                toggleGetAndDeliteButton();

            });
            $('#get_quartes_button').on('click', function (event) {
                showGetButton();
                toggleAddAndDeliteButton();
            })
        }

        App.QuartesNavigator = QuartesNavigator;
        window.App = App;
    }
)()
