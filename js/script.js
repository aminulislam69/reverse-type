let type = document.querySelector(".type")
let myText = type.innerHTML

let myTextArry

type.innerHTML = " "

let count = 0



function myType(){
    if(count < myText.length){
        type.innerHTML += myText.charAt(count) 
        count++
        myTextArry = myText.split("")
    }else{
        myTextArry.pop()
        type.innerHTML = myTextArry.join("")    
        if(myTextArry.length == 0){
            count = 0
        }
    }
}


setInterval(()=>{

    myType()
 
},type.dataset.time)