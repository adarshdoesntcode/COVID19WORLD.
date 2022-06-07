const typeWriter = document.querySelector(".typewriter");
const searchBox = document.querySelector(".searchBox");

const country_list = ["Afghanistan","Argentina","Armenia","Australia","Austria","Bangladesh","Barbados","Belgium","Bhutan","Brazil","Brunei","Bulgaria","Cambodia","Cameroon","Chile","China","Colombia","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Ecuador","Egypt","Ethiopia","Fiji","Finland","France","Georgia","Germany","Ghana","Greece","Greenland","Haiti","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kuwait","Lebanon","Liberia","Libya","Macedonia","Madagascar","Malaysia","Maldives","Mali","Mexico","Mongolia","Morocco","Nepal","Netherlands","New Zealand","Nigeria","Norway","Oman","Pakistan","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Saudi Arabia","Senegal","Serbia","Singapore","Slovakia","South Africa","South Korea","Spain","Sri Lanka","Swaziland","Sweden","Switzerland","Syria","Taiwan","Thailand","Turkey","Uganda","Ukraine","United Kingdom","Uruguay","Venezuela","Vietnam","Yemen","Zimbabwe"]; 

const textArray = [];

let countryIndex;

for(let i=0 ; i<country_list.length ; i++)
  {
    countryIndex=Math.floor(Math.random() * country_list.length);
    textArray.push(country_list[countryIndex]);
  }


const typingDelay = 350;
const erasingDelay = 200;
const newTextDelay = 800;

let textArrayIndex = 0;
let charIndex = 0;

const wrld = "WORLD.";
let wrldIndex = 0;
let text ="";

function type()
  
  {
    if(charIndex < textArray[textArrayIndex].length)
      {
        text +=textArray[textArrayIndex].charAt(charIndex);
        searchBox.setAttribute("placeholder",text);

        charIndex++;
        setTimeout(type,typingDelay);
      }
    else  
      {
        text = "";
        setTimeout(erase,newTextDelay);
      }
  }

  function erase()
    {
      if(charIndex > 0)
        {
          let text = textArray[textArrayIndex].substring(0,charIndex-1);;
          searchBox.setAttribute("placeholder",text); 
          charIndex--;
          setTimeout(erase,erasingDelay);
        }
      // else if (textArrayIndex < 2)
      //   {
      //     textArrayIndex++;
      //     setTimeout(type,typingDelay);
      //   }
      else
        {
          textArrayIndex++;
          if(textArrayIndex>=textArray.length) textArrayIndex = 0;
           setTimeout(type,typingDelay);
         // setTimeout(world,newTextDelay);
        }
    }

    function world()
      {
        if(wrldIndex < wrld.length)
        {
          typeWriter.textContent += wrld.charAt(wrldIndex);
          wrldIndex++;
          setTimeout(world,300);
        }
      }

  document.addEventListener("DOMContentLoaded", function(){
    setTimeout(world,1000); 
    setTimeout(type,3500);
  });



