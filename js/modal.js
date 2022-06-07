let tableData;

function giveDataDashboard(data) {
    tableData = data;
};

document.querySelector(".confirmed").addEventListener("click",function(){
    document.querySelector(".modal").classList.add ("modal-active");
    document.querySelector(".category").classList.add("confirmedModalHeading");
    document.querySelector(".category").textContent = "Confirmed";
    createConfirmedTable(tableData);
})


function createConfirmedTable(data) {
    let table = document.querySelector(".modaltableContent");
    table.innerHTML ="<tr><th>Date</th><th>Confirmed</th><th>Changes</th></tr>";
    table.classList.add("confirmedTable");
    for(let i =0 ; i < 121 ; i++)
        {
            if(data[i].Confirmed - data[i+1].Confirmed > 0)
                {
                    icon = '<i style="position:absolute; right: 35px;" class="fas fa-arrow-up"></i>';
                    color = "#ff073a";
                }
                else
                {
                    icon ='<i style="position:absolute; right: 35px;"class="fas fa-arrow-down"></i>';
                    color ="#28a745";
                }
            table.innerHTML+= `<tr>
                        <td>${formatDatesnoYear(data[i].Date.replace("T00:00:00Z",""))}</td>
                        <td>${data[i].Confirmed.toLocaleString()}</td>
                        <td><div style="position:relative;color:${color}">${(data[i].Confirmed - data[i+1].Confirmed).toLocaleString()}${icon}</div></td>
                    </tr>` 
        }
        
};



document.querySelector(".active").addEventListener("click",function(){
    document.querySelector(".modal").classList.add ("modal-active");
    document.querySelector(".category").classList.add("activeModalHeading");
    document.querySelector(".category").textContent = "Active";
    createActiveTable(tableData);

})

function createActiveTable(data) {
    let table = document.querySelector(".modaltableContent")
    table.innerHTML ="<tr><th>Date</th><th>Active</th><th>Changes</th></tr>";
    table.classList.add("activeTable");
    for(let i =0 ; i < 121 ; i++)
        {
            if(data[i].Active - data[i+1].Active > 0)
            {
                icon = '<i style="position:absolute; right: 35px;" class="fas fa-arrow-up"></i>';
                color = "#ff073a";
            }
            else
            {
                icon ='<i style="position:absolute; right: 35px;"class="fas fa-arrow-down"></i>';
                color = "#28a745";
            }
            table.innerHTML += `<tr>
                                    <td>${formatDatesnoYear(data[i].Date.replace("T00:00:00Z",""))}</td>
                                    <td>${data[i].Active.toLocaleString()}</td>
                                    <td><div style="color:${color};position:relative;">${(data[i].Active-data[i+1].Active).toLocaleString()}${icon}</div></td>
                                </tr>` 
        }
};


document.querySelector(".recovered").addEventListener("click",function(){
    document.querySelector(".modal").classList.add ("modal-active");
    document.querySelector(".category").classList.add("recoveredModalHeading");
    document.querySelector(".category").textContent = "Recovered";
    createRecoveredTable(tableData);

})

function createRecoveredTable(data) {
    let table = document.querySelector(".modaltableContent")
    table.innerHTML ="<tr><th>Date</th><th>Recovered</th><th>Changes</th></tr>";
    table.classList.add("recoveredTable");
    for(let i =0 ; i < 121 ; i++)
        {
            if(data[i].Recovered - data[i+1].Recovered > 0)
            {
                icon = '<i style="position:absolute; right: 35px;" class="fas fa-arrow-up"></i>';
                color="#28a745";
            }
            else
            {
                icon ='<i style="position:absolute; right: 35px;"class="fas fa-arrow-down"></i>';
                color="#ff073a";
            }
            table.innerHTML += `<tr>
                                    <td>${formatDatesnoYear(data[i].Date.replace("T00:00:00Z",""))}</td>
                                    <td>${data[i].Recovered.toLocaleString()}</td>
                                    <td><div style="position:relative;color:${color}">${(data[i].Recovered-data[i+1].Recovered).toLocaleString()}${icon}</div></td>
                                </tr>` 
        }
};

document.querySelector(".deaths").addEventListener("click",function(){
    document.querySelector(".modal").classList.add ("modal-active");
    document.querySelector(".category").classList.add("deathsModalHeading");
    document.querySelector(".category").textContent = "Deaths";
    createDeathsTable(tableData);

})

function createDeathsTable(data) {
    let table = document.querySelector(".modaltableContent")
    table.innerHTML ="<tr><th>Date</th><th>Deaths</th><th>Changes</th></tr>";
    table.classList.add("deathsTable");
    for(let i =0 ; i < 121 ; i++)
        {
            if(data[i].Deaths - data[i+1].Deaths > 0)
            {
                icon = '<i style="position:absolute; right: 35px;" class="fas fa-arrow-up"></i>';
                color="#ff073a";
            }
            else
            {
                icon ='<i style="position:absolute; right: 35px;"class="fas fa-arrow-down"></i>';
                color="#28a745";
            }
            table.innerHTML += `<tr>
                                    <td>${formatDatesnoYear(data[i].Date.replace("T00:00:00Z",""))}</td>
                                    <td>${(data[i].Deaths).toLocaleString()}</td>
                                    <td><div style="position:relative;color:${color}">${(data[i].Deaths-data[i+1].Deaths).toLocaleString()}${icon}</div></td>
                                </tr>` 
        }
};

document.querySelector(".fa-times").addEventListener("click",closeModal);

document.addEventListener("click",function(e){
    if(e.target.classList.contains("modal"))
    {

        closeModal();
    }


})


document.addEventListener("keydown",function(e){

    if(e.code === "Escape")
    {

        closeModal();
    }


})
function closeModal()
    {
        document.querySelector(".modal").classList.remove("modal-active");
        document.querySelector(".category").classList.remove("confirmedModalHeading");
        document.querySelector(".modaltableContent").classList.remove("confirmedTable");
        document.querySelector(".category").classList.remove("activeModalHeading");
        document.querySelector(".modaltableContent").classList.remove("activeTable");
        document.querySelector(".category").classList.remove("recoveredModalHeading");
        document.querySelector(".modaltableContent").classList.remove("recoveredTable");
        document.querySelector(".category").classList.remove("deathsModalHeading");
        document.querySelector(".modaltableContent").classList.remove("deathsTable"); 
    }
const monthsNames = ["Jan", "Feb" ,"Mar" , "Apr" ,"May" ,"Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
function formatDatesnoYear(dateString)
  {
    let date = new Date(dateString);

    return `${monthsNames[date.getMonth()]} ${date.getDate()}`;
  }
