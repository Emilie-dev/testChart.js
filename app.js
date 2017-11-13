//GENDER

var gender_male=0;
var gender_not_say=0;
var gender_female=0;
var gender_other=0;


for (var i = 0; i < results.length; i++) {
    var curRow = results[i];


    if(curRow[1] ==='Female' ) {
        gender_female++;
    }else if(curRow[1] ==='Male') {
        gender_male ++;
    }else if (curRow[1]==='Other') {
        gender_other++;
    }else{
        gender_not_say++;
    }

}

var ctx1 = document.getElementById('testGender').getContext('2d');
var myPieChart = new Chart(ctx1, {
    type: 'pie',
    data : {
        datasets: [{
            data: [gender_female, gender_male, gender_not_say, gender_other],
            backgroundColor: ['#66aa11', 'blue', 'yellow', 'green'],
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
            text: 'Gender',
            fontSize: 25,
            fontFamily : 'Arial',
            fontStyle : 'bold', 
        }
    }
});


// GENDER


// AGE /////
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
            text: 'Age',
            fontSize: 25,
            fontFamily : 'Arial',
            fontStyle : 'bold', 
        }
}

});

//NAIONALITY//////

var uniqueNationality= [];

for (var k = 0; k < results.length; k++) {
    var curRow = results[k];
    var nationality = curRow[3].toLowerCase();
    nationality = nationality.trim();

    if(uniqueNationality[nationality] === undefined) {
     uniqueNationality[nationality]=0;
     uniqueNationality[nationality]++;

    }else{
        uniqueNationality[nationality]++;
    }
}

// console.log(Object.keys(uniqueNationality));
// console.log(uniqueNationality);
// console.log(Object.values(uniqueNationality));

//random colors for the charts
var colors =Object.values(uniqueNationality).map(function(){
    return "#" + Math.random().toString(16).slice(2, 8);
});


var ctx3 = document.getElementById('testNationalities').getContext('2d');
var myBarChart = new Chart(ctx3, {
// The type of chart we want to create
type: 'bar',
// The data for our dataset
data: {
    labels: Object.keys(uniqueNationality),
    datasets: [{
        backgroundColor: colors,
        data: Object.values(uniqueNationality),
    }]
},

// Configuration options go here
options: {
    legend: {
        display: false,
    },
// We add a title to the chart
title: {
    display: true,
    value: 'top',
    text: 'Nationalities',
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