window.onload = function() {

    let albums = ["#sorrento", "#trebinje", "#budapest", "#leobersdorf"];
    
    for (let album of albums) {
        $(album).children().each( (index, element) => {
            $(element).on("click", function(){
                $("#image-displayer").css("display", "block");
                let img = $(element).children().attr("src");
                $("#image-frame").children().attr("src", img);        
            });
        });
    }
    
    let blockImageClick = false;

    $(".nav").on("click", function(){
        blockImageClick = true;
    });

    $("#image-frame").on("click", function(){
        blockImageClick = true;
    })

    $("#image-displayer").on("click", function(event){
        if (blockImageClick) {
            event.stopImmediatePropagation();
        } else {
            $(this).css("display", "none");
        }
        blockImageClick = false;
    });

    
    /*$("#prev").on("click", function(){
        let img = $("#sorrento img").eq(2);
        let src = img.attr("src");
    })*/
}