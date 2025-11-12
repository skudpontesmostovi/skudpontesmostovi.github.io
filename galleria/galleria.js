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

function getAlbum() {
    src = $("#image-frame img").attr("src");
    end = src.lastIndexOf("/");
    src = src.substring(0,end);
    start = src.lastIndexOf("/");
    return src.substring(start+1);
}

function getIndex() {
    src = $("#image-frame img").attr("src");
    lastSlash = src.lastIndexOf("/");
    lastDot = src.lastIndexOf(".");
    indexStr = src.substring(lastSlash + 1, lastDot);
    return parseInt(indexStr, 10);
}

function nextImage(){
    album = getAlbum();
    size = totalPhotos["#"+album];
    index = getIndex();
    index = index == size ? 1 : index + 1;
    newPath = "../images/" + album + "/" + index + ".jpg";
    $("#image-frame img").attr("src", newPath);
}

function prevImage(){
    album = getAlbum();
    size = totalPhotos["#"+album];
    index = getIndex();
    index = index == 1 ? size : index - 1;
    newPath = "../images/" + album + "/" + index + ".jpg";
    $("#image-frame img").attr("src", newPath);
}