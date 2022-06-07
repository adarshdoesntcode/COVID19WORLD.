let confirmedData = [];
let activeData = [];
let recoveredData = [];
let deceasedData = [];
let ctxConfirmed = document.getElementById('confirmendChart').getContext('2d');
let ctxActive = document.getElementById('activeChart').getContext('2d');
let ctxRecovered = document.getElementById('recoveredChart').getContext('2d');
let ctxDeaths = document.getElementById('deathsChart').getContext('2d');

let yesterdayConfirmed = [];
let yesterdayActive = [];
let yesterdayRecovered = [];
let yesterdayDeaths = [];
let yesterdayDates =[];


function updateGraph(data)
  {
    for(let i = 0 ; i<=6; i++)
      {
        confirmedData[i] = data[i].Confirmed - data[i+1].Confirmed;
        activeData[i] = data[i].Active - data[i+1].Active;
        recoveredData[i] = data[i].Recovered - data[i+1].Recovered;
        deceasedData[i] = data[i].Deaths - data[i+1].Deaths;
        yesterdayConfirmed[i] = data[i].Confirmed;
        yesterdayActive[i] = data[i].Active;
        yesterdayRecovered[i] = data[i].Recovered;
        yesterdayDeaths[i] = data[i].Deaths;
        yesterdayDates[i] = data[i].Date;
      }
          

          confirmedData.reverse();
          activeData.reverse();
          recoveredData.reverse();
          deceasedData.reverse();
          drawConfirmed();
         // updateChart();
          drawActive();
          drawRecovered();
          drawDeaths();
    
      
     // console.log(confirmedData);
  }

//YESTERDAY TOGGLE


const yesterday = document.querySelector(".switch");
yesterday.addEventListener("click",function()
{
  
  if(yesterday.classList.contains("today"))
  {
    yesterday.className = "switch";
    
    document.querySelector(".confirmedTotal").innerHTML = yesterdayConfirmed[1].toLocaleString();
    document.querySelector(".activeTotal").innerHTML = yesterdayActive[1].toLocaleString();
    document.querySelector(".recoveredTotal").innerHTML = yesterdayRecovered[1].toLocaleString();
    document.querySelector(".deathsTotal").innerHTML = yesterdayDeaths[1].toLocaleString();
    
    
   document.querySelector(".lastUpdatedDate").innerHTML = formatDate((yesterdayDates[1].replace("T00:00:00Z","")));
    if(yesterdayConfirmed[1]>yesterdayConfirmed[2])
      {
        document.querySelector(".confirmedNew").innerHTML = `+ ${confirmedData[confirmedData.length-2].toLocaleString()}`;
      }
    else
      {
        document.querySelector(".confirmedNew").innerHTML = confirmedData[confirmedData.length-2].toLocaleString();
      }

      
    if(yesterdayActive[1]>yesterdayActive[2])
      {
        document.querySelector(".activeNew").innerHTML = `+ ${activeData[activeData.length-2].toLocaleString()}`;
      }
    else
      {
        document.querySelector(".activeNew").innerHTML = activeData[activeData.length-2].toLocaleString();
      }
      
    if(yesterdayRecovered[1]>yesterdayRecovered[2])
      {
        document.querySelector(".recoveredNew").innerHTML = `+ ${recoveredData[recoveredData.length-2].toLocaleString()}`;
      }
    else
      {
        document.querySelector(".recoveredNew").innerHTML = recoveredData[recoveredData.length-2].toLocaleString();
      }

    
    if(yesterdayDeaths[1]>yesterdayDeaths[2])
      {
        document.querySelector(".deathsNew").innerHTML = `+ ${deceasedData[deceasedData.length-2].toLocaleString()}`;
      }
    else
      {
        document.querySelector(".deathsNew").innerHTML = deceasedData[deceasedData.length-2].toLocaleString();
      }

  }
  else
    {
      yesterday.className = "switch today";
      document.querySelector(".confirmedTotal").innerHTML = yesterdayConfirmed[0].toLocaleString();
    document.querySelector(".activeTotal").innerHTML = yesterdayActive[0].toLocaleString();
    document.querySelector(".recoveredTotal").innerHTML = yesterdayRecovered[0].toLocaleString();
    document.querySelector(".deathsTotal").innerHTML = yesterdayDeaths[0].toLocaleString();
    
    document.querySelector(".lastUpdatedDate").innerHTML = formatDate(yesterdayDates[0].replace("T00:00:00Z",""));
    if(yesterdayConfirmed[0]>yesterdayConfirmed[1])
      {
        document.querySelector(".confirmedNew").innerHTML = `+ ${confirmedData[confirmedData.length-1].toLocaleString()}`;
      }
    else
      {
        document.querySelector(".confirmedNew").innerHTML = confirmedData[confirmedData.length-1].toLocaleString();
      }

      
    if(yesterdayActive[0] > yesterdayActive[1])
      {
        document.querySelector(".activeNew").innerHTML = `+ ${activeData[activeData.length-1].toLocaleString()}`;
      }
    else
      {
        document.querySelector(".activeNew").innerHTML = activeData[activeData.length-1].toLocaleString();
      }
      
    if(yesterdayRecovered[0]>yesterdayRecovered[1])
      {
        document.querySelector(".recoveredNew").innerHTML = `+ ${recoveredData[recoveredData.length-1].toLocaleString()}`;
      }
    else
      {
        document.querySelector(".recoveredNew").innerHTML = recoveredData[recoveredData.length-1].toLocaleString();
      }

    
    if(yesterdayDeaths[0]>yesterdayDeaths[1])
    {
      document.querySelector(".deathsNew").innerHTML = `+ ${deceasedData[deceasedData.length-1].toLocaleString()}`;
    }
  else
    {
      document.querySelector(".deathsNew").innerHTML = deceasedData[deceasedData.length-1].toLocaleString();
    }

    }
});

