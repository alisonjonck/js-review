// Load google charts
google.charts.load('current', { 'packages': ['corechart','bar'] });

google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Produtos', 'Compras '],
    ['TV', 8],
    ['Blu-Ray', 2],
    ['iPads', 4],
    ['Speakers', 2],
    ['Video Games', 8]
  ]);

  // Optional; add a title and set the width and height of the chart
  var options = { 'title': 'Compras por dia', 'width': 550, 'height': 300 };
  var options2 = { 'title': 'Compras por mês', 'width': 550, 'height': 300 };
  var options3 = { 'title': 'Compras por trimestre', 'width': 550, 'height': 300 };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('chart-container'));
  chart.draw(data, options);
  var chart2 = new google.visualization.PieChart(document.getElementById('chart2-container'));
  chart2.draw(data, options2);
  var chart3 = new google.charts.Bar(document.getElementById('chart3-container'));

  chart3.draw(data, google.charts.Bar.convertOptions(options3));
}

