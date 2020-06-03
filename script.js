function gradientBackgroundGenerator() {

    const css = document.querySelector("h3");
    const color1 = document.querySelector(".color1");
    const color2 = document.querySelector(".color2");
    const body = document.getElementById("gradient");
    const randomButton = document.getElementById("button");

    function setGradient() {
        body.style.background = "linear-gradient(to right, "
            + color1.value + ", " + color2.value + ")";

        css.textContent = body.style.background + ";";
    }

    function getRandomColor() {
        const letters = '0123456789abcdef';
        let color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
    }

    function setRandomColor() {
        color1.value = getRandomColor();
        color2.value = getRandomColor();

        setGradient();
    }

    randomButton.addEventListener("click", setRandomColor);

    setGradient();
    color1.addEventListener("input", setGradient);
    color2.addEventListener("input", setGradient);
}

gradientBackgroundGenerator();