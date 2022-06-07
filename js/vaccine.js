let searchCountry ; 
let countryPolulation;
let fullyvacinated;
let onedose;
let totalvaccinated;
let onedosePercentage;
let fullyvacinatedPercentage;

function updateVaccinated(country)
{

  fetch("./js/countries.json")
  .then(response => {
    return response.json();
  })
  .then(data => {
    searchCountry = data[country].searchquery;
    countryPolulation = data[country].population;
    getVaccineData(searchCountry);
  }
  )
}


function getVaccineData(country)
  {
    Papa.parse(`https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/country_data/${country}.csv`,
    {
      download: true,
      header:true,
      skipEmptyLines:true,
      complete: function (result)
      {
        
        totalvaccinated=parseInt(result.data[result.data.length -1].total_vaccinations);
        onedose =parseInt(result.data[result.data.length -1].people_vaccinated);
        fullyvacinated = parseInt(result.data[result.data.length -1].people_fully_vaccinated);
       
        updateProgressBar();
      }
    })
    

    // fetch(`https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/country_data/${country}.csv`)
    // .then(response => {
    //   return response.text();
    // })
    // .then(data => {
    //   let table = data.trim().split("\n");
    //   let lastData = table[table.length - 1];
      
    //   let elements = lastData.split(",");
    
    //   fullyvacinated = elements[elements.length -1];
    //   onedose = elements[elements.length -2];
    //   totalvaccinated = elements[elements.length - 3];

    //   updateProgressBar();
    // })
  }

  function updateProgressBar()
    {
      document.querySelector(".vaccinatedTotal").innerHTML = `${parseInt(totalvaccinated).toLocaleString()} <i class="fas fa-syringe"></i>`

      onedosePercentage =((onedose/countryPolulation)*100).toFixed(1);
      fullyvacinatedPercentage =((fullyvacinated/countryPolulation)*100).toFixed(1);

      document.querySelector(".onePercentage").innerHTML = `(${onedosePercentage}%)`;
      document.querySelector(".fullPercentage").innerHTML = `(${fullyvacinatedPercentage}%)`;

      document.querySelector(".lable-one").setAttribute("style" , `margin-left: calc(${onedosePercentage}% - 80px`);
      document.querySelector(".one-arrow-width").setAttribute("style",`margin-left:calc(${onedosePercentage}% - 2px)`);
      document.querySelector(".partialvac").setAttribute("style",`width:${onedosePercentage}%`)


      document.querySelector(".lable-full").setAttribute("style" , `margin-left: calc(${fullyvacinatedPercentage}% - 70px`);
      document.querySelector(".full-arrow-width").setAttribute("style",`margin-left: calc(${fullyvacinatedPercentage}% - 2px )`);
      document.querySelector(".fullyvac").setAttribute("style",`width:${fullyvacinatedPercentage}%`)

      if(onedosePercentage < 25)
      {
        document.querySelector(".administered").style.color = "#e23028";
        document.querySelector(".administered").style.backgroundColor = "#ff073917";
        
        document.querySelector(".onePercentage").style.color = "#e23028";
        document.querySelector(".fullPercentage").style.color = "#e23028";
        document.querySelector(".progress-bar").style.backgroundColor = "#ff073917";

        document.querySelector(".fullyvac").style.backgroundColor ="#e23028";
        document.querySelector(".partialvac").style.backgroundColor ="#e23028";
        
      }

      if(onedosePercentage >= 25 && onedosePercentage <60)
      {
        document.querySelector(".administered").style.color = "#007bff";
        document.querySelector(".administered").style.backgroundColor = "#007bff1a";


        document.querySelector(".onePercentage").style.color = "#007bff";
        document.querySelector(".fullPercentage").style.color = "#007bff";
        document.querySelector(".progress-bar").style.backgroundColor = "#007bff1a";

        document.querySelector(".fullyvac").style.backgroundColor ="#007bff";
        document.querySelector(".partialvac").style.backgroundColor ="#007bff";
        
      }
      if(onedosePercentage >=60)
      {
        document.querySelector(".administered").style.color = "#28a745";
        document.querySelector(".administered").style.backgroundColor = "#28a74627";

        document.querySelector(".onePercentage").style.color = "#28a745";
        document.querySelector(".fullPercentage").style.color = "#28a745";
        document.querySelector(".progress-bar").style.backgroundColor = "#28a74627";

        document.querySelector(".fullyvac").style.backgroundColor ="#28a745";
        document.querySelector(".partialvac").style.backgroundColor ="#28a745";
        
      }

    }



    