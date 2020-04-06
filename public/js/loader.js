$(document).ready(function() {
    var counter = sessionStorage.getItem('counter');
    var max = sessionStorage.getItem('max');
    var btn = sessionStorage.getItem('btn');

    if (counter) {
        $('#start-play').prop('disabled', false);
    }
    if (btn) {
        if (btn == 'easy') {
            $('#easy').addClass('active-btn');
        }
        if (btn == 'normal') {
            $('#normal').addClass('active-btn');
        }
        if (btn == 'difficult') {
            $('#difficult').addClass('active-btn');
        }
    }
});