
// GET IP

fetch("https://ipapi.co/json/")
.then(response => response.json())
.then(result => 
  {
    getCountryData(result.country);
  })
.catch(error => {
  console.log('error', error)});


// GET COUNTRY CODE
// getCountry(geoplugin_request());

function getCountry(ip)
  {
    fetch(`https://www.geoplugin.net/json.gp?ip=${ip}`)
    .then(response => response.json())
    .then(result => 
      {
        
        getCountryData(result.geoplugin_countryCode);
      })
    .catch(error => {
      console.log('error', error)});
 }

    

// getCountryData(geoplugin_countryCode());

// GET COUNTRY DATA
function getCountryData(country)
  {
    fetch(`https://api.covid19api.com/total/country/${country}`)
    .then(response =>response.json())
    .then(result => 
      {
        document.querySelector(".countryName").innerHTML = result[0].Country;
        updateVaccinated(country);
        document.querySelector(".lastUpdatedDate").innerHTML = formatDate((result[result.length - 1].Date.replace("T00:00:00Z","")));
        const revData = result.reverse();
        updateConfirmed(revData);
        updateActive(revData);
        updateRecovered(revData);
        updateDeceased(revData);
        updateGraph(revData);
        updateBigGraphTwoMon(revData);
        giveData(revData);
      
      })
    .catch(error => {
      alert("API Server error. Please Refresh");
      console.log('error', error)});
  }

const input = document.querySelector(".searchBox");

// input.addEventListener("keypress",function(e)
// {
//   if(e.key === "Enter")
//   {   
//     document.querySelector(".country-list").classList.add("hide");
//       showLoading();
//       getCountryData(input.value.toUpperCase());
//       document.querySelector(".switch").className="switch today";
//       document.querySelector(".switchGr").className="switchGr twoMon";
          
//   }
  
// })

function showLoading()
  {
    document.querySelector(".countryName").innerHTML = "Loading..";
  }

function updateConfirmed(data)
  {
    
    document.querySelector(".confirmedTotal").innerHTML = data[0].Confirmed.toLocaleString();
    if(data[0].Confirmed - data[1].Confirmed > 0)
      {
        document.querySelector(".confirmedNew").innerHTML = `+ ${(data[0].Confirmed-data[1].Confirmed).toLocaleString()}`;
      }
      else
      {
        document.querySelector(".confirmedNew").innerHTML = (data[0].Confirmed-data[1].Confirmed).toLocaleString();
      }
    
  }

  function updateActive(data)
  {
    
    document.querySelector(".activeTotal").innerHTML = data[0].Active.toLocaleString();
    if(data[0].Active - data[1].Active > 0)
      {
        document.querySelector(".activeNew").innerHTML = `+ ${(data[0].Active-data[1].Active).toLocaleString()}`;
      }
      else
      {
        document.querySelector(".activeNew").innerHTML = (data[0].Active-data[1].Active).toLocaleString();
      }
  }

  function updateRecovered(data)
  {
    
    document.querySelector(".recoveredTotal").innerHTML = data[0].Recovered.toLocaleString();
    if(data[0].Recovered - data[1].Recovered > 0)
      {
        document.querySelector(".recoveredNew").innerHTML = `+ ${(data[0].Recovered-data[1].Recovered).toLocaleString()}`;
      }
      else
      {
        document.querySelector(".recoveredNew").innerHTML = (data[0].Recovered-data[1].Recovered).toLocaleString();
      }
    
  }

  function updateDeceased(data)
  {
    
    document.querySelector(".deathsTotal").innerHTML = data[0].Deaths.toLocaleString();
    if(data[0].Deaths - data[1].Deaths > 0)
      {
        document.querySelector(".deathsNew").innerHTML = `+ ${(data[0].Deaths-data[1].Deaths).toLocaleString()}`;
      }
      else
      {
        document.querySelector(".deathsNew").innerHTML = (data[0].Deaths-data[1].Deaths).toLocaleString();
      }
  }

// FORMAT DATE

const monthNames = ["Jan", "Feb" ,"Mar" , "Apr" ,"May" ,"Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
function formatDate(dateString)
  {
    let date = new Date(dateString);

    return `${date.getFullYear()}, ${monthNames[date.getMonth()]} ${date.getDate()}`;
  }







