<template>
<div class = "seven-days-content">
    <div class="widget-title-area">
        <WidgetsTitle 
            icon_2="fa fa-bolt" 
            main_2="Últimos 7 Dias de Consumo" 
            sub_2="Por Instalação Completa." 
            weather="fa fa-folder-open"
            icon_3="fa fa-angle-down"
        />
    </div>
    <div class="widget-content-area-lastdays">
        <b-col>
        <div class="arrow-arrow">
            <div class="total-energy-content">
                <h1> Energia Total </h1>
                <h2> 440MWh </h2>
            </div>
            <div class="vs-previous-period-content">
                <h1> Vs Período Anterior</h1>
                <h2> <i class="fa fa-angle-down" style="color: red; font-weight: 700;"></i> -10% </h2>
            </div>
            <div class="energy-cost-content">
                <h1> Custo de Energia </h1>
                <h2> R$64,7k</h2>
            </div>
            <div class="next-content-energy">
                <div class="next-content-circle-energy" style="color: rgba(0, 129, 143, 0.7);">
                    <i class="fa fa-angle-right" style="color: rgba(0, 129, 143, 0.7);"></i>
                </div>
            </div>
        </div>
        <div class="chart_line">
            <apexchartLine type="area" width="100%" height="180" :options="chartOptions" :series="series"></apexchartLine>
        </div>    

        </b-col>
    </div>

</div>
</template>

<script>
import WidgetsTitle from './titleArea/WidgetsTitle'
import ApexCharts from 'vue-apexcharts'
import LastWidget from './chartArea/LastWidget'
import ArrowNext from './footerArea/ArrowNext'

export default {
    name: 'SevenDays',
        components: {
        WidgetsTitle,
        apexchartLine: ApexCharts,
        LastWidget,
        ArrowNext
    },
    data: function () {
        return {
            series: [{
              name: "Desktops",
              data: [10, 21, 135, 251, 249, 262, 169, 191, 148]
          }],
          chartOptions: {
            chart: {
                toolbar: {
                    show: false
                },
                sparkline: {
                enabled: false },
   
              type: 'line',
              height: '100%',
              width: '100%',
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            title: {
              text: '',
              align: 'left'
            },
            grid: {
                show: true,
                padding: {
                    left: 0,
                        right: 0
                },
                borderColor: '#90A4AE',
                strokeDashArray: 0,
                position: 'back',
                
                xaxis: {
                    lines: {
                        show: false
                    }
                },   

                yaxis: {
                    lines: {
                        show: false
                    }
                },  

                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },

            },
            xaxis: {
            labels: {
                show: true,
            },
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            },
            yaxis: {
                labels: {
                show: false,
            },
                title: {
                text: 'Energy (kW)',
                style: {
                    fontSize:  '14px',
                    color:  '#000000'
                    },                
                }
            }
        }
        }
    }    

}
</script>

<style>
    .seven-days-content{
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
    }

    .chart_line{
        width: 99%;
        height: 50%;
        padding: 5px;
    }

    .arrow-arrow {
        width: 99%;
        height: 30%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .total-energy-content {
        width: 23%;
        height: 100%;
        padding: 5px;
        
        border-radius: 5px;
        box-shadow: 1px 1px 1px 1px rgb(0, 129, 143, .5);
    }

    .vs-previous-period-content {
        width: 23%;
        height: 100%;
        padding: 5px;

        border-radius: 5px;
        box-shadow: 1px 1px 1px 1px rgb(0, 129, 143, .5);
    }

    .energy-cost-content {
        width: 23%;
        height: 100%;
        padding: 5px;

        border-radius: 5px;
        box-shadow: 1px 1px 1px 1px rgb(0, 129, 143, .5);
    }

    .next-content-energy {
        width: 8%;
        height: 100%;
        padding: 5px;
    }

    .next-content-circle-energy {
        border: 1px solid;
        border-radius: 100%;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .next-content-circle-energy i{
        font-size: 2.5vw;
        font-weight: 900;
        

    }

    .arrow-arrow h1 {
        margin-left: 10px;
        font-size: .8vw;
        font-weight: 600;
    }

    .arrow-arrow h2 {
        margin-left: 10px;
        font-size: 1.2vw;
        font-weight: 900;
    }
    
    .next-content-energy .next-content-circle-energy:hover{
        background-image:  linear-gradient(to right, rgba(0, 129, 143, .3), rgba(0, 129, 143, .1) );
    }

    .next-content-energy:hover > i{
        transform: scale(1.3);
        transition: .5s;
    }
    
   
</style>
