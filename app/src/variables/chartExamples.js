import { chartColors } from "../assets/charts.js";
// Example 1 of Chart inside src/views/Index.js (Sales value - Card)
export const chartExample1 = {
  options: {
    scales: {
      yAxes: [
        {
          gridLines: {
            color: chartColors.gray[900],
            zeroLineColor: chartColors.gray[900]
          },
          ticks: {
            callback: function (value) {
              if (!(value % 10)) {
                return "$" + value + "k";
              }
            }
          }
        }
      ]
    },
    tooltips: {
      callbacks: {
        label: function (item, data) {
          var label = data.datasets[item.datasetIndex].label || "";
          var yLabel = item.yLabel;
          var content = "";

          if (data.datasets.length > 1) {
            content += label;
          }

          content += "$" + yLabel + "k";
          return content;
        }
      }
    }
  },
  glob: [0, 10, 15, 20, 25, 30, 35, 50, 55],
  data1: (canvas, arr) => {
    let glob = chartExample1.glob;
    let ret = {
      labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Performance",
          data: glob
        }
      ]
    };
    console.log(glob);
    return ret;
  },
  data2: canvas => {
    return {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      datasets: [
        {
          label: "Performance",
          data: [0, 25, 15, 30, 20, 40, 30, 35]
        }
      ]
    };
  }
};

// Example 2 of Chart inside src/views/Index.js (Total orders - Card)
export const chartExample2 = {
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            callback: function (value) {
              if (!(value % 10)) {
                //return '$' + value + 'k'
                return value;
              }
            }
          }
        }
      ]
    },
    tooltips: {
      callbacks: {
        label: function (item, data) {
          var label = data.datasets[item.datasetIndex].label || "";
          var yLabel = item.yLabel;
          var content = "";
          if (data.datasets.length > 1) {
            content += label;
          }
          content += yLabel;
          return content;
        }
      }
    }
  },
  data: {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Sales",
        data: [25, 20, 30, 22, 17, 29],
        maxBarThickness: 10
      }
    ]
  }
};
