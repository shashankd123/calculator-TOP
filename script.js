const currCon = document.querySelector("#curr-con");
const prevCon = document.querySelector("#pre-con");

const keyCont = document.querySelector("#key-container");

let currVal = "";
let prevVal = "";

keyCont.addEventListener("click", (e) => {
    const value = e.target.value;
    if(value != undefined){        
        //Do the operations with the inputs
        operate(value);        
    }
})

function operate(val){

    currVal = currCon.textContent;

    if("123456789".includes(val)){
        currVal = ("" + currVal + val)
        currCon.textContent = currVal;
    }else if(currVal !== "" && val == "0"){
        currVal += val;
        currCon.textContent = currVal;
    }else if(!(currVal.includes(".")) && val === "."){
        currVal += val;
        currCon.textContent = currVal;
    }else if(val == "<" && currVal.length > 0){
            currVal = currVal.substring(0, currVal.length -1);
            currCon.textContent = currVal;
    }else if(val === "AC" || "/%X-+=".includes(val)){
        if(val == "AC"){
            prevVal = "";
            currVal = "";
            currCon.textContent = currVal;
            prevCon.textContent = currVal;
        }else{
            operateResult();
        }
    }
}