const STRIPE_URL =
    "https://buy.stripe.com/5kQdR8ahs3y78bAcfFcbC00";
let btn_flag = true;
let pause_flag = false;
const stripeBtns =
    document.querySelectorAll(".stripe_btn");
const animatedBtns =
    document.querySelectorAll("button");
stripeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        window.open(
            STRIPE_URL,
            "_blank"
        );
    });
});
animatedBtns.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        pause_flag = true;
        btn.style.color =
            "rgba(178, 231, 204, 1)";
    });
    btn.addEventListener("mouseleave", () => {
        pause_flag = false;
        btn.style.color =
            "rgba(255, 183, 0, 1)";
    });
});
document
    .getElementById("text_logo")
    .addEventListener("click", () => {
        window.location.href =
            "https://rastaco.org/";
    });
document
    .getElementById("rasta_nova_span")
    .addEventListener("click", () => {
        window.open(
            "https://rastanova.org/",
            "_blank"
        );
    });
document
    .getElementById("yt")
    .addEventListener("click", () => {
        window.open(
            "https://www.youtube.com/@rastacoorg?sub_confirmation=1",
            "_blank"
        );
    });
function ButtonAnimation() {
    btn_flag = !btn_flag;
    if (!pause_flag) {
        animatedBtns.forEach(btn => {
            if (btn_flag) {
                btn.style.color =
                    "rgba(255, 183, 0, 1)";
            }
            else {
                btn.style.color =
                    "rgba(178, 231, 204, 1)";
            }
        });
    }
}
setInterval(
    ButtonAnimation,
    777
);
const elementsToAnimate =
    document.querySelectorAll(".popsIn");
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15
};
const observerCallback =
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationName =
                    "fadeInPop";
                entry.target.style.animationDuration =
                    "0.5s";
                entry.target.style.animationTimingFunction =
                    "ease-out";
                entry.target.style.animationFillMode =
                    "forwards";
                entry.target.style.animationIterationCount =
                    "1";
                observer.unobserve(
                    entry.target
                );
            }
        });
    };
const observer =
    new IntersectionObserver(
        observerCallback,
        observerOptions
    );
elementsToAnimate.forEach(element => {
    observer.observe(element);
});
