let max_albums_loaded = 2;
let albums_loaded = 0

let blockImageClick = false;

let descriptions = {
    it: {
        trips: "Viaggi",
        events: "Altri eventi",
        posters: "Galleria delle nostre locandine",
        load_more: "Mostra di più",
        show_less: "Mostra di meno"
    },
    rs: {
        trips: "Путовања",
        events: "Остали догађаји",
        posters: "Галерија наших плаката",
        load_more: "Прикажи више",
        show_less: "Прикажи мање"
    },
    en: {
        trips: "Trips",
        events: "Other events",
        posters: "Posters",
        load_more: "Load more",
        show_less: "Show less"
    }
};

let albums = {
    trips: ["sorrento", "leobersdorf", "gradiste", "budapest", "trebinje"],
    events: ["smotra2025", "smotra2019", "etnovecera"],
    posters: ["posters"]
};

let album_descriptions = {
    sizes: {
        sorrento: 11,
        leobersdorf: 10,
        gradiste: 10,
        budapest: 11,
        trebinje: 9,
        smotra2025: 8,
        smotra2019: 9,
        etnovecera: 6,
        posters: 8
    },
    trips: {
        sorrento: {
            it: "Sorrento, Napoli, Capri - Giugno 2025",
            rs: "Соренто, Напуљ, Капри - Јун 2025",
            en: "Sorrento, Naples, Capri - June 2025"
        },
        leobersdorf: {
            it: "Leobersdorf - Dicembre 2024",
            rs: "Леоберсдорф - Децембар 2024",
            en: "Leobersdorf - December 2024"
        },
        gradiste: {
            it: "Veliko Gradište - Giugno 2024",
            rs: "Велико Градиште - Јун 2024",
            en: "Veliko Gradište - June 2024",
        },
        budapest: {
            it: "Budapest - Giugno 2023",
            rs: "Будимпешта - Јун 2023",
            en: "Budapest - June 2023",
        },
        trebinje: {
            it: "Trebinje - Marzo 2023",
            rs: "Требиње - Март 2023",
            en: "Trebinje - Marzo 2023"
        }
    },
    events: {
        smotra2025: {
            it: "Festival del folklore Serbo in Italia - Trieste, 2025",
            rs: "Смотра Српског Фолклора у Италији - Трст, 2025",
            en: "Italian festival of Serbian Folklore - Trieste, 2025"
        },
        smotra2019: {
            it: "Festival del foklore Serbo in Europa - Belgrado, 2019",
            rs: "Европска Смотра Српског Фолклора - Београд, 2019",
            en: "European festival of Serbian Folklore - Belgrade, 2019"
        },
        etnovecera: {
            it: "Cena etnica Serba - Febbraio 2024",
            rs: "Етно вечера - Фебруар 2024",
            en: "Ethno dinner - February 2024"
        }
    },
    posters: {
        it: "Galleria delle nostre locandine",
        rs: "Галерија наших плаката",
        en: "Gallery of our posters"
    }
}


window.onload = function() {

    // preevnting image-display frame collapse when navigating
    // through photos (left, right)
    $(".nav").on("click", function(){
        blockImageClick = true;
    });

    // preventing image-display frame collapse when clicking on
    // the current image
    $("#image-frame img").on("click", function(){
        blockImageClick = true;
    });

    // collapsing image-display frame if clicking
    // outside of the image
    $("#image-displayer").on("click", function(event){
        if (blockImageClick) {
            // preventing collapse
            event.stopImmediatePropagation();
        } else {
            // collapsing image-display frame
            $(this).css("display", "none");
        }
        blockImageClick = false;
    });

    // setting up navigation
    $("#prev").on("click", prevImage);
    $("#next").on("click", nextImage);
    // to add swipe gesture: https://stackoverflow.com/questions/62823062/adding-a-simple-left-right-swipe-gesture

    loadSections();
}

