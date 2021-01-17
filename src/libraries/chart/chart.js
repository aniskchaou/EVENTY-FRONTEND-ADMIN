import * as Chart from 'chart.js';

export function drawChart() {
   
    let data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
    let labels =  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    var ctx1 = document.getElementsByClassName("event-chart");
    var ctx2 = document.getElementsByClassName("category-chart");

    renderChart(data, labels,ctx1,'rgba(19, 111, 1, 1)');
    renderPieChart([10,20,30],['Sport','Culture','Conférence‎'],ctx2,'rgba(19, 111, 1, 1)','rgba(253, 13, 13, 1)','rgb(23, 56, 132)');
    
  }


export function renderChart(data, labels,ctx,color){
   
   
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '',
                data: data,
                backgroundColor: color,
                borderColor: color,
            }]
        },
    })
  }

  export function renderPieChart(data, labels,ctx,color1,color2,color3){
   
   
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: '',
                data: data,
                backgroundColor: [color1,color2,color3] ,
                borderColor: color1,
            }]
        },
    })
  }  