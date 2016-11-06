$(function () {
    Highcharts.chart('chart-graph', {
        title: false,
        selectionMarkerFill: false,
        credits: false,
        chart: {
            backgroundColor: '#ebebeb',
            plotBackgroundColor: '#fff',
            plotBorderColor: '#fff'
        },
        xAxis: {
            tickColor: '#ebebeb',
            gridLineColor: '#ebebeb',
            categories: ['29.01.2016', '29.02.2016', '29.03.2016', '29.04.2016', '29.05.2016', '29.06.2016', '29.07.2016',
                '29.08.2016', '29.09.2016', '29.10.2016', '29.11.2016', '29.12.2016'],
            labels: {
                autoRotation: false
            }
        },
        yAxis: {
            // visible: false
            title: '',
        },
        tooltip: false,
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [{
            name: 'Вес',
            data: [70, 65, 65, 65, 62, 65, 62, 65, 63, 63, 69, 66]
        }, {
            name: 'Объем груди',
            data: [90, 98, 97, 93, 90, 90, 98, 91, 91, 91, 96, 95]
        }, {
            name: 'Объем талии',
            data: [80, 86, 85, 84, 85, 80, 86, 89, 83, 90, 89, 100]
        }, {
            name: 'Объем бедер',
            data: [39, 42, 57, 85, 89, 72, 70, 66, 42, 73, 66, 48]
        }]
    });
});