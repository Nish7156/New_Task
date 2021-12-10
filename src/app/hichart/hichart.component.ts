import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-hichart',
  templateUrl: './hichart.component.html',
  styleUrls: ['./hichart.component.scss']
})
export class HichartComponent implements OnInit {
  highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    title: {
      text: 'Solar Employment Growth by Sector, 2010-2016'
    },
    subtitle: {
      text: 'Source: thesolarfoundation.com'
    },
    yAxis: {
      title: {
        text: 'Number of Employees'
      }
    },
    xAxis: {
      accessibility: {
        rangeDescription: 'Range: 2010 to 2017'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },
    
     series: [{
      name: 'Installation',
      data: [12, 8, 43, 35, 20, 90, 100, 110],
      type: 'line'
    }, {
      name: 'Manufacturing',
      data: [20, 30, 240, 50, 1260, 70, 80, 90],
      type: 'line'
    }, {
      name: 'Sales & Distribution',
      data: [30, 40, 50, 610, 70, 80, 90, 1020],
      type: 'line'
    }, {
      name: 'Project Development',
      data: [40, 50, 602, 70, 801, 90, 100, 110],
      type: 'line'
    }, {
      name: 'Other',
      data: [50, 60, 70, 850, 90, 150, 110, 120],
      type: 'line'
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