function loadSections() {

    // recognizing language
    let language = window.location.pathname.split("/")[1];
    if (language == "galleria") {language = "it";}

    let albums_container = $("#albums-container");

    // TRIPS SECTION
    let trips_header = $("<p>", {
        class: "title",
        style: "text-align:center; text-transform:uppercase;",
        text: descriptions[language].trips
    });
    albums_container.append(trips_header);

    albums_loaded = 0;
    albums.trips.forEach(function(album){
        let container = $("<div>", {
            id: "container-" + album,
            class: "hidden"
        });
        let title = $("<p>", {
            class: "title",
            style: "text-align:center",
            text: album_descriptions.trips[album][language]
        });
        let displayer = $("<div>", {
            id: album,
            class: "gallery-flex",
            style: "text-align:center;"
        });

        // adding the albums to the DOM
        container.append(title);
        container.append(displayer);
        albums_container.append(container);

        // loading only the first two albums
        if (albums_loaded < max_albums_loaded) {
            loadAlbum(album);
            albums_loaded++;
        }
    });
    // containers all added to the DOM

    let load_more_trips = $("<p>", {
        id: "load-more-trips",
        class: "title load-more",
        style: "text-align:center; margin-top:1cm;",
        text: descriptions[language].load_more
    });
    let show_less_trips = $("<p>", {
        id: "load-less-trips",
        class: "title load-less",
        style: "text-align:center; margin-top:1cm; display:none",
        text: descriptions[language].show_less
    });

    albums_container.append(load_more_trips);
    albums_container.append(show_less_trips);
    add_load_trips_event();
    albums_container.append($("<br>"));


    // EVENTS SECTION
    let events_header = $("<p>", {
        class: "title",
        style: "text-align:center;text-transform:uppercase;",
        text: descriptions[language].events
    });
    albums_container.append(events_header);

    albums_loaded = 0;
    albums.events.forEach(function(album){
        let container = $("<div>", {
            id: "container-" + album,
            class: "hidden"
        });
        let title = $("<p>", {
            class: "title",
            style: "text-align:center",
            text: album_descriptions.events[album][language]
        });
        let displayer = $("<div>", {
            id: album,
            class: "gallery-flex",
            style: "text-align:center;"
        });

        // adding the albums to the DOM
        container.append(title);
        container.append(displayer);
        albums_container.append(container);

        // loading only the first two albums
        if (albums_loaded < max_albums_loaded) {
            loadAlbum(album);
            albums_loaded++;
        }
    });
    // containers all added to the DOM

    let load_more_events = $("<p>", {
        id: "load-more-events",
        class: "title load-more",
        style: "text-align:center; margin-top:1cm;",
        text: descriptions[language].load_more
    });
    let show_less_events = $("<p>", {
        id: "load-less-events",
        class: "title load-less",
        style: "text-align:center; margin-top:1cm; display:none",
        text: descriptions[language].show_less
    });

    albums_container.append(load_more_events);
    albums_container.append(show_less_events);
    add_load_events_event();
    albums_container.append($("<br>"));


    // POSTERS SECTION
    let posters_header = $("<p>", {
        class: "title",
        style: "text-align:center;text-transform:uppercase;",
        text: descriptions[language].posters
    });

    albums_container.append(posters_header);

    albums.posters.forEach(function(album){
        let container = $("<div>", {
            id: "container-" + album,
            class: "hidden"
        });
        let title = $("<p>", {
            class: "title",
            style: "text-align:center",
            text: album_descriptions.posters[language]
        });
        let displayer = $("<div>", {
            id: album,
            class: "gallery-flex",
            style: "text-align:center;"
        });

        // adding the albums to the DOM
        container.append(title);
        container.append(displayer);
        albums_container.append(container);

        loadAlbum(album);
    });
    // containers all added to the DOM
}

function add_load_trips_event() {
    $("#load-more-trips").on("click", function(){
        loadAlbum("gradiste");
        loadAlbum("budapest");
        loadAlbum("trebinje");
        $("#load-more-trips").css("display","none");
        $("#load-less-trips").css("display","");
    });

    $("#load-less-trips").on("click", function(){
        unloadAlbum("gradiste");
        unloadAlbum("budapest");
        unloadAlbum("trebinje");
        $("#load-more-trips").css("display","");
        $("#load-less-trips").css("display","none");
    });
}

function add_load_events_event() {
    $("#load-more-events").on("click", function(){
        loadAlbum("etnovecera");
        $("#load-more-events").css("display","none");
        $("#load-less-events").css("display","");
    });

    $("#load-less-events").on("click", function(){
        unloadAlbum("etnovecera");
        $("#load-more-events").css("display","");
        $("#load-less-events").css("display","none");
    });
}

async function fileExists(url) {
    try {
        let res = await fetch(url, { method: "HEAD" });
        return res.ok; // true se status 200, false altrimenti
    } catch (err) {
        return false; // errore = file non trovato
    }
}

function loadAlbum(album) {
    albumTag = "#" + album;
    imageFrame = this.document.getElementById(album);
    $("#container-"+album).removeClass("hidden");
    $("#container-"+album).css("display","");

    for (let index = 1; index <= album_descriptions.sizes[album]; index++){
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
    size = album_descriptions.sizes[album];
    index = getIndex();
    index = index == size ? 1 : index + 1;
    newPath = "/images/" + album + "/" + index + ".jpg";
    $("#image-frame img").attr("src", newPath);
}

function prevImage(){
    album = getAlbum();
    size = album_descriptions.sizes[album];
    index = getIndex();
    index = index == 1 ? size : index - 1;
    newPath = "/images/" + album + "/" + index + ".jpg";
    $("#image-frame img").attr("src", newPath);
}