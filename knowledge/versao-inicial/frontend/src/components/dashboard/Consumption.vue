<template>
<div class="consumption-content">
    <div class="widget-title-area">
        <WidgetsTitle 
            icon_2="fa fa-bolt" 
            main_2="Consumo em Tempo Real" 
            sub_2="Por categoria: " 
            weather="fa fa-bar-chart-o"
            icon_3="fa fa-angle-down"
            
        />        
    </div>
    <div class="widget-content-area-realtime">
      
        <div class="chart-bar-radial-content">
            
            <div class="chart-bar-content">
                <BarChart />
            </div>

            <div class="chart-radial-content">
                <b-col>
                  <h3 style="text-align: center; font-size: .8vw; font-weight: 700;"> - Volume - </h3>
                  <div>
                    <apexchart type="bar" height="25" :options="chartOptions2" :series="series2"></apexchart>
                  </div> 
                  <p></p>
                  <h3 style="text-align: center; font-size: .8vw; font-weight: 700;"> - Diário - </h3>
                  <div>
                    <apexchart type="line" height="25" :options="chartOptions1" :series="series1"></apexchart>
                  </div>
                  <hr>
                  <h3 style="text-align: center; font-size: .8vw; font-weight: 700;"> Custo Total: </h3>
                  <h3 style="text-align: center; font-size: 1.1vw; font-weight: 700;"> 1299,32 R$/h </h3>
                </b-col>
            </div>
        </div>

    </div>
    <div class="widget-footer-area">

    </div>
</div>
</template>

<script>
import WidgetsTitle from './titleArea/WidgetsTitle'
import RadialChart from './chartArea/RadialChart'
import BarChart from './chartArea/BarChart'
import ApexCharts from 'vue-apexcharts'
export default {
    name: 'Consumption',
    components: {
        WidgetsTitle,
        RadialChart,
        BarChart,
        apexchart: ApexCharts
    },
    data: function () {
        return {
            series1: [{
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
          }],
          chartOptions1: {
            chart: {
              type: 'line',
              width: 100,
              height: 35,
              sparkline: {
                enabled: true
              }
            },
            tooltip: {
              fixed: {
                enabled: false
              },
              x: {
                show: false
              },
              y: {
                title: {
                  /*
                  formatter: function (seriesName) {
                    return ''
                  }*/
                }
              },
              marker: {
                show: false
              }
            }
          },       

        series2: [{
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
          }],
          chartOptions2: {
            chart: {
              type: 'bar',
              width: 100,
              height: 35,
              sparkline: {
                enabled: true
              }
            },
            plotOptions: {
              bar: {
                columnWidth: '80%'
              }
            },
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            xaxis: {
              crosshairs: {
                width: 1
              },
            },
            tooltip: {
              fixed: {
                enabled: false
              },
              x: {
                show: false
              },
              y: {
                title: {/*
                  formatter: function (seriesName) {
                    return ''
                  }*/
                }
              },
              marker: {
                show: false
              }
            }
          },   
        }
    }
    
}
</script>

<style>
    .consumption-content{
        width: 100%;
        height: 100%;

    }

    .chart-bar-radial-content{
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: row;

    }

    .chart-bar-content{
        width: 60%;
        height: 100%;
    }

    .chart-radial-content{
        width: 40%;
        height: 100%;
        margin: 5px;
        border-radius: 5px;
        box-shadow: 1px 1px 1px 1px rgb(0, 129, 143, .5); 
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .value-real-kw{
        width: 100%;
        height: 45%;
        

        border: 1px solid red;
    }

    .value-real-kwh {
        width: 100%;
        height: 45%;

        border: 1px solid purple;
    }

    th {
        font-size: .7em;
    }

    td {
        font-size: .6rem;
    }

    #font-different{
        font-size: 1rem;
    }

    #font-different2{
        font-size: .9rem;
        font-weight: 900;
        color: rgb(95, 88, 88);
    }
</style>