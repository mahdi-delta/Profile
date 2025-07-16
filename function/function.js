// btn effect

const path = document.querySelector("#intro .content .main .container");
const card = document.querySelector("#intro .content .main #path");

path.addEventListener("mouseover", function (event) {
  card.classList.remove('clip');
  const rect = card.getBoundingClientRect();
  const X = Number(event.clientX - rect.left);
  const Y = Number(event.clientY - rect.top);

  card.style.background = `linear-gradient(${Y/X}deg , #e4454a, #ca3ea7)`;
  card.style.clipPath = `circle(200% at ${X}px ${Y}px)`;
  path.addEventListener("mouseleave", function (event) {
    card.classList.add('clip');
    const rect = card.getBoundingClientRect();
    const X = event.clientX - rect.left;
    const Y = event.clientY - rect.top;
    card.style.clipPath = `circle(0px at ${X}px ${Y}px)`;
  });
});


// change tab

let listA = document.querySelectorAll('a');
let active = 'intro';
let zIndex = 2;

listA.forEach(a => {
    a.addEventListener('click', function(event){
        let valueTab = a.dataset.tab;
        let activeOld = document.querySelector('.tab.active');
        if(activeOld) activeOld.classList.remove('active');
        if(valueTab && valueTab != active){
            let tabActive = document.getElementById(valueTab);
            zIndex++;
            tabActive.style.zIndex = zIndex;
            active = valueTab;
            tabActive.style.setProperty('--x', event.clientX + 'px');
            tabActive.style.setProperty('--y', event.clientY + 'px');
            tabActive.classList.add('active');
        }
    })
})

// mouse tracking glow

const cards = document.querySelectorAll("#skill .list .item");
const wrapper = document.querySelector("#skill .list");

wrapper.parentElement.addEventListener("mousemove", function (event) {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const X = event.clientX - rect.left;
    const Y = event.clientY - rect.top;

    card.style.background = `radial-gradient(960px circle at ${X}px ${Y}px, #E4454A, transparent 15%)`;
    });
});


