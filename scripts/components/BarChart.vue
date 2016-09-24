<template>
  <div class="bar-chart">
    <canvas ref="canvas" width="700" height="300"></canvas>
  </div>
</template>


<script>
import Chart from 'chart.js/src/chart.js'

export default {
  name: 'BarChart',
  props: ['responseTimes'],

  mounted() {
    var labels = [];
    var data = [];

    for (var i = 0; i < this.responseTimes.length; i++) {
        var date = new Date(this.responseTimes[i].datetime);
        labels.unshift(date.getHours() + ':' + date.getMinutes());
        data.unshift(this.responseTimes[i].value);
    }

    var myChart = new Chart(this.$refs.canvas.getContext('2d'), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Response Time',
                data: data,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
            tooltips: {
              callbacks: {
        				title: function() {
        					return '';
        				},
        				label: function(tooltipItem) {
        					return tooltipItem.yLabel + ' milliseconds';
        				}
        			}
          }
        }
    });
  }
}
</script>
