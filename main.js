const theme = document.getElementById("theme");
const button = document.getElementById("button");
const btn_circlr = document.getElementById("btn-circle");
let light = true; 

button.addEventListener("click", () => {
    if(light) {
        theme.href = "css/dark.css";
        btn_circlr.style.transform = "rotate(90deg)";
        light = !light;
    } else {
        theme.href = "css/light.css";
        btn_circlr.style.transform = "rotate(0deg)";
        light = !light;
    }
    console.log(light);
})