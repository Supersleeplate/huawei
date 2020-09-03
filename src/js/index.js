import $ from './library/jquery.js';
(function() {
    $.ajax({
        type: "get",
        url: "../../interface/getproduct.php",
        datatype: "json",
        success: function(res) {
            console.log(res);
            let temp = '';
            res = JSON.parse(res);
            res.forEach((elm, i) => {
                let picture = JSON.parse(elm.picture);
                console.log(picture);
                temp += `<li class="item">
                    <a href="./xiangqing.html?id=${elm.id}">
                        <div>
                            <img src="..${picture[0].src}" alt="">
                        </div>
                        <div>${elm.title}</div>
                        <p>领券立减10元</p>
                        <p>￥${elm.price}</p>
                    </a>
                </li>`;
            })
            $('.tenphoto').append(temp);

        }
    });
})();