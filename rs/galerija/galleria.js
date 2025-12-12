let totalPhotos = {"sorrento":11, "trebinje":9, "budapest":11, "leobersdorf":10, "smotra2025":8, "smotra2019":9, "etnovecera":6};
let albums = ["sorrento", "trebinje", "budapest", "leobersdorf", "smotra2025", "smotra2019", "etnovecera"];
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
        $("#load-less-trips").css("display","");
    });

    $("#load-less-trips").on("click", function(){
        unloadAlbum("budapest");
        unloadAlbum("leobersdorf");
        $("#load-more-trips").css("display","");
        $("#load-less-trips").css("display","none");
    });

    $("#load-more-events").on("click", function(){
        loadAlbum("etnovecera");
        $("#load-more-events").css("display","none");
        $("#load-less-events").css("display","");
    });

    $("#load-less-events").on("click", function(){
        unloadAlbum("etnovecera");
        $("#load-more-events").css("display","");
        $("#load-less-events").css("display","none");
    })

    loadAlbum("trebinje");
    loadAlbum("sorrento");
    
    loadAlbum("smotra2025");
    loadAlbum("smotra2019");

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
        src = "/images/" + album + "/" + index + ".jpg";
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

function unloadAlbum(album){
    for (let child of $("#"+album).children()){
        $(child).remove();
    }
    $("#container-"+album).css("display","none");
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
    newPath = "/images/" + album + "/" + index + ".jpg";
    $("#image-frame img").attr("src", newPath);
}

function prevImage(){
    album = getAlbum();
    size = totalPhotos[album];
    index = getIndex();
    index = index == 1 ? size : index - 1;
    newPath = "/images/" + album + "/" + index + ".jpg";
    $("#image-frame img").attr("src", newPath);
}