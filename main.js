$(document).ready(function(){
    $('#btnFadeOut').click(function(){
        $('#box').fadeOut(3000,function(){
            $('#btnFadeOut').text("It's Gone");
        });
    });
    $('#btnFadeIn').click(function(){
        $('#box').fadeIn(4000);
    });
    $('#btnFadeTog').click(function(){
        $('#box').fadeToggle(1000);
    });
   
    $('#btnSlideDown').click(function(){
        $('#box1').slideDown(3000);
    });
    $('#btnSlideUp').click(function(){
        $('#box1').slideUp(3000);
    });
    $('#btnSlideTog').click(function(){
        $('#box1').slideUp(3000);
    });
    $('#btnSlideTog').click(function(){
        $('#box1').slideToggle(3000);
    });
    $('#btnStop').click(function(){
        $('#box1').stop();
    });

    $('#btn1').on('click',function(){
        $('.img').hide().alert('icon hided');
    });
    $('#btn2').on('click',function(){
        $('.img').show().alert('icon showed');
    });
    $('#btn3').on('click',function(){
        $('.text').append("<b>An sea quod utinam deseruisse, mutat nostro sapientem no eum, vidisse conceptam vituperata pri te.</b>");
    });
    


    $("p").mouseover(function(){
        $("p").css("background-color","#2fd0cb")
    });
    $("p").mouseout(function(){
        $("p").css("background-color","#85b545")
    });
    $("#btn3").click(function(){
        alert("text received: " +$(".text").text());
    });
    $("#btn4").click(function(){
        alert("Html text received: " +$(".text").html());
    });
    
});
