const configGrafico = {
  type: 'bar',
  data: {
    labels: ['Janeiro', 'Fevereiro', 'Março'],
    datasets: [
      {
        label: 'Vendas',
        data: [10, 20, 30],
        backgroundColor: ['red', 'blue', 'green']
      }
    ]
  },
  options: {
    responsive: true
  }
};


const xValues = [2018,2019,2020,2021,2022,2023,2024];

new Chart(document.getElementById("chart-lines"), {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
        borderColor: "red",
        fill: false,
      },
      {
        data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
        borderColor: "green",
        fill: false
      },
      {
        data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
        borderColor: "blue",
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }
});
