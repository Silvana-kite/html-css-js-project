const toggle = document.getElementById('coffeeToggle');
const wrap = document.querySelector('.toggle-wrap');

function createSmoke() {
    const rect = toggle.getBoundingClientRect();

    for(let i = 0; i< 7; i++) {
        const smoke =document.createElement("span");
        smoke.className = "smoke";

        const xOffset = Math.random() * 20 - 10;
        smoke.style.setProperty("--X", `${Math.random() * 40 - 20}px`);

        smoke.style.left = `calc(${toggle.offsetWidth * 0.23 + toggle.offsetWidth * 0.54 * (toggle.checked ? 1 : 0) + xOffset}px)`;
        smoke.style.top = `20px`;

        smoke.style.animationDelay = `${i * 0.15}s`;

        wrap.appendChild(smoke);

        setTimeout(() => {
            smoke.remove();
        }, 2200);
    }
}

toggle.addEventListener('change', ()=>{
    if (!toggle.checked) return;

    setTimeout(() => {
        createSmoke();
    }, 750);
});