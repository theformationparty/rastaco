const PAYPAL_URL = "";
let btn_flag = true;
let pause_flag = false;
const animatedBtns = document.querySelectorAll("button");
document.getElementById("give_btn").addEventListener("click", () => {
    window.open(PAYPAL_URL, "_blank");
});
document.getElementById("sponsor_btn").addEventListener("click", () => {
    window.alert("EMAIL: sponsor@rastaco.org");
    window.open("mailto:sponsor@rastaco.org");
    window.location.href = "mailto:sponsor@rastaco.org";
});
document.getElementById("apply_btn").addEventListener("click", () => {
    window.alert("COMING JANUARY 2027");
});
animatedBtns.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        pause_flag = true;
        btn.style.color = "rgba(178, 231, 204, 1)";
    });
    btn.addEventListener("mouseleave", () => {
        pause_flag = false;
        btn.style.color = "rgba(255, 183, 0, 1)";
    });
});
document.getElementById("text_logo").addEventListener("click", () => {
    window.location.href = "https://rastaco.org/";
});
document.getElementById("rasta_nova_span").addEventListener("click", () => {
    window.open("https://rastanova.org/", "_blank");
});
function ButtonAnimation() {
    btn_flag = !btn_flag;
    if (!pause_flag) {
        animatedBtns.forEach(btn => {
            btn.style.color = btn_flag ? "rgba(255, 183, 0, 1)" : "rgba(178, 231, 204, 1)";
        });
    }
}
setInterval(ButtonAnimation, 777);
const elementsToAnimate = document.querySelectorAll(".popsIn");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = "fadeInPop 0.5s ease-out forwards";
            observer.unobserve(entry.target);
        }
    });
}, {
    root: null,
    rootMargin: "0px",
    threshold: 0.15
});
elementsToAnimate.forEach(element => {
    observer.observe(element);
});
