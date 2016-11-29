$(function () {
    $(document).ready(function () {
        // Build the first chart
        Highcharts.chart('tactic-container', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Which tactic do you think would be MOST effective at making Detroiters aware of the portal and getting them to use it?'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Tactic',
                colorByPoint: true,
                data: [{
                    name: 'Free 101 trainings for the general public at libraries or community centers',
                    y: 37.8
                }, {
                    name: 'Advanced trainings about how to use and analyze the data for community leaders',
                    y: 21.6
                }, {
                    name: 'Flyer in the mail',
                    y: 2.7
                }, {
                    name: 'Radio PSA',
                    y: 5.4
                }, {
                    name: 'Other, unspecified',
                    y: 32.4
                }]
            }]
        });
    });
});