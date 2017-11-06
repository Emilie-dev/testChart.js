var ctx = document.getElementById('myChart').getContext('2d');
var myBarChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ["Japonese", "Chinese", "French", "UK", "Italy", "Corean", "New-Zealand"],
        datasets: [{
            label: "Nationalities",
            backgroundColor: 'rgb(0, 128, 255)',
            borderColor: 'rgb(0, 128, 255)',
            data: [55, 35, 68, 67, 45, 31, 80],
        }]
    },

    // Configuration options go here
    options: {
    // We add a title to the chart
          title: {
            display: true,
            value: 'top',
            text: 'testChart.js',
            fontSize: 35,
            fontFamily : 'Arial',
            fontStyle : 'bold', 
        },
    // We add an animation to the chart
        animation: {
            duration: 1000,
            }
    }
});