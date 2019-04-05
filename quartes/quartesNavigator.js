(
    function () {
        let App = window.App || {};
        let $ = window.jQuery;

        function toggleGetAndDeliteButton() {
            let $delite = $('#del_quartes');
            let $get = $('#get_quartes');
            let $add = $('#add_quartes');
            $get.removeClass('active');
            $delite.removeClass('active');
            $add.addClass('active');
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
            $get.addClass('active');
            $delite.removeClass('active');
            $add.removeClass('active');
        }

        function showDelliteButton() {
            let $delite = $('#del_quartes');
            let $get = $('#get_quartes');
            let $add = $('#add_quartes');
            $delite.attr('hidden', false);
            $get.attr('hidden', true);
            $add.attr('hidden', true);
        }

        function showAddButton() {
            let $delite = $('#del_quartes');
            let $get = $('#get_quartes');
            let $add = $('#add_quartes');
            $delite.attr('hidden', true);
            $get.attr('hidden', true);
            $add.attr('hidden', false);
        }

        function showGetButton() {
            let $delite = $('#del_quartes');
            let $get = $('#get_quartes');
            let $add = $('#add_quartes');
            $delite.attr('hidden', true);
            $get.attr('hidden', false);
            $add.attr('hidden', true);
        }

        function Navigator(){
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

        App.Navigator = Navigator;
        window.App = App;
    }
)()