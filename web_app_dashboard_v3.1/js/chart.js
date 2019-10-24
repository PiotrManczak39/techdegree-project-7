const alertButton = document.querySelector('.close-button');
const alertBox = document.querySelector('.alert-box');
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("sendButton");
const bell = document.querySelector('.bell-alert');
const timePeriods = document.querySelectorAll('.chart-buttons button');
const ctx = document.getElementById('mainChart').getContext('2d');
const chartChoice = document.querySelector('.chart-buttons');
const widget = document.querySelector('.button-area');
const widget2 = document.querySelector('.button-area2');
const wlacznik = document.getElementById('wlacznik');
const wlacznik2 = document.getElementById('wlacznik2');
let currentSetting = localStorage.getItem('stan');
let currentSetting2 = localStorage.getItem('stan2');

alertButton.addEventListener('click', () => {
    alertBox.style.display = 'none';
});

send.addEventListener('click', () => {
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    user.value = '';
    message.value = '';
  } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    user.value = '';
    message.value = '';
  } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    user.value = '';
    message.value = '';
  } else {
    alert(`Message successfully sent to: ${user.value}`);
    user.value = '';
    message.value = '';
  }
});



//bar chart

var barChart = document.getElementById('barChart').getContext('2d');
var chart2 = new Chart(barChart, {
    type: 'bar',
    data: {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      datasets: [{
          label: '# of Hits',
          data: [75, 115, 175, 125, 225, 200, 100],
          backgroundColor: '#7477BF',
          borderWidth: 1
      }]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      },
    }
});

//doughnut chart

var doughnutChart = document.getElementById('doughnutChart').getContext('2d');
var chart3 = new Chart(doughnutChart, {
    type: 'doughnut',
    data: {
        labels: ['Phones', 'Tablets', 'Desktops'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['rgb(255, 99, 132)', '#e67e22', '#2980b9'],
            borderColor: ['rgb(255, 99, 132)', '#e67e22', '#2980b9'],
            data: [ 40, 45, 147]
        }]
    },
    options: {
      cutoutPercentage: 60,
      animation: {
        animateScale: true
      },
      legend : {
        display: true
      }
    }
});

let Hourly = {
  labels: ["00:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00","7:00", "8:00",
    "9:00","10:00","11:00", "12:00","13:00","14:00", "15:00", "16:00", "17:00","18:00",
    "19:00", "20:00", "21:00","22:00", "23:00"
    ],
    datasets: [{
        label: '# of Hits',
        data: [30, 40, 70, 100, 120, 140, 150, 120, 60, 80, 90, 100, 110, 120,
            130, 200, 90, 150, 90, 100, 120, 130, 70, 120
        ],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
}

let Daily = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
}

let Weekly = {
      labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
      "4-10", "11-17", "18-24", "25-31"],
      datasets: [{
          label: '# of Hits',
          backgroundColor: 'rgba(116, 119, 191, .3)',
          borderColor: 'blue',
          data: [0, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
          borderWidth: 1,
          pointHoverBorderWidth: 3,
          pointHoverBorderCOlor: '#000'
      }]
}

let Monthly = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug"
        ,"Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [{
        label: '# of Hits',
        data: [
            "20000", "30000", "50000", "10000", "20000", "30000","10000", "20000",
            "30000", "40000", "50000","30000"
        ],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
}

function okres(x) {
  if ( x == 'Daily' ) {
    return Daily;
  } else if ( x == 'Hourly' ) {
    return Hourly;
  } else if ( x == 'Weekly' ) {
    return Weekly;
  } else if ( x == 'Monthly' ) {
    return Monthly;
  }
}

//main chart
for ( let i=0; i<timePeriods.length; i++ ) {
  if ( timePeriods[i].className === 'highlight' ) {
    var chart = new Chart(ctx, {
        type: 'line',
        data: okres(timePeriods[i].textContent),
        options: {
          title: {
            display: true,
            text: 'TRAFFIC',
            position: 'top'
          },
          legend: {
            display: false
          }
        }
    });
  }
}

chartChoice.addEventListener('click', (e) => {
  let choice = event.target;
  for ( let i=0; i<timePeriods.length; i++) {
    if ( choice == timePeriods[i] ) {
      choice.className = 'highlight';
      var chart = new Chart(ctx, {
          type: 'line',
          data: okres(timePeriods[i].textContent),
          options: {
            title: {
              display: true,
              text: 'TRAFFIC',
              position: 'top'
            },
            legend: {
              display: false
            }
          }
      });
    } else {
      timePeriods[i].className = '';
    }
  }
});

widget.addEventListener('click', () => {
  if ( wlacznik.className == 'circle' ) {
    wlacznik.className = 'circle2';
    widget.style.backgroundColor = 'green';
    widget.style.transition = '.5s ease-out .2s';
    localStorage.setItem('stan', 'on');
    let currentSetting = localStorage.getItem('stan');
  } else {
    wlacznik.className = 'circle';
    widget.style.backgroundColor = 'red';
    localStorage.setItem('stan', 'off');
    let currentSetting = localStorage.getItem('stan');
  }
});

widget2.addEventListener('click', () => {
  if ( wlacznik2.className == 'circle' ) {
    wlacznik2.className = 'circle2';
    widget2.style.backgroundColor = 'green';
    widget2.style.transition = '.5s ease-out .2s';
    localStorage.setItem('stan2', 'on');
    let currentSetting = localStorage.getItem('stan2');
  } else {
    wlacznik2.className = 'circle';
    widget2.style.backgroundColor = 'red';
    localStorage.setItem('stan2', 'off');
    let currentSetting = localStorage.getItem('stan2');
  }
});


if ( currentSetting == 'on' ) {
  wlacznik.className = 'circle2';
} else {
  wlacznik.className = 'circle';
}

if ( currentSetting2 == 'on' ) {
  wlacznik2.className = 'circle2';
} else {
  wlacznik2.className = 'circle';
}
