let names = {
    "T01": "Marina Savic",
    "T02": "Nicholas Radovanovic",
    "T03": "Filip Ilic",
    "T04": "Lazar Rajkovic",
    "T05": "Dejana Stanisavljevic",
    "L01": "Teodora Milovanovic",
    "L03": "Ema Djuric",
    "R04": "Mila Madzarac"
}

let presentPassengers = [];

let seat_gap = 6;

window.onload = function() {
    let top_seat_container = $("#top-seat-container")
    let left_seat_container = $("#left-seat-container")
    let right_seat_container = $("#right-seat-container")

    for (let i = 1; i <= 5; i++) {
        addSeat("T", i, top_seat_container);
    }

    for (let i = 1; i <= 16; i++) {
        addSeat("L", i, left_seat_container);
    }

    for (let i = 1; i <= 16; i++) {
        addSeat("R", i, right_seat_container);
    }

}

function stringId(id) {
    if (id < 10) {
        return "0"+id;
    }
    return ""+id;
}

function addSeat(section, seat_id, container) {
    seat_id = section + stringId(seat_id);
    seat_name = names[seat_id]

    if (seat_name == null) {
        seat_name = "";
    }

    let seat = $("<div>", {
        id: "seat-" + seat_id,
        style: "background-color:red",
        class: "seat"
    });
    let id = $("<p>", {
        class: "seat-id",
        text: seat_id
    });
    let name = $("<p>", {
        class: "seat-name",
        style: "text-align:center;",
        text: names[seat_id]
    });

    seat.append(id)
    seat.append(name)
    seat.click(togglePresent);
    container.append(seat)
}

function togglePresent() {
    let id = $(this).text().substring(0,3)
    togglePassenger(id);
    let color = "";
    if (presentPassengers.includes(id)) {
        color = "green";
    } else {
        color = "red";
    }
    
    $(this).css("background-color", color);
}

function togglePassenger(id) {
    if (presentPassengers.includes(id)) {
        presentPassengers = presentPassengers.filter(x => x !== id);
    } else {
        presentPassengers = [...presentPassengers, id];
    }
}
