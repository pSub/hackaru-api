c3.generate({
  bindto: '#bar-chart',
  data: {
    type: 'bar',
    columns: gon.bar_chart_data,
    colors: gon.colors
  },
  legend: {
    show: false
  },
  axis: {
    x: {
      type: 'category',
      categories: gon.labels
    },
    y: {
      tick: {
        format: d => (d % 1 === 0 ? `${d}h` : '')
      }
    }
  }
});

c3.generate({
  bindto: '#donut-chart',
  data: {
    type: 'donut',
    columns: gon.totals,
    colors: gon.colors
  },
  donut: {
    padAngle: 0.015,
    label: {
      show: false
    }
  },
  legend: {
    show: false
  }
});
