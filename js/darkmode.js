const moontrigger = document.querySelector(".fa-moon");
const header = document.querySelector(".navlightmode");
const body = document.querySelector(".bodylightmode");
const searchTitle = document.querySelector(".searchTitle");
const searchContainer = document.querySelector(".wrapper");
const searchBoxInput = document.querySelector(".search-input");
const suggestedLi = document.querySelectorAll(".suggested");
const switchtoggle = document.querySelector(".switch");
const switchtoggleGr = document.querySelector(".switchGr");
const modalContentDiv = document.querySelector(".modalContent");
let mode = localStorage.getItem("mode");

moontrigger.addEventListener("click",function(){
  mode = localStorage.getItem("mode");
  if(mode !== "enabled")
    {
      enableDark();
    }

  else
    {
      enableLight();
    }
})

if(mode === "enabled")
  {
    enableDark();
  }

function enableLight()
  {
    localStorage.setItem("mode", null);


    moontrigger.className = "far fa-moon";
    header.className = "navlightmode";
    body.className = "bodylightmode";
    searchTitle.className = "searchTitle";
    searchContainer.className="wrapper";
    searchBoxInput.className="search-input";
    switchtoggle.removeAttribute("id");
    switchtoggleGr.removeAttribute("id");
    modalContentDiv.removeAttribute("id");
  }


function enableDark()
  {

    localStorage.setItem("mode", "enabled");
    moontrigger.className = "far fa-sun";
    header.className = "darkmode";
    body.className = "darkmode";
    searchTitle.className = "searchTitleDark";
    searchContainer.className="wrapperDark";
    searchBoxInput.className="search-inputDark";
    switchtoggle.setAttribute("id","switch");
    switchtoggleGr.setAttribute("id","switchGr");
    modalContentDiv.setAttribute("id","Dark");
  }


