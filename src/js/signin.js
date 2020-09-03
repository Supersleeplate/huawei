import $ from './library/jquery.js';
let res = {
    "username": /^[A-z]\w{5,15}$/,
    "password": /^.{6,16}$/,
    "email": /^\w{6,16}@[A-z0-9_-]{2,}\.[A-z]{2,7}\.?[A-z]*$/,
    "phone": /^1[3-9]\d{9}$/
};

$('#form input:not([type="button"])').each(function(index, elm) {
    $(elm).on('input', function() {
        if ($(elm).attr('id') == 'checkpass') return;
        if (res[$(elm).attr('id')].test($(elm).val())) {
            $('span[class="' + $(elm).attr('id') + '"]').html('通过验证').css('color', 'lime');
            $(this).attr('data-pass', true);
        } else {
            $('span[class="' + $(elm).attr('id') + '"]').html('未通过验证').css('color', 'red');
            $(this).attr('data-pass', false);
        }
        chage();
    });
});

$('#checkpass').on('input', function() {
    if ($(this).val() === $('#password').val()) {
        $('.checkpass').html('通过验证').css('color', 'lime');
        $(this).attr('data-pass', true);
    } else {
        $('.checkpass').html('两次输入密码不同，请确认！').css('color', 'red');
        $(this).attr('data-pass', false);
    }
    chage();
});

function chage() {
    if ($('[data-pass=true]').length == 4) {
        $('#btn').removeAttr('disabled')
            .css('background', '#9fceff');
    } else {
        $('#btn').attr('disabled', 'disabled');
    }

}

// 密码的显示
$('#eye1').on('mousedown', function() {
    $('#password').attr('type', 'text');
})

$('#eye1').on('mouseup', function() {
    $('#password').attr('type', 'password');
})

// 确认密码的显示
$('#eye2').on('mousedown', function() {
    $('#checkpass').attr('type', 'text');
})

$('#eye2').on('mouseup', function() {
    $('#checkpass').attr('type', 'password');
})