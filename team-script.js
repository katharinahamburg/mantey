
window.addEventListener("load", function () {
    let imgflyin = document.querySelectorAll(".team-flyin > img");
    imViewport();
    function imViewport() {
        for (let i = 0; i < imgflyin.length; i++) {
            if (imgflyin[i].getBoundingClientRect().top >= 0) {
                if (imgflyin[i].getBoundingClientRect().top <= window.innerHeight) {
                    imgflyin[i].style.transform = "translateX(0)";
                }
            }
            if (imgflyin[i].getBoundingClientRect().bottom >= 0) {
                if (imgflyin[i].getBoundingClientRect().bottom <= window.innerHeight) {
                    imgflyin[i].classList.add("flyin");
                }
            }
        }
    }
    window.addEventListener("scroll", imViewport);
  })
  


function teamContainer() {
    for (let i = 1; i < 6; i++) {
       document.getElementById('container').innerHTML += `<div class="door">${i}</div>`;    
    }
}

