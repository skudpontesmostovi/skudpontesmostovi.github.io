let totalPhotos = {"#sorrento":11, "#trebinje":9, "#budapest":11, "#leobersdorf":10};

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

    $("#image-frame img").on("click", function(){
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

    for (let album of albums){
        $(document).on("click", "#prev", function(){
            prevImage(album);
        });
        $(document).on("click", "#next", function(){
            nextImage(album);
        });
    }

    $("#prev").on("click", prevImage);
    $("#next").on("click", nextImage);

    $("#image-frame").on("scroll", function(event){
        horizontal = event.currentTarget.scrollLeft;
        alert(horizontal)

        if (horizontal > 10) {
            nextImage();
        } else if (horizontal < 10){
            prevImage();
        }
    });
}

function nextImage(){
    img = $("#image-frame img");
    src = img.attr("src");
    size = totalPhotos["#sorrento"];

    lastSlash = src.lastIndexOf("/");
    lastDot = src.lastIndexOf(".");
    indexStr = src.substring(lastSlash + 1, lastDot);
    index = parseInt(indexStr, 10);
    index = index == size ? 1 : index + 1;

    newPath = "../images/" + "#sorrento".substring(1) + "/" + index + ".jpg";
    $("#image-frame img").attr("src", newPath);
}

function prevImage(){
    let img = $("#image-frame img");
    let src = img.attr("src");
    let size = totalPhotos["#sorrento"];

    let lastSlash = src.lastIndexOf("/");
    let lastDot = src.lastIndexOf(".");
    let indexStr = src.substring(lastSlash + 1, lastDot);
    let index = parseInt(indexStr, 10);
    index = index == 1 ? size : index - 1;

    let newPath = "../images/" + "#sorrento".substring(1) + "/" + index + ".jpg";
    $("#image-frame img").attr("src", newPath);

}