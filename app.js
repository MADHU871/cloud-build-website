console.log("DevOps Dashboard Running 🚀");

/* Chart.js Dashboard */

const ctx = document.getElementById('devopsChart');

new Chart(ctx, {

type: 'bar',

data: {

labels: [

'Docker',
'Jenkins',
'GitHub',
'Kubernetes',
'CI/CD'

],

datasets: [{

label: 'System Performance %',

data: [95,90,98,85,99],

borderWidth:2

}]
},

options: {

responsive:true,

plugins: {

legend: {

labels: {

color:'white'

}
}
},

scales: {

x: {

ticks: {

color:'white'

}
},

y: {

ticks: {

color:'white'

},

beginAtZero:true,

max:100

}
}
}
});

/* AI Chatbot */

function chatBot(){

let input = document.getElementById('userInput').value;

document.getElementById('response').innerHTML =

"AI Response: Jenkins Build Successful 🚀";

}