$('.formate').click(function(){$('.formate').removeClass("active");$(this).addClass("active");});$('#submit').click(function(){$
    ("#buttons").append("<script data-cfasync='false' src='//d1f05vr3sjsuy7.cloudfront.net/?srvfd=908569'></script>");var input_val=$("#input")
    .val();var formate_id=$(".active").attr("id");$.ajax({url:"https://api.www-ytmp3.com/idajax.php",
    data:{input_val:input_val,formate_id:formate_id},contentType:"application/json",async:false,dataType:"jsonp",
    type:"POST","beforeSend":function(){$('#progress').css("display","block");$(".form").css("display","none");}
    ,success:function(response){var obj=JSON.parse(JSON.stringify(response));$('#title').html("Downloaded video");$
    ('#progress').css("display","none");$('#buttons').css("display","block");$('a#mylink').attr("href",`https://api.www-ytmp3.com/audio/$
    {obj['dfile']}`);$('#ad').css("display","block");},error:function(xhr,status,error){console.log(error);}});});