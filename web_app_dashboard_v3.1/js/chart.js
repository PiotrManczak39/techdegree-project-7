const alertButton = document.querySelector('.close-button');
const alertBox = document.querySelector('.alert-box');
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("sendButton");


alertButton.addEventListener('click', () => {
    alertBox.style.display = 'none';
});

send.addEventListener('click', () => {
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
  } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
  } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
  } else {
    alert(`Message successfully sent to: ${user.value}`);
  }
});

//main chart
var ctx = document.getElementById('mainChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    data: {
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
    },
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

//bar chart

var barChart = document.getElementById('barChart').getContext('2d');
var chart2 = new Chart(barChart, {
    // The type of chart we want to create
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
        display: false
      }
    }
});
