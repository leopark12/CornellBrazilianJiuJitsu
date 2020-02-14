$(document).ready(function () {

    //navigation responsiveness//
    var nav_open=0;
    $("#hamburger").on("click", function(){
        if (nav_open%2==0){
            $("nav").removeClass("desktop");
            $("header").css({
                'position':'fixed',
                'top':'0'
            });
        }
        else{
            $("nav").addClass("desktop");
            $("header").css("position", "static");
        }
        nav_open++;
    });

    $("#pop_up_close").on("click", function(){
        $(".pop_up").addClass("hidden");
    });
});
