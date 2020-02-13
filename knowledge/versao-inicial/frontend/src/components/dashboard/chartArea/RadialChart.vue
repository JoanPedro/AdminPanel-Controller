<template>
<div>
    <apexchartConsumption type="radar" height="200" :options="chartOptions" :series="series" />
</div>
</template>

<script>
import ApexCharts from 'vue-apexcharts'
export default {
    name: 'RadialChart',
    components: {
        apexchartConsumption: ApexCharts
    },
    data: function (){
        return {
            series: [{
            name: 'Galpão',
            data: [80, 50, 30, 40, 100, 20],
          }, {
            name: 'Sala de Man.',
            data: [20, 30, 40, 80, 20, 80],
          }, {
            name: 'Principal',
            data: [44, 76, 78, 13, 43, 70],
          }, {
            name: 'Controle',
            data: [24, 86, 78, 33, 63, 10],
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'radar',
              dropShadow: {
                enabled: true,
                blur: 1,
                left: 1,
                top: 1
              },
              toolbar: {
                  show: false
              }
            },
            title: {
              text: ''
            },
            stroke: {
              width: 0
            },
            fill: {
              opacity: 0.4,
            },
            markers: {
              size: 0
            },
            xaxis: {
              categories: ["00:00", "04:00", "08:00", "12:00", "16:00","20:00" ]
            }
          },
                    
        }
    }
}
</script>

<style>

</style>