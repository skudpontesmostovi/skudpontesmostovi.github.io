let quantities = {voda:0, sok:0, pivo:0, vino:0, spricer:0, spricercarafa:0, aperol:0, rakija:0, jeger:0, kafa:0, riba:0, pasulj:0, pomfrit:0};
let prices = {voda:1.5, sok:3, pivo:3, vino:2, spricer:3, spricercarafa:13, aperol:4, rakija:2, jeger:3, kafa:1, riba:6, pasulj:5, pomfrit:3};

window.onload = function() {
    let billdiv = this.document.getElementById("bill-div");
    let cancelbutton = this.document.getElementById("cancel");

    

    // Ponisti
    this.document.getElementById("cancel").addEventListener("click", function(){
        billdiv.innerHTML = '';
        quantities = {voda:0, sok:0, pivo:0, vino:0, spricer:0, spricercarafa:0, aperol:0, rakija:0, jeger:0, kafa:0, riba:0, pasulj:0, pomfrit:0};
        document.getElementById("total").innerText = `UKUPNO: 0 €`;
    });
    
    // Voda
    this.document.getElementById("voda").addEventListener("click", function(){
        if (quantities.voda == 0) {
            quantities.voda = 1;
            item = document.createElement("div");
            item.setAttribute("class", "item");
            item.setAttribute("id", "item-voda");
            billdiv.appendChild(item);
        } else {
            quantities.voda += 1;
        }
        update_prices();
    });

    // Sok
    this.document.getElementById("sok").addEventListener("click", function(){
        if (quantities.sok == 0) {
            quantities.sok = 1;
            item = document.createElement("div");
            item.setAttribute("class", "item");
            item.setAttribute("id", "item-sok");
            billdiv.appendChild(item);
        } else {
            quantities.sok += 1;
        }
        update_prices();
    });

    // Pivo
    this.document.getElementById("pivo").addEventListener("click", function(){
        if (quantities.pivo == 0) {
            quantities.pivo = 1;
            item = document.createElement("div");
            item.setAttribute("class", "item");
            item.setAttribute("id", "item-pivo");
            billdiv.appendChild(item);
        } else {
            quantities.pivo += 1;
        }
        update_prices();
    });

    // Vino
    this.document.getElementById("vino").addEventListener("click", function(){
        if (quantities.vino == 0) {
            quantities.vino = 1;
            item = document.createElement("div");
            item.setAttribute("class", "item");
            item.setAttribute("id", "item-vino");
            billdiv.appendChild(item);
        } else {
            quantities.vino += 1;
        }
        update_prices();
    });

    // Spricer
    this.document.getElementById("spricer").addEventListener("click", function(){
        if (quantities.spricer == 0) {
            quantities.spricer = 1;
            item = document.createElement("div");
            item.setAttribute("class", "item");
            item.setAttribute("id", "item-spricer");
            billdiv.appendChild(item);
        } else {
            quantities.spricer += 1;
        }
        update_prices();
    });

    // Spricer caraffa
    this.document.getElementById("spricercarafa").addEventListener("click", function(){
        if (quantities.spricercarafa == 0) {
            quantities.spricercarafa = 1;
            item = document.createElement("div");
            item.setAttribute("class", "item");
            item.setAttribute("id", "item-spricercarafa");
            billdiv.appendChild(item);
        } else {
            quantities.spricercarafa += 1;
        }
        update_prices();
    });

    // Rakija
    this.document.getElementById("rakija").addEventListener("click", function(){
        if (quantities.rakija == 0) {
            quantities.rakija = 1;
            item = document.createElement("div");
            item.setAttribute("class", "item");
            item.setAttribute("id", "item-rakija");
            billdiv.appendChild(item);
        } else {
            quantities.rakija += 1;
        }
        update_prices();
    });

    // Jeger
    this.document.getElementById("jeger").addEventListener("click", function(){
        if (quantities.jeger == 0) {
            quantities.jeger = 1;
            item = document.createElement("div");
            item.setAttribute("class", "item");
            item.setAttribute("id", "item-jeger");
            billdiv.appendChild(item);
        } else {
            quantities.jeger += 1;
        }
        update_prices();
    });

    // Kafa
    this.document.getElementById("kafa").addEventListener("click", function(){
        if (quantities.kafa == 0) {
            quantities.kafa = 1;
            item = document.createElement("div");
            item.setAttribute("class", "item");
            item.setAttribute("id", "item-kafa");
            billdiv.appendChild(item);
        } else {
            quantities.kafa += 1;
        }
        update_prices();
    });

    // Kafa
    this.document.getElementById("aperol").addEventListener("click", function(){
        if (quantities.aperol == 0) {
            quantities.aperol = 1;
            item = document.createElement("div");
            item.setAttribute("class", "item");
            item.setAttribute("id", "item-aperol");
            billdiv.appendChild(item);
        } else {
            quantities.aperol += 1;
        }
        update_prices();
    });

    // Riba
    this.document.getElementById("riba").addEventListener("click", function(){
        if (quantities.riba == 0) {
            quantities.riba = 1;
            item = document.createElement("div");
            item.setAttribute("class", "item");
            item.setAttribute("id", "item-riba");
            billdiv.appendChild(item);
        } else {
            quantities.riba += 1;
        }
        update_prices();
    });

    // Pasulj
    this.document.getElementById("pasulj").addEventListener("click", function(){
        if (quantities.pasulj == 0) {
            quantities.pasulj = 1;
            item = document.createElement("div");
            item.setAttribute("class", "item");
            item.setAttribute("id", "item-pasulj");
            billdiv.appendChild(item);
        } else {
            quantities.pasulj += 1;
        }
        update_prices();
    });

    // Pomfrit
    this.document.getElementById("pomfrit").addEventListener("click", function(){
        if (quantities.pomfrit == 0) {
            quantities.pomfrit = 1;
            item = document.createElement("div");
            item.setAttribute("class", "item");
            item.setAttribute("id", "item-pomfrit");
            billdiv.appendChild(item);
        } else {
            quantities.pomfrit += 1;
        }
        update_prices();
    });
}

