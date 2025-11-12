let totalPhotos = {"sorrento":11, "trebinje":9, "budapest":11, "leobersdorf":10};
let albums = ["sorrento", "trebinje", "budapest", "leobersdorf"];
let blockImageClick = false;

window.onload = function() {

    // preventing image-display collapse when navigating
    $(".nav").on("click", function(){
        blockImageClick = true;
    });

    // preventing image-display collapse when clicking on image
    $("#image-frame img").on("click", function(){
        blockImageClick = true;
    })

    // collapsing if clicking outside of the image
    $("#image-displayer").on("click", function(event){
        if (blockImageClick) {
            event.stopImmediatePropagation();
        } else {
            $(this).css("display", "none");
        }
        blockImageClick = false;
    });

    // setting up navigation
    $("#prev").on("click", prevImage);
    $("#next").on("click", nextImage);

    $("#load-more-trips").on("click", function(){
        loadAlbum("budapest");
        loadAlbum("leobersdorf");
        $("#load-more-trips").css("display","none");
    });

    loadAlbum("trebinje");
    loadAlbum("sorrento");

}

function loadAlbum(album) {
    albumTag = "#" + album;
    imageFrame = this.document.getElementById(album);
    $("#container-"+album).removeClass("hidden");
    $("#container-"+album).css("display","");

    for (let index = 1; index <= totalPhotos[album]; index++){
        div = this.document.createElement("div");
        img = this.document.createElement("img");
        img.alt = "";
        src = "../images/" + album + "/" + index + ".jpg";
        img.src = src;
        div.appendChild(img);
        imageFrame.appendChild(div);
    }

    $(albumTag).children().each((index, element) => {
        $(element).on("click", function(){
            $("#image-displayer").css("display", "block");
            img = $(element).children().attr("src");
            $("#image-frame").children().attr("src", img);        
        });
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
    size = totalPhotos[album];
    index = getIndex();
    index = index == size ? 1 : index + 1;
    newPath = "../images/" + album + "/" + index + ".jpg";
    $("#image-frame img").attr("src", newPath);
}

function prevImage(){
    album = getAlbum();
    size = totalPhotos[album];
    index = getIndex();
    index = index == 1 ? size : index - 1;
    newPath = "../images/" + album + "/" + index + ".jpg";
    $("#image-frame img").attr("src", newPath);
}