(() => {
    const wrapperDiv = document.querySelector("#slider__element__list");
        wrapperDiv.style.transition = '.6s';
    let translateValue = 0;

    document.querySelectorAll(".slider__btn")
        .forEach((btn, idx) => {
            btn.addEventListener("click", event => {
                event.preventDefault();
                move(idx);
            })
        });

    const move = (btn) => {
        if (btn === 0 && translateValue <= -130) {
            translateValue += 130;
            wrapperDiv.style.transform = `translateX(${translateValue}px)`;

        } else if (btn === 1 && translateValue <= 0 && translateValue > -1300) {
            translateValue += (-130);
            wrapperDiv.style.transform = `translateX(${translateValue}px)`;
        }
    }
})();