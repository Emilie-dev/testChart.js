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
            data: [55, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {}
});