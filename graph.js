
//var values = chain3.features[0].properties.rank;

var data = []; 
var labels = [];
for(let i = 0; i <22; i++) { 
    data.push(([piechart[i].chain.num]));
    labels.push([piechart[i].chain.Name]);  

}; 
const ctx = document.getElementById('canvas');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels ,
      datasets: [{
        label: ' تعداد کلی شعب بانک ها در نواحی ژئودموگرافیک 1 تا 6 ',
        data: data,
        backgroundColor:"#ff335e",
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });



  var data2 = []; 
  var labels2 = [];
  for(let i = 0; i <5; i++) { 
      data2.push([piecharte[i].chain.num]);
      labels2.push([piecharte[i].chain.Name]);  
  
  }; 

  const ctx8 = document.getElementById('canvas2');
  
    new Chart(ctx8, {
      type: 'doughnut',
      data: {
        labels: labels2 ,
        datasets: [{
          label: '   نمودار سهمی بانک ها در ناحیه ژئودموگرافیک 3،4،5   ',
          data: data2,
          backgroundColor:[
            "#FFFF00",
            " #0041C2",
            "#ff8397",
            "#f38b4a",
            "#6970d5",
            "#00FF00",
            "#56d798",
            "#56d798",
            "#56d798",
            "#56d798",
            "#56d798",
            "#56d798",
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
          

    var data3 = []; 
    var labels3 = [];
    for(let i = 0; i <18; i++) { 
        data3.push([piechart1[i].chain.num]);
        labels3.push([piechart1[i].chain.Name]);  
    
    }; 
    const ctx3 = document.getElementById('canvas3');
    
    new Chart(ctx3, {
        type: 'line',
        data: {
          labels: labels3 ,
          datasets: [{
            label: 'تعداد فروشگاه ها ',
            data: [1,1,2,1,1,1,2,2,2,1,2,1,1,1,2,2,2,2],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });



