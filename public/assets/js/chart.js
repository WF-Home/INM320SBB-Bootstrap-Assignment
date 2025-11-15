const xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("Chart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "#3751FF",
      backgroundColor: "#3752ff0f",
      fill: true,
      borderWidth: 2,
      pointRadius: 0
    },
    {
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "#DFE0EB",
      fill: false,
      borderWidth: 2,
      pointRadius: 0
    }]
  },
  options: {
    legend: {
      display: true, 
      align: 'end'}
  }
});