var btSwitch = document.getElementById("switch-mode");

btSwitch.addEventListener("click", function() {
    document.body.classList.toggle("dark");
    btSwitch.classList.toggle("active");
});