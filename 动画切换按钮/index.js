const heart = document.querySelector(".heart");
heart.addEventListener("click", () =>{
    if (!heart.classList.contains("forward")) {
        heart.classList.add("forward");
        heart.classList.remove("reverse");
    } else {
        heart.classList.add("reverse");
        heart.classList.remove("forward");
    }
})