function update_prices(){
    let voda = document.getElementById("item-voda");
    if (voda != null) {
        voda.innerText = `Voda: ${quantities.voda}.    Ukupno: ${quantities.voda * prices.voda} €`;
    }

    let sok = document.getElementById("item-sok");
    if (sok != null) {
        sok.innerText = `Sok: ${quantities.sok}.    Ukupno: ${quantities.sok * prices.sok} €`;
    }

    let kafa = document.getElementById("item-kafa");
    if (kafa != null) {
        kafa.innerText = `Kafa: ${quantities.kafa}.    Ukupno: ${quantities.kafa * prices.kafa} €`;
    }

    let pivo = document.getElementById("item-pivo");
    if (pivo != null) {
        pivo.innerText = `Pivo: ${quantities.pivo}.    Ukupno: ${quantities.pivo * prices.pivo} €`;
    }

    let rakija = document.getElementById("item-rakija");
    if (rakija != null) {
        rakija.innerText = `Rakija: ${quantities.rakija}.    Ukupno: ${quantities.rakija * prices.rakija} €`;
    }

    let jeger = document.getElementById("item-jeger");
    if (jeger != null) {
        jeger.innerText = `Jeger: ${quantities.jeger}.    Ukupno: ${quantities.jeger * prices.jeger} €`;
    }

    let vino = document.getElementById("item-vino");
    if (vino != null) {
        vino.innerText = `Vino: ${quantities.vino}.    Ukupno: ${quantities.vino * prices.vino} €`;
    }

    let spricer = document.getElementById("item-spricer");
    if (spricer != null) {
        spricer.innerText = `Špricer: ${quantities.spricer}.    Ukupno: ${quantities.spricer * prices.spricer} €`;
    }

    let spricercarafa = document.getElementById("item-spricercarafa");
    if (spricercarafa != null) {
        spricercarafa.innerText = `Špricer Bokal: ${quantities.spricercarafa}.    Ukupno: ${quantities.spricercarafa * prices.spricercarafa} €`;
    }

    let aperol = document.getElementById("item-aperol");
    if (aperol != null) {
        aperol.innerText = `Aperol: ${quantities.aperol}.    Ukupno: ${quantities.aperol * prices.aperol} €`;
    }


    let riba = document.getElementById("item-riba");
    if (riba != null) {
        riba.innerText = `Riba: ${quantities.riba}.    Ukupno: ${quantities.riba * prices.riba} €`;
    }

    let pasulj = document.getElementById("item-pasulj");
    if (pasulj != null) {
        pasulj.innerText = `Pasulj: ${quantities.pasulj}.    Ukupno: ${quantities.pasulj * prices.pasulj} €`;
    }

    let pomfrit = document.getElementById("item-pomfrit");
    if (pomfrit != null) {
        pomfrit.innerText = `Pomfrit: ${quantities.pomfrit}.    Ukupno: ${quantities.pomfrit * prices.pomfrit} €`;
    }

    let ukupno = 0;
    ukupno += quantities.voda * prices.voda;
    ukupno += quantities.sok * prices.sok;
    ukupno += quantities.kafa * prices.kafa;
    ukupno += quantities.pivo * prices.pivo;
    ukupno += quantities.rakija * prices.rakija;
    ukupno += quantities.jeger * prices.jeger;
    ukupno += quantities.vino * prices.vino;
    ukupno += quantities.spricer * prices.spricer;
    ukupno += quantities.spricercarafa * prices.spricercarafa;
    ukupno += quantities.aperol * prices.aperol;

    ukupno += quantities.riba * prices.riba;
    ukupno += quantities.pasulj * prices.pasulj;
    ukupno += quantities.pomfrit * prices.pomfrit;

    document.getElementById("total").innerText = `UKUPNO: ${ukupno} €`;

}
