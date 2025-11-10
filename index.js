window.onload = function() {
  	$("#loader").css("display", "none");
    resize_page();
    slider();
    /* data-aos="fade-in"
    AOS.init({
    easing: 'ease-in-quad',
    });*/
    
}

window.onresize = function() {
    resize_page();
}

window.onscroll = function() {
    let landingheight = $("#landing").height();
    let navheight = $("nav").height()

    if ($(window).scrollTop() < landingheight - navheight) {
        $("#landing").css("opacity", 1 - $(window).scrollTop() / (landingheight - navheight));
        $("nav").css("background-color", "transparent");

		$("#landing").css("top", `-${$(window).scrollTop()/2}px`)
    } else {
        $("nav").css("background-color", "#001f3e");
    }

    /*if ($(window).scrollTop() > (landingheight - navheight) * 0.75) {
        $("nav").css("opacity", `${4*$(window).scrollTop() / (3*(landingheight - navheight))}`);
    }*/

    if ($(window).scrollTop() > (landingheight - navheight)) {
        $("nav").css("opacity", "1");
    } else {
        $("nav").css("opacity", "0");
    }
}

function resize_page() {
    if ($(window).width() <= 500 && false) {
        $("#landing").css("height", "50vh");
        $("#landing").css("width", "");
        $("#landing").css("position", "relative");
        $("#landing").css("left", "50%");
        $("#landing").css("transform", "translateX(-50%)");
    }
    $("main").css("margin-top", `${$("#landing").height()}px`);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function slider() {
  const frame = document.getElementById('image-frame-1');
  const track = frame.querySelector('.track');
  const slides = Array.from(track.children);
  const btnNext = frame.querySelector('.next');
  const btnPrev = frame.querySelector('.prev');
  const AUTO_MS = 5000; // 5 secondi

  let index = 0;
  let timer = null;

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  function next() { goTo(index + 1); }
  function prev() { goTo(index - 1); }

  function startTimer() {
    stopTimer();
    timer = setInterval(next, AUTO_MS);
  }

  function stopTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function resetTimer() {
    startTimer();
  }

  // eventi click
  btnNext.addEventListener('click', function () { next(); resetTimer(); });
  btnPrev.addEventListener('click', function () { prev(); resetTimer(); });

  // opzionale: pausa mentre il mouse è sopra (migliore UX)
  frame.addEventListener('mouseenter', stopTimer);
  frame.addEventListener('mouseleave', startTimer);

  // avvia autoplay
  goTo(0);
  startTimer();

  // per accessibilità: tasti freccia sin/ des
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft')  { prev(); resetTimer(); }
    if (e.key === 'ArrowRight') { next(); resetTimer(); }
  });
};