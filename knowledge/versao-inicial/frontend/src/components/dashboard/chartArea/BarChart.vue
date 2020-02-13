<template>
    <apexchartConsumption2 type="bar" height="200" :options="chartOptions" :series="series"/>
</template>

<script>
import ApexCharts from 'vue-apexcharts'
export default {
    name: 'BarChart',
    components: {
        apexchartConsumption2: ApexCharts
    },
    data: function () {
        return {
            series: [{
            name: 'Galpão',
            data: [44, 55, 41, 37, 22]
          }, {
            name: 'Sala de Man.',
            data: [53, 32, 33, 52, 13]
          }, {
            name: 'Controle',
            data: [12, 17, 11, 9, 15]
          }, {
            name: 'Principal',
            data: [9, 7, 5, 8, 6]
          },],
          chartOptions: {
            chart: {
              type: 'bar',
              height: 200,
              stacked: true,
              toolbar: {
                show: false
              }
            },
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            stroke: {
              width: 1,
              colors: ['#fff']
            },
            title: {
                show: false,
                text: ''
            },
            xaxis: {
              categories: ["05:00 - 09:59", "10:00 - 14:59", "15:00 - 19:59", "20:00 - 04:59" ],
              labels: {
                formatter: function (val) {
                  return val + "kW"
                }
              },
            },
            yaxis: {
              title: {
                text: undefined
              },
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return val + "kW"
                }
              }
            },
            fill: {
              opacity: 1,

            },
            legend: {
              position: 'top',
              horizontalAlign: 'left',
              offsetX: 40
            }
          },
        }
    }
}
</script>

<style>

</style>