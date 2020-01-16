$(function(){
    var index = 0;
    var timeId;
    var timeId2;
    var $lunbo = $(".lunbo .lunbo_img img");
    var $lunbo_circle =  $(".lunbo .lunbo_img ul li");
    var $bglunbo = $(".lunbo");

    function lunbo_time(){
        timeId = setInterval(function(){
            $lunbo.eq(index).css("display","block").siblings("img").css("display","none");
            $lunbo_circle.eq(index).addClass("circle_li2").siblings("li").removeClass("circle_li2");
            index ++;
            if(index == 3){
                index = 0;
            }
        },2000);
    }
    lunbo_time();
    $(".lunbo").on("mouseenter",function(){
        clearTimeout(timeId);
    }).on("mouseleave",function(){
        lunbo_time();
    })
    $lunbo_circle.on("mouseover",function(){
        clearTimeout(timeId);
        $(this).addClass("circle_li2").siblings("li").removeClass("circle_li2");
        index = $(this).index();
        $lunbo.eq(index).css("display","block").siblings("img").css("display","none");
    })



    var TabbedPanels1 = new Spry.Widget.TabbedPanels("TabbedPanels1");

    var speed = 40;
    // 向上滚动
    var demo = document.getElementById("demo");
    var demo2 = document.getElementById("demo2");
    var demo1 = document.getElementById("demo1");
    demo2.innerHTML = demo1.innerHTML
    function Marquee() {
        if (demo.scrollTop >= demo1.offsetHeight) {
            demo.scrollTop = 0;
            console.log(demo.scrollTop);
        }
        else {
            demo.scrollTop = demo.scrollTop + 1;
            console.log(demo.scrollTop);
        }
    }
    var MyMar = setInterval(Marquee, speed)
    demo.onmouseover = function () {
        clearInterval(MyMar)
    }
    demo.onmouseout = function () {
        MyMar = setInterval(Marquee, speed)
    }
})

