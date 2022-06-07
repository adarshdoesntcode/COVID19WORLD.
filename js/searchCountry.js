const countryListArray =[];
const countryListCode = [];
const countryListDiv = document.querySelector(".country-list");
let flag = 0;
let defaultCheck = 0;


function countryList(country)
    {
    country.forEach(element => {
         countryListArray.push(element.Country);
         countryListCode.push(element.ISO2);
        });
    }
  
suggestedList = document.querySelectorAll(".suggested");
fetch("https://api.covid19api.com/countries")
  .then(response => response.json())
  .then(result => countryList(result))
  .catch(error => {
    alert("Could not Find Country")  
    console.log('error', error)});

const inputSearch = document.querySelector(".searchBox");
inputSearch.addEventListener("input",function(){
    flag = 1;
    defaultCheck = 0;
    check();
    let userInput = input.value;
    let emptyArray = [];
    if(userInput)
        {   
            countryListDiv.style = "padding: 12px; ";
            countryListDiv.classList.remove("hide");
            emptyArray = countryListArray.filter(data => {
                return data.toLowerCase().startsWith(userInput.toLowerCase());
            });
        }
    emptyArray = emptyArray.map(data => {
        return `<li class="suggested">${data}</li>`;
    });
    showSuggestions(emptyArray);
    suggestedList = document.querySelectorAll(".suggested");
    for(let i = 0; i< suggestedList.length; i++)
        {
            suggestedList[i].setAttribute("onclick","select(this)");
            
        }  
    suggestedList[0].classList.add("default");
    
    
    
})


function check()
{
    if(flag === 1)
    {
        let listfocus;
        let index = -1;
        defaultCheck = 0;
        document.addEventListener("keydown", function(e){
            let len = countryListDiv.getElementsByTagName("li").length - 1;
            // listfocus.classList.remove("focus");
            if(e.code === "ArrowDown")
            {
               
                index ++;
                defaultCheck = 1;
                countryListDiv.getElementsByTagName("li")[0].classList.remove("default");
                if(listfocus )
                {
                   
                    listfocus.classList.remove("focus");
                    
                    next = countryListDiv.getElementsByTagName("li")[index];
                    if(typeof next !== undefined && index <= len)
                    {
                        listfocus = next;
                        
                    }
                    else
                    {
                        index = 0;
                        listfocus = countryListDiv.getElementsByTagName("li")[0];
                        
                    }
                    listfocus.classList.add("focus");
                    listfocus.scrollIntoView({block: "nearest"});
                }else
                {
                    index = 0;
                    listfocus = countryListDiv.getElementsByTagName("li")[0];
                    listfocus.classList.add("focus");
                    listfocus.scrollIntoView({block: "nearest"});
                }
                 
            }else if(e.code === "ArrowUp")
            {
                
                index --;
                defaultCheck = 1;
                countryListDiv.getElementsByTagName("li")[0].classList.remove("default");
                if(listfocus)
                {
                    listfocus.classList.remove("focus");
                    next = countryListDiv.getElementsByTagName("li")[index];
                    if(typeof next !== undefined && index >= 0)
                    {
                        listfocus = next;
                        
                    }
                    else
                    {
                        index = len;
                        listfocus = countryListDiv.getElementsByTagName("li")[len];
                        
                    }
                    listfocus.classList.add("focus");
                    listfocus.scrollIntoView({block: "nearest"});
                }else
                {
                    index = 0;
                    listfocus = countryListDiv.getElementsByTagName("li")[len];
                    listfocus.classList.add("focus");
                    listfocus.scrollIntoView({block: "nearest"});
                }
               
            }
        if(e.code === "Enter")
            {
                index = -1;
                if(defaultCheck === 1)
                {
                    defaultCheck++;
                   
                    findCountryCode(document.querySelector(".focus").textContent);
                    inputSearch.value = document.querySelector(".focus").textContent;
                    countryListDiv.classList.add("hide");
                    
                    
                    document.querySelector(".switch").className="switch today";
                    document.querySelector(".switchGr").className="switchGr twoMon";
                }
                else if(defaultCheck === 0)
                {
                    defaultCheck-- ;
                   
                    findCountryCode(document.querySelector(".suggested").textContent);
                    inputSearch.value = document.querySelector(".suggested").textContent;
                    countryListDiv.classList.add("hide");
                    
                    
                    document.querySelector(".switch").className="switch today";
                    document.querySelector(".switchGr").className="switchGr twoMon";
                }
            }
    }); 
    }
}

document.addEventListener("click",function(e){

    if(e.target.classList.contains("suggested") || e.target.classList.contains("country-list") || e.target.classList.contains("searchBox"))
        {
            return;
        }
    else
        {
            countryListDiv.classList.add("hide");
        }

})
document.addEventListener("keydown",function(e){
    if(e.code === "Escape")
        {
            countryListDiv.classList.add("hide");
        }
    
})

function select(element)
    {
        let selectUserData = element.textContent;
        inputSearch.value = selectUserData;
        countryListDiv.classList.add("hide");
        findCountryCode(selectUserData);
        document.querySelector(".switch").className="switch today";
        document.querySelector(".switchGr").className="switchGr twoMon";
    }


function showSuggestions(list)
    {
        let listData;
        if(list.length)
            {   
                listData = list.join('');
                countryListDiv.innerHTML = listData;   
            }
        else    
        {
            countryListDiv.classList.add("hide");
        }
        
        
    }

function findCountryCode(countryName)

    {
        showLoading();
        getCountryData(countryListCode[countryListArray.indexOf(countryName)]);  
    }




