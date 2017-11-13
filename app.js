
var ctx0 = document.getElementById('myChart').getContext('2d');
var myBarChart = new Chart(ctx0, {
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




// testGender
var ctx1 = document.getElementById('testGender').getContext('2d');
var myPieChart = new Chart(ctx1, {
    type: 'pie',
    data : {
        datasets: [{
            data: [25, 43, 0, 0],
            backgroundColor: ['red', 'blue', 'yellow', 'green'],
            label: 'What\'s your gender'
        
        }],

        labels: [
            'Female',
            'Male',
            'Prefer not to say',
            'Other'
        ]    

    },

    options: {
    // We add a title to the chart
          title: {
            display: true,
            value: 'top',
            text: 'testGender',
            fontSize: 25,
            fontFamily : 'Arial',
            fontStyle : 'bold', 
        }
}

});




// testAge
var ctx2 = document.getElementById('testAge').getContext('2d');
var myPieChart = new Chart(ctx2, {
    type: 'pie',
    data : {
        datasets: [{
            data: [37, 24, 10, 4, 4],
            backgroundColor: ['blue', 'red', 'yellow', 'green', 'purple'],
            label: 'What\'s your age'
        
        }],

        labels: [
            '20s',
            '30s',
            '40s',
            '50s',
            '60+'
        ]    

    },

    options: {
    // We add a title to the chart
          title: {
            display: true,
            value: 'top',
            text: 'testAge',
            fontSize: 25,
            fontFamily : 'Arial',
            fontStyle : 'bold', 
        }
}

});


// testNationalities
var ctx3 = document.getElementById('testNationalities').getContext('2d');
var myBarChart = new Chart(ctx3, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["Canada", "Chine", "France", "Irlande", "Kurdistan", "Tunisie", "Royaume-Uni", "USA",  ],
        datasets: [{
            backgroundColor: ['blue', 'red', 'yellow', 'green', 'purple', 'orange', 'lightblue', 'pink'],
            data: [2, 18, 41, 1, 1, 1, 14, 2],
        }]
    },

    // Configuration options go here
    options: {
    // We add a title to the chart
          title: {
            display: true,
            value: 'top',
            text: 'testNationalities',
            fontSize: 25,
            fontFamily : 'Arial',
            fontStyle : 'bold', 
        },
    // We add an animation to the chart
        animation: {
            duration: 1000,
            }
    }
});


// testQ1
var ctx4 = document.getElementById('testQ1').getContext('2d');
var myPieChart = new Chart(ctx4, {
    type: 'pie',
    data : {
        datasets: [{
            data: [38, 53],
            backgroundColor: ['blue', 'red'],
            label: 'testQ1'
        
        }],

        labels: [
            'Yes',
            'No'
        ]    

    },

    options: {
    // We add a title to the chart
          title: {
            display: true,
            value: 'top',
            text: 'testQ1',
            fontSize: 25,
            fontFamily : 'Arial',
            fontStyle : 'bold', 
        }
}

});



var ctx5 = document.getElementById('Q1bis').getContext('2d');
var myBarChart = new Chart(ctx5, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ["Sapporo City", "Iwate Prefecture, Kamaishi City", "Tokyo Metropolitan", "Saitama Prefecture, Kumagaya City", "Kanagawa Prefecture, Yokohama City", "Shizuoka Prefecture", "Aichi Prefecture, Toyota City", "Kobe City ", "Osaka Prefecture, Higashi-Osaka City", "Fukuoka Prefecture, Fukuoka City", "Kumamoto Prefecture, Kumamoto City", "Oita Prefecture"],
        datasets: [{
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