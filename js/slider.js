document.querySelectorAll(".slider").forEach(slider => {
    const slides = slider.querySelectorAll(".slides img");
    let index = 0;
    let startX = 0;

    slider.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });
    slider.addEventListener("touchend", (e) => {
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        // 左へスワイプ
        if (diff > 50) {
            slides[index].classList.remove("active");
            index = (index + 1) % slides.length;
            slides[index].classList.add("active");
        }
        // 右へスワイプ
        if (diff < -50) {
            slides[index].classList.remove("active");
            index = (index - 1 + slides.length) % slides.length;
            slides[index].classList.add("active");
        }
    });
    // 最初の画像を表示
    slides[index].classList.add("active");
    slider.querySelector(".next").addEventListener("click", () => {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    });
    slider.querySelector(".prev").addEventListener("click", () => {
        slides[index].classList.remove("active");
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add("active");
    });
});