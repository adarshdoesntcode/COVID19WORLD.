let allconfirmedData = [];
let allactiveData = [];
let allrecoveredData = [];
let alldeceasedData = [];
let dates = [];
let ctx1 = document.getElementById('bigConfirmedGraph').getContext('2d');
let datas;

let toggle2mon = document.querySelector(".two-monthlbl");
let toggle6mon = document.querySelector(".six-monthlbl");
let toggle1yr = document.querySelector(".one-yearlbl");

function giveData(data)
    {
        datas = data;
        giveDataDashboard(data);
    }

toggle2mon.addEventListener("click", function(){
    allconfirmedData = [];
    allactiveData = [];
    allrecoveredData = [];
    alldeceasedData = [];
    dates = [];
    updateBigGraphTwoMon(datas);
    document.querySelector(".switchGr").className = "switchGr twoMon"
});
toggle6mon.addEventListener("click", function(){
    allconfirmedData = [];
    allactiveData = [];
    allrecoveredData = [];
    alldeceasedData = [];
    dates = [];
    updateBigGraphSixMon(datas);
    document.querySelector(".switchGr").className = "switchGr sixMon"
});
toggle1yr.addEventListener("click", function(){
    allconfirmedData = [];
    allactiveData = [];
    allrecoveredData = [];
    alldeceasedData = [];
    dates = [];
    updateBigGraphOneYr(datas);
    document.querySelector(".switchGr").className = "switchGr oneYear"
});
function updateBigGraphTwoMon(data)
    {
        allconfirmedData = [];
        allactiveData = [];
        allrecoveredData = [];
        alldeceasedData = [];
        dates = [];
        for(let i = 0 ; i<= 59 ; i++)
        {
            dates[i] = formatDate(data[i].Date.replace("T00:00:00Z",""));
            allconfirmedData[i] = data[i].Confirmed;
            allactiveData[i] = data[i].Active;
            allrecoveredData[i] = data[i].Recovered;
            alldeceasedData[i] = data[i].Deaths;
        }
        dates.reverse();
        allconfirmedData.reverse();
        allactiveData.reverse();
        allrecoveredData.reverse();
        alldeceasedData.reverse();
        populateBigGraph();
    }
    function updateBigGraphSixMon(data)
    {
        for(let i = 0 ; i<= 179 ; i++)
        {
            dates[i] = formatDate(data[i].Date.replace("T00:00:00Z",""));
            allconfirmedData[i] = data[i].Confirmed;
            allactiveData[i] = data[i].Active;
            allrecoveredData[i] = data[i].Recovered;
            alldeceasedData[i] = data[i].Deaths;
        }
        dates.reverse();
        allconfirmedData.reverse();
        allactiveData.reverse();
        allrecoveredData.reverse();
        alldeceasedData.reverse();
        populateBigGraph();
    }

    function updateBigGraphOneYr(data)
    {
        for(let i = 0 ; i<= 364 ; i++)
        {
            dates[i] = formatDate(data[i].Date.replace("T00:00:00Z",""));
            allconfirmedData[i] = data[i].Confirmed;
            allactiveData[i] = data[i].Active;
            allrecoveredData[i] = data[i].Recovered;
            alldeceasedData[i] = data[i].Deaths;
        }
        dates.reverse();
        allconfirmedData.reverse();
        allactiveData.reverse();
        allrecoveredData.reverse();
        alldeceasedData.reverse();
        populateBigGraph();
    }


let myChart;
function populateBigGraph()
{
    if(myChart)
        {
            myChart.destroy();
        }
    myChart = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: 'Confirmed',
                data: allconfirmedData,
                backgroundColor: '#ff07393d',
                borderColor: '#ff073a',
                borderWidth: 1,
                tension : 0.4,
                borderWidth : 1.5
                
            },
            {
                label: 'Active',
                data: allactiveData,
                backgroundColor: '#007bff31',
                borderColor: '#007bff',
                borderWidth: 1,
                tension : 0.4,
                borderWidth : 1.5
                
            },
            {
                label: 'Recovered',
                data: allrecoveredData,
                backgroundColor: '#28a7463a',
                borderColor: '#28a745',
                borderWidth: 1,
                tension : 0.4,
                borderWidth : 1.5
                
            },
            {
                label: 'Deceased',
                data: alldeceasedData,
                backgroundColor: '#6c757d3f',
                borderColor: '#6c757d',
                borderWidth: 1,
                tension : 0.4,
                borderWidth : 1.5
                
            }]
        },
        options: {
            plugins:
            {
                title:
                {
                    display:true,
                    position: "bottom",
                    text: "Dates"
                }
               

            },
        
            scales: {
                y: {
                    beginAtZero: true
                },
                x:
                {
                    grid: {
                        display: false
                      },
                      ticks: {
                        display: false
                      }
                }
            }
        }
    });
    
}





