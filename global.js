let btn_flag = true;
let pause_flag = false;
const btns = document.querySelectorAll("button");
btns.forEach(element => {
    element.addEventListener("mouseenter", () => {
        pause_flag = true;
        element.style.color = "rgba(178, 231, 204, 1)";
        element.style.letterSpacing = "0.1rem";
    });
    element.addEventListener("mouseleave", () => {
        pause_flag = false;
        element.style.color = "rgba(255, 183, 0, 1)";
    });
});
document.getElementById("text_logo").addEventListener("click", () => {
    window.location.href = "https://rastaco.org/";
});
document.getElementById("rasta_nova_span").addEventListener("click", () => {
    window.open("https://rastanova.org/");
});
function ButtonAnimation() {
    btn_flag = !btn_flag;
    if (!pause_flag) {
        btns.forEach(element => {
            if (btn_flag) {
                element.style.letterSpacing = "0.1rem";
                element.style.color = "rgba(255, 183, 0, 1)";
            }
            else {
                element.style.letterSpacing = "0rem";
                element.style.color = "rgba(178, 231, 204, 1)";
            }
        });
    }
    
}
setInterval(() => {
    ButtonAnimation();
}, Math.floor(Math.random() * 1000));
const elementsToAnimate = document.querySelectorAll(".popsIn");
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};
const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationName = "fadeInPop";
      entry.target.style.animationDuration = "0.5s";
      entry.target.style.animationTimingFunction = "ease-out";
      entry.target.style.animationFillMode = "forwards";
      entry.target.style.animationIterationCount = "1";
      observer.unobserve(entry.target);
    }
  });

};
const observer = new IntersectionObserver(observerCallback, observerOptions);
elementsToAnimate.forEach(element => {
  observer.observe(element);
});
