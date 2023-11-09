const theme = document.getElementById("theme");
const button = document.getElementById("button");
let light = true; 

button.addEventListener("click", () => {
    if(light) {
        theme.href = "css/dark.css";
        light = !light;
    } else {
        theme.href = "css/light.css";
        light = !light;
    }
    console.log(light);
})