let body = document.querySelector("body");
body.onclick = function(){
    body.classList.toggle("dark");
}

let cursor = document.querySelector(".cursor");
for(let i = 0;i<200;i++){
    let circle = document.createElement("div");
    circle.classList.add("circle");
    cursor.appendChild(circle);
}
document.body.addEventListener("mousemove",function(e){
    gsap.to('.circle', {
        x: e.clientX,
        y: e.clientY,
        stagger: -0.0025,
        scale:(i, target) => {
            return 1 + (i * ( 2/ 200));
        }
    })
});