let confirmedLine;
function drawConfirmed()
  {
   if(confirmedLine)
    {
      confirmedLine.destroy();
    }
    
   
    confirmedLine = new Chart(ctxConfirmed, {
  
    type: 'line',
    data: {
        labels: ['', '', '', '', '', '','Today'],
        datasets: [{
            tension: 0.6,
            data: confirmedData,
            backgroundColor: '#ff073a',
            borderColor: '#ff073a',
            borderWidth: 2            
        }]
    },
    options: {
     
      plugins:{
        legend:
        {
          display:false
        }
      },
      elements: {
        point:{
            radius: [0,0,0,0,0,0,3]
        }
    },
      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false,
          }
        },
        y: {
          grid: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false,
          },
          beginAtZero: true
        }
      }
    }
    
});

    
  }
  
  
  let activeLine;
function drawActive()
{
    if(activeLine)
      {
        activeLine.destroy();
      }
  
    activeLine = new Chart(ctxActive, {
    type: 'line',
    data: {
        labels: [ '', '', '', '', '', '','Today'],
        datasets: [{
            tension: 0.6,
            data: activeData,
            //[49, 67, 56, 43, 60, 67 ,70],
            backgroundColor: '#007bff',
            borderColor: '#007bff',
            borderWidth: 2            
        }]
    },
    options: {
      plugins:{
        legend:
        {
          display:false
        }
      },
      elements: {
        point:{
            radius: [0,0,0,0,0,0,3]
        }
    },
      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false,
          }
        },
        y: {
          grid: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false,
          },
          beginAtZero: true
        }
      }
    }

});

}
  

let recoveredLine;
function drawRecovered()
  {
    if(recoveredLine)
      {
        recoveredLine.destroy();
      }
    
 
    recoveredLine = new Chart(ctxRecovered, {
    type: 'line',
    data: {
        labels: [ '', '', '', '', '', '','Today'],
        datasets: [{
            tension: 0.6,
            data:recoveredData,
            //[95, 117, 126, 103, 160, 97 ,100],
            backgroundColor: '#28a745',
            borderColor: '#28a745',
            borderWidth: 2            
        }]
    },
    options: {
      plugins:{
        legend:
        {
          display:false
        }
      },
      elements: {
        point:{
            radius: [0,0,0,0,0,0,3]
        }
    },
      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false,
          }
        },
        y: {
          grid: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false,
          },
          beginAtZero: true
        }
      }
    }

});



  }
  let deathsLine;
function drawDeaths()
  {
    if(deathsLine)
      {
        deathsLine.destroy();
      }
    
   
    deathsLine = new Chart(ctxDeaths, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', '','Today'],
        datasets: [{
            tension: 0.6,
            data: deceasedData,
            //[195, 217, 126, 303, 460, 297 ,199],
            backgroundColor: '#6c757d',
            borderColor: '#6c757d',
            borderWidth: 2            
        }]
    },
    options: {
      
      plugins:{
        legend:
        {
          display:false
        }
      },
      elements: {
        point:{
            radius: [0,0,0,0,0,0,3]
        }
    },
      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false,
          }
        },
        y: {
          grid: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false,
          },
          beginAtZero: true
        }
      }
    }

});



  }
