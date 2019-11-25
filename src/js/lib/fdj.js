define(['jquery'],function(){
    return {
        fdj:function(){
            var movebox = $('.movebox'),
                bigpic = $('.bigpic'),
                small = $('.small'),
                big = $('.big');

            small.on('mouseover', function() {
                // 1. 绑定事件 让元素显示
                movebox.addClass('show');
                big.addClass('show');


                // 3.计算movebox大小
                movebox.css({
                    'width': small.width() * big.width() / bigpic.width() + 'px',
                    'height': small.height() * big.height() / bigpic.height() + 'px',
                });
                // 2. movebox跟随鼠标
                small.on('mousemove', function(ev) {
                    // 计算定位位置
                    var top = ev.pageY - small.offset().top - (movebox.height() / 2);
                    var left = ev.pageX - small.offset().left - (movebox.width() / 2);

                    // 移动比例计算
                    var ratio = bigpic.width() / small.width(); //比例必须大于1

                    //边界管理
                    if (left <= 0) {
                        left = 0;
                    } else if (left > small.width() - movebox.width()) {
                        left = small.width() - movebox.width() - 2;
                    }

                    if (top <= 0) {
                        top = 0;
                    } else if (top > small.height() - movebox.height()) {
                        top = small.height() - movebox.height() - 2;
                    }

                    movebox.css({ //修改定位
                        left: left + 'px',
                        top: top + 'px'
                    });

                    bigpic.css({
                        left: -left * ratio + 'px',
                        top: -top * ratio + 'px'
                    });
                });
            });

            small.on('mouseout', function() {
                movebox.removeClass('show');
                big.removeClass('show');
            });
        }
    }
})