import $ from './library/jquery.js';

// // 获取图片的长度
// var imgLength = $('.justphoto div').length;

// // 计数索引
// var index = 0;

// // 自动播放
// var timer = setInterval(right, 2000);

// // 右按钮点击事件
// $('.next').click(right);

// function right() {
//     $('.justphoto div').eq(index).animate({ 'opacity': 0 }, 300);
//     index++;
//     if (index > imgLength - 1) {
//         index = 0;
//     }
//     $('.justphoto div').eq(index).animate({ 'opacity': 1 }, 300);
//     change();
// };

// // 左按钮点击事件
// $('.prev').click(function() {
//     $('.justphoto div').eq(index).animate({ 'opacity': 0 }, 300);
//     index--;
//     if (index > 0) {
//         index = imgLength - 1;
//     }
//     $('.justphoto div').eq(index).animate({ 'opacity': 1 }, 300);
//     change();
// });

// // 遍历列表小点
// $('#photo ul li').each(function(i) {
//     // 点击当前列表小点
//     $(this).click(function() {
//         $('#photo ul li').eq(index).animate({ 'opacity': 0 }, 300);
//         index = i;
//         $('#photo ul li').eq(index).animate({ 'opacity': 1 }, 300);
//         change();
//     });
// });

// // 列表小点自动
// function change() {
//     $('#photo ul li').eq(index).css('background', 'white').siblings().css('background', 'transparent');
// }



const photo = $('.justphoto div');
console.log(photo);
// 计数器
let num = 0;



$('.next').on('click', function take() {
    num++;
    if (num >= photo.length - 1) {
        num = 0;
    }
    for (let i = 0; i < photo.length - 1; i++) {
        photo.eq(i).animate({ 'opacity': 0 }, 200);
    }
    photo.eq(num).animate({ 'opacity': 1 }, 200);
    change();
})



$('.prev').on('click', function() {
    num--;
    if (num <= 0) {
        num = photo.length - 1;
    }
    for (var i = photo.length - 1; i > 0; i--) {
        photo.eq(i).animate({ 'opacity': 0 }, 200);
    }
    photo.eq(num).animate({ 'opacity': 1 }, 200);
    change();
})

// let timer = setInterval(function() {

// }, 3000);



function rightclick() {
    $('.next').click();
}

let timer = setInterval(rightclick, 3000);

$('#photo').on('mouseover', function() {
    clearInterval(timer);
})
$('.photo').on('mouseout', function() {
    setInterval(rightclick, 3000);
})

$('#photo ul li').each(function(i) {
    // 点击当前列表小点
    $(this).click(function() {
        $('#photo ul li').eq(index).animate({ 'opacity': 0 }, 300);
        index = i;
        $('#photo ul li').eq(i).animate({ 'opacity': 1 }, 300);
        change();
    });
});


function change() {
    $('#photo ul li').eq(num).css('background', 'white').siblings().css('background', 'transparent');
}