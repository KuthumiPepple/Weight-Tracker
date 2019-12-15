const myForm = document.getElementById("myForm");
const linkBtn = document.getElementById("chart-btn");

myForm.addEventListener('submit', () => {
    const nodelist = document.querySelectorAll("input:nth-of-type(1), input:nth-of-type(2)," +
    "input:nth-of-type(3), input:nth-of-type(4), input:nth-of-type(5), input:nth-of-type(6)");
    let arrayList = Array.from(nodelist);
    const height = arrayList.pop().value;
    let chartData = arrayList.reduce((acc, currElem, i) =>{
        acc.push([(1 + i), parseFloat(currElem.value)]);
        return acc;
    }, []);
    localStorage.setItem("chart", JSON.stringify(chartData));
    localStorage.setItem("bmi", height.toString());
    linkBtn.classList.remove("hide");
});
myForm.addEventListener('reset', () => {
    linkBtn.classList.add("hide");
})