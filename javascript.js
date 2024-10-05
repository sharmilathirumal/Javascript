const displaycontent = document.getElementById("display");

function appendToDisplay(input){
    displaycontent.value +=input;
    displaycontent.style.color="black";
    displaycontent.setAttribute("disabled",true);
}

function clearAll(){
    displaycontent.value="";
    displaycontent.setAttribute("disabled",true);
}

function calculate(){
    try{
        displaycontent.value =eval(displaycontent.value);
        displaycontent.removeAttribute("disabled");//remove the disabled attribute to see the all values like 0.010101010101010102(because this length is high)
    }
    catch{
        displaycontent.value ="Error";
        displaycontent.setAttribute("disabled",true);
    } 
}

function ClearLastElement(){
    displaycontent.value = displaycontent.value.toString().slice(0,-1);
    displaycontent.setAttribute("disabled",true);
}