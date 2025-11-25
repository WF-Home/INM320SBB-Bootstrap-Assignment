// Chart JS Code

dataFetcher().then(
    function(data) { 
      new Chart("Chart", {
        type: "line",
        data: {
          labels: data.chartData.xValues,
          datasets: [{
            data: data.chartData.today.values,
            borderColor: "#3751FF",
            backgroundColor: "#3752ff0f",
            fill: true,
            borderWidth: 2,
            pointRadius: 0
          },
          {
            data: data.chartData.yesterday.values,
            borderColor: "#DFE0EB",
            fill: false,
            borderWidth: 2,
            pointRadius: 0
          }]
        },
        options: {
          legend: {
            display: false
          }
        }
      });
    }
)