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
            text: 'testGender',
            fontSize: 25,
            fontFamily : 'Arial',
            fontStyle : 'bold', 
        }
}

});


//Age
var age_20=0;
var age_30=0;
var age_40=0;
var age_50=0;
var age_60=0;


for (var j = 0; j < results.length; j++) {
    var curRow = results[j];


    if(curRow[2] === "20s" ) {
        age_20++;
    }else if(curRow[2] === "30s" ) {
        age_30++;
    }else if (curRow[2] === "40s") {
        age_40++;
    }else if (curRow[2] === "50s" ) {
        age_50++;
    }else{
        age_60++;
    }


}
var ctx2 = document.getElementById('testAge').getContext('2d');
var myPieChart = new Chart(ctx2, {
    type: 'pie',
    data : {
        datasets: [{
            data: [age_20, age_30, age_40, age_50, age_60],
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
var answer1Yes=0;
var answer1No=0;

for (var l = 0; l < results.length; l++) {
     var curRow = results[l];


    if(curRow[4] === "Yes" ) {
        answer1Yes++;
    }else{
        answer1No++;
    }
}

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


//Q1bis
var q1_sapporo=0;
var q1_iwate=0;
var q1_tokyo=0;
var q1_saitama=0;
var q1_kanagawa=0;
var q1_shizuoka=0;
var q1_aichi=0; 
var q1_kobe=0;
var q1_osaka=0;
var q1_fukuoka=0;
var q1_kumamoto=0;
var q1_oita=0;

for (var m = 0; m < results.length; m++) {
     var curRow = results[m];


    if(curRow[5].includes("Sapporo City")) {
        q1_sapporo++;
    }

    if (curRow[5].includes("Iwate Prefecture,Kamaishi City")) {
        q1_iwate++;
    }

    if (curRow[5].includes("Tokyo Metropolitan")) {
        q1_tokyo++;
    }

    if (curRow[5].includes("Saitama Prefecture, Kumagaya City")) {
        q1_saitama++;
    }

    if (curRow[5].includes("Kanagawa Prefecture, Yokohama City")) {
        q1_kanagawa++;
    }

    if (curRow[5].includes("Shizuoka Prefecture")) {
        q1_shizuoka++;
    }

    if (curRow[5].includes("Aichi Prefecture, Toyota City")) {
        q1_aichi++;
    }

    if (curRow[5].includes("Kobe City")) {
        q1_kobe++;
    } 

    if (curRow[5].includes("Osaka Prefecture, Higashi-Osaka City")) {
        q1_osaka++;
    } 

    if (curRow[5].includes("Fukuoka Prefecture, Fukuoka City")) {
        q1_fukuoka++;
    } 

    if (curRow[5].includes("Kumamoto Prefecture, Kumamoto City")) {
        q1_kumamoto++;
    } 

    if (curRow[5].includes("Oita Prefecture")) {}
        q1_oita++;
    }



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
            data: [q1_sapporo, q1_iwate, q1_tokyo, q1_saitama, q1_kanagawa, q1_shizuoka, q1_aichi, q1_kobe, q1_osaka, q1_fukuoka, q1_kumamoto, q1_oita],
            label: 'City'
        }]
    },

    // Configuration options go here
    options: {
    // We add a title to the chart
          title: {
            display: true,
            value: 'top',
            text: 'Q1bis',
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