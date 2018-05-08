$(".form").hide();

$(".available").on("click", () => {
    $(".form").hide().delay(100).fadeIn(100);
})
$("#1").click(function(){
    $("<span> 1</span>").appendTo("h4");
    $(".savebutton").click(function(){
        $(".form").hide();
        $("span").detach();
        $('#1').removeClass('available').addClass('reserved');
    });
});
$("#2").click(function(){
    $("<span> 2</span>").appendTo("h4");
    $(".savebutton").click(function(){
        $("#2").css("background-color", "blue");
        $("#2").css("color", "white");
        $(".form").hide();
        $("span").detach();
        $('#2').removeClass('available').addClass('reserved');

    });
});
$("#3").click(function(){
    $("<span> 3</span>").appendTo("h4");
    $(".savebutton").click(function(){
        $("#3").css("background-color", "blue");
        $("#3").css("color", "white");
        $(".form").hide();
        $("span").detach();
        $('#3').removeClass('available').addClass('reserved');

    });
});
$("#4").click(function(){
    $("<span> 4</span>").appendTo("h4");
    $(".savebutton").click(function(){
        $("#4").css("background-color", "blue");
        $("#4").css("color", "white");
        $(".form").hide();
        $("span").detach();
        $('#4').removeClass('available').addClass('reserved');

    });
});
$("#5").click(function(){
    $("<span> 5</span>").appendTo("h4");
    $(".savebutton").click(function(){
        $("#5").css("background-color", "blue");
        $("#5").css("color", "white");
        $(".form").hide();
        $("span").detach();
        $('#5').removeClass('available').addClass('reserved');

    });
});
$("#6").click(function(){
    $("<span> 6</span>").appendTo("h4");
    $(".savebutton").click(function(){
        $("#6").css("background-color", "blue");
        $("#6").css("color", "white");
        $(".form").hide();
        $("span").detach();
        $('#6').removeClass('available').addClass('reserved');

    });
});
$("#7").click(function(){
    $("<span> 1</span>").appendTo("h4");
    $(".savebutton").click(function(){
        $("#7").css("background-color", "blue");
        $("#7").css("color", "white");
        $(".form").hide();
        $("span").detach();
        $('#7').removeClass('available').addClass('reserved');
    });
});
$("#8").click(function(){
    $("<span> 8</span>").appendTo("h4");
    $(".savebutton").click(function(){
        $("#8").css("background-color", "blue");
        $("#8").css("color", "white");
        $(".form").hide();
        $("span").detach();
        $('#8').removeClass('available').addClass('reserved');
    });
});
$("#9").click(function(){
    $("<span> 9</span>").appendTo("h4");
    $(".savebutton").click(function(){
        $("#9").css("background-color", "blue");
        $("#9").css("color", "white");
        $(".form").hide();
        $("span").detach();
        $('#1').removeClass('available').addClass('reserved');

    });
});