$(document).ready(function(){
    $("#spin-button").click(function(){
        $("#wheel").css({ 
            "-webkit-transform": "rotate(3600deg)",
            "-moz-transform": "rotate(3600deg)",
            "transform": "rotate(3600deg)" 
        });
        $.get("/spin", function(data){
            setTimeout(function() {
                $("#prize").text("Твой подарок - " + data.prize + " долларов!");
                $("#prize").after('<button id="get-gift-button">Получите подарок</button>');
                $("#get-gift-button").addClass("large-green-button"); // Добавляем класс для стилизации кнопки
                $("#get-gift-button").click(function(){
                    window.location.href = '/telegram';
                });
            }, 5000);
        });
    });
});
