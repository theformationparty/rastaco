let btn_flag = true;
let pause_flag = false;
document.getElementById("text_logo").addEventListener("click", () => {
    window.location.href = "https://rastaco.org/";
});
document.getElementById("rasta_nova_span").addEventListener("click", () => {
    window.open("https://rastanova.org/");
});
document.getElementById("yt").addEventListener("click", () => {
    window.open("https://www.youtube.com/@rastacoorg?sub_confirmation=1");
});
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
