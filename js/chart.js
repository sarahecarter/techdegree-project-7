/////////////// Chart Widgets ////////////////

/////// Line Graph ////////
const trafficCanvas = document.getElementById('traffic-chart');

// Data for traffic chart //
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 2,
        borderColor: 'rgb(80, 83, 175)',
        lineTension: 0, 
        pointBorderColor: 'rgb(80, 83, 175)',
        pointBackgroundColor: 'rgb(255, 255, 255)',
        pointRadius: 7,
        pointHoverRadius: 15,
        pointHoverBackgroundColor: 'rgb(255, 255, 255)',
    }]
};

// Chart Options //
let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};

// Creating the chart //
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});



/////// Bar Graph ////////
const dailyCanvas = document.getElementById('daily-chart');

// Data for daily chart //
let dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [85, 120, 216, 89, 96, 200, 150],
        backgroundColor: 'rgb(80, 83, 175)',
        borderWidth: 1
    }]
};

// Chart Options //
let dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
}

// Creating the chart //
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});



/////// Pie Chart ////////
const mobileCanvas = document.getElementById('mobile-chart');

// Data for mobile chart //
let mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        backgroundColor: [
            'rgb(80, 83, 175)',
            'rgb(115, 191, 191)',
            'rgb(115, 191, 134)'
        ]
    }]
};

// Chart Options //
let mobileOptions = {
    legend : {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
}

// Creating the chart //
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});