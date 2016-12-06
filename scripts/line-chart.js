$(function() {
    $(document).ready(function() {
        // Build the second chart
        Highcharts.chart('sharable-container', {
            title: {
                text: 'How widely should these types of data be shared?',
                x: -20 //center
            },
            subtitle: {
                text: '1 = this data should be shared widely without restrictions',
                x: -20
            },
            xAxis: {
                categories: ['1', '2', '3', '4', '5']
            },
            yAxis: {
                title: {
                    text: 'Number of responses'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                // valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Location of working and non-working streetlights',
                data: [33, 3, 0, 0, 2]
            }, {
                name: 'Number and location of police brutality complaints',
                data: [19, 9, 8, 2, 0]
            }, {
                name: 'Location of clusters of highly communicable diseases',
                data: [7, 14, 11, 6, 0]
            }, {
                name: 'Location of houses entering foreclosure',
                data: [11, 10, 13, 3, 0]
            }, {
                name: 'Unedited police car dashboard camera footage',
                data: [18, 14, 5, 0, 1]
            }, {
                name: 'Types of food purchased with SNAP benefits',
                data: [7, 11, 4, 1, 15]
            }, {
                name: "Mayor's travel budget and schedule",
                data: [28, 8, 1, 0, 1]
            }, {
                name: 'Names of anonymous informants to Child Protective Services',
                data: [0, 6, 6, 9, 17]
            }, {
                name: 'Names of donors to political candidates and campaigns',
                data: [25, 6, 5, 0, 1]
            }, {
                name: 'Number of utility shut-offs at the block level',
                data: [12, 11, 12, 2, 1]
            }, {
                name: 'Number of utility shut-offs status at address (house or building) level',
                data: [4, 10, 17, 5, 2]
            }, {
                name: 'Location of stores that accept EBT cards',
                date: [30, 6, 1, 0, 1]
            }]
        });
    });
});
