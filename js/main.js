const myForm = document.getElementById("myForm");
const linkBtn = document.getElementById("chart-btn");

myForm.addEventListener('submit', () => {
    linkBtn.classList.remove("hide");
});
myForm.addEventListener('reset', () => {
    linkBtn.classList.add("hide");
})