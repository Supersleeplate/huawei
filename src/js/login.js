import $ from './library/jquery.js';
$('#from input:not([type="submit"])').each(function(i, elm) {
    $(elm).on('focus', function() {
        $('span[class="' + $(elm).attr('id') + '"]').html('请输入').css('color', '#999');
    })

    $(elm).on('blur', function() {
        if ($(elm).val() == '') {
            $('span[class="' + $(elm).attr('id') + '"]').html('不能为空').css('color', 'red');
        }
    })
})