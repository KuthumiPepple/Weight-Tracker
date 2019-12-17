google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart); 

/* Retrieve data at top level scope */
const chartData = JSON.parse(localStorage.getItem('chart'));
const height = parseFloat(localStorage.getItem("bmi"));
const weight = chartData[chartData.length - 1][1];
/* calc BMI */
const bmi = (weight / (height * height)).toFixed(1);

showWeightAndBMI()

function showWeightAndBMI(){
    /* show weight */
    document.getElementById('weight').textContent = "" + weight.toFixed(1);

    /* show BMI */
    document.getElementById("bmi").textContent = "" + bmi;

    /* show BMI remark with appropriate colour */
    showBmiRemark(bmi);
    function showBmiRemark(num){
        let remark = document.getElementById("remark");
        if(bmi < 18.5){
            remark.textContent = "underweight";
            remark.style.color = "firebrick"
        }else if(bmi <= 25){
            remark.textContent = "normal weight";
            remark.style.color = "green"
        }else if(bmi <= 30){
            remark.textContent = "overweight";
            remark.style.color = "9D492B"
        }else{
            remark.textContent = "obese";
            remark.style.color = "red"
        }
    }

}

function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Day');
    data.addColumn('number', 'Weight');

    data.addRows(chartData);

    const options = {
        legend: {position: 'none'},
        chart: {
            title: 'Your Weight over a Period of 5 Days'
        },
        vAxis:{title: "Your Weight"}
    }
    const chart = new google.charts.Line(document.getElementById('chart-div'));

    chart.draw(data, google.charts.Line.convertOptions(options));
}
window.addEventListener('orientationchange', () => location.reload(true));