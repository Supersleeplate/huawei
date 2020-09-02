import $ from './library/jquery.js';

(function() {
    $.ajax({
        type: "get",
        url: "../../interface/getproduct.php",
        datatype: "json",
        success: function(res) {
            console.log(res);
            let temp = '';
            res.forEach((elm, i) => {
                let picture = JSON.parse(elm, p);
                temp += `<li>
                            <a href="">
                                <div>
                                    <img src="../${picture[0].src}" alt="">
                                </div>
                                <div>${elm.title}</div>
                                <p>领券立减10元</p>
                                <p>￥${elm.price}</p>
                            </a>
                        </li>`;
            });
            $('#photojs').append(temp);

        }
    });
})();