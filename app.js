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
var myPieChart1 = new Chart(ctx2, {
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
var myPieChart2 = new Chart(ctx4, {
    type: 'pie',
    data : {
        datasets: [{
            data: [answer1Yes, answer1No],
            backgroundColor: ['blue', 'red'],
            label: 'Q1 - Are you aware that Twelve cities in Japan has been selected as a Rugby WorldCup 2019　Host City?'
        
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
            text: 'Q1',
            fontSize: 25,
            fontFamily : 'Arial',
            fontStyle : 'bold', 
        },

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

    if (curRow[5].includes("Iwate Prefecture, Kamaishi City")) {
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

    if (curRow[5].includes("Oita Prefecture")) {
        q1_oita++;
    }
}




var ctx5 = document.getElementById('Q1bis').getContext('2d');
var myBarChart2 = new Chart(ctx5, {
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


//Q2//////////
var Q2_yes = 0;
var Q2_no = 0;

for (var n = 0; n < results.length; n++) {
    var curRow = results[n];
    if (curRow[6]==='Yes') {
        Q2_yes++;
    }else {
        Q2_no++;
    }
}

var ctx6 = document.getElementById('Q2').getContext('2d');
var myPieChart3 = new Chart(ctx6, {
    type: 'pie',
    data: {
        labels: ['Yes', 'No'],
        datasets: [{
            backgroundColor: ['blue', 'red', 'yellow', 'green', 'purple'],
            label: 'Q2',
            data:[Q2_yes, Q2_no]

        }],
        options: {
        // We add a title to the chart
            title: {
                display: true,
                value: 'top',
                text: 'Q2',
                fontSize: 25,
                fontFamily : 'Arial',
                fontStyle : 'bold', 
            },

        },
        animation: {
            duration: 1000,
        }
    }
});

//Q2Bis////////////////
var q2_sapporo=0;
var q2_iwate=0;
var q2_tokyo=0;
var q2_saitama=0;
var q2_kanagawa=0;
var q2_shizuoka=0;
var q2_aichi=0; 
var q2_kobe=0;
var q2_osaka=0;
var q2_fukuoka=0;
var q2_kumamoto=0;
var q2_oita=0;

for (var o = 0; o < results.length; o++) {
    var curRow = results[o];
    // console.log(results[o]);
    q2_sapporo+=parseInt(curRow[7]);
    q2_iwate+=parseInt(curRow[8]);
    q2_tokyo+=parseInt(curRow[9]);
    q2_saitama+=parseInt(curRow[10]);
    q2_kanagawa+=parseInt(curRow[11]);
    q2_shizuoka+=parseInt(curRow[12]);
    q2_aichi+=parseInt(curRow[13]); 
    q2_kobe+=parseInt(curRow[14]);
    q2_osaka+=parseInt(curRow[15]);
    q2_fukuoka+=parseInt(curRow[16]);
    q2_kumamoto+=parseInt(curRow[17]);
    q2_oita+=parseInt(curRow[18]);     
}

var ctx7 = document.getElementById('Q2bis').getContext('2d');
var myBarChart3 = new Chart(ctx7, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ["Sapporo City", "Iwate Prefecture, Kamaishi City", "Tokyo Metropolitan", "Saitama Prefecture, Kumagaya City", "Kanagawa Prefecture, Yokohama City", "Shizuoka Prefecture", "Aichi Prefecture, Toyota City", "Kobe City ", "Osaka Prefecture, Higashi-Osaka City", "Fukuoka Prefecture, Fukuoka City", "Kumamoto Prefecture, Kumamoto City", "Oita Prefecture"],
        datasets: [{
            backgroundColor: 'rgb(0, 128, 255)',
            borderColor: 'rgb(0, 128, 255)',
            data: [q2_sapporo, q2_iwate, q2_tokyo, q2_saitama, q2_kanagawa, q2_shizuoka, q2_aichi, q2_kobe, q2_osaka, q2_fukuoka, q2_kumamoto, q2_oita],
            label: '# of visits'
        }]
    },

    // Configuration options go here
    options: {
    // We add a title to the chart
        title: {
            display: true,
            value: 'top',
            text: 'Q2 bis',
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


/////////Q3
var Q3_yes = 0;
var Q3_no = 0;

for (var p = 0; p < results.length; p++) {
    var curRow = results[p];
    if (curRow[19]==='Yes') {
        Q3_yes++;
    }else {
        Q3_no++;
    }
}

var ctx8 = document.getElementById('Q3').getContext('2d');
var myPieChart4 = new Chart(ctx8, {
    type: 'pie',
    data: {
        labels: ['Yes', 'No'],
        datasets: [{
            backgroundColor: ['blue', 'red', 'yellow', 'green', 'purple'],
            label: 'Q2',
            data:[Q3_yes, Q3_no]

        }],
        options: {
        // We add a title to the chart
            title: {
                display: true,
                value: 'top',
                text: 'Q3',
                fontSize: 25,
                fontFamily : 'Arial',
                fontStyle : 'bold', 
            },

        },
        animation: {
            duration: 1000,
        }
    }
});

/////Q3BIS
var q3_Aomori_Prefecture=0;
var q3_Iwate_Prefecture=0;
var q3_Miyagi_Prefecture=0;
var q3_Akita_Prefecture=0;
var q3_Yamagata_Prefecture=0;
var q3_Fukushima_Prefecture=0;


for (var q = 0; q < results.length; q++) {
    var curRow = results[q];
    // console.log(results[o]);
    q3_Aomori_Prefecture+=parseInt(curRow[20]);
    q3_Iwate_Prefecture+=parseInt(curRow[21]);
    q3_Miyagi_Prefecture+=parseInt(curRow[22]);
    q3_Akita_Prefecture+=parseInt(curRow[23]);
    q3_Yamagata_Prefecture+=parseInt(curRow[24]);
    q3_Fukushima_Prefecture+=parseInt(curRow[25]);
}

var ctx9 = document.getElementById('Q3bis').getContext('2d');
var myBarChart1 = new Chart(ctx9, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ["Aomori Prefecture", "Iwate Prefecture", "Miyagi Prefecture", "Akita Prefecture", "Yamagata Prefecture", "Fukushima_Prefecture"],
        datasets: [{
            backgroundColor: 'rgb(0, 128, 255)',
            borderColor: 'rgb(0, 128, 255)',
            data: [q3_Aomori_Prefecture, q3_Iwate_Prefecture, q3_Miyagi_Prefecture, q3_Akita_Prefecture, q3_Yamagata_Prefecture, q3_Fukushima_Prefecture],
            label: '# of visits'
        }]
    },

    // Configuration options go here
    options: {
    // We add a title to the chart
        title: {
            display: true,
            value: 'top',
            text: 'Q3 bis',
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


////Q4

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

    if (curRow[5].includes("Iwate Prefecture, Kamaishi City")) {
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

    if (curRow[5].includes("Oita Prefecture")) {
        q1_oita++;
    }
}