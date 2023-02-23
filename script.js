function calc() {
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    let BMI = (weight/height ** 2) * 10000
    BMI = BMI.toFixed(2)        //this will restrict the number upto 2 places after the decimal.
    
    if(weight == 0|| height == 0){
        alert("Invalid Input")
    }
    //we will use var because let is block scoped.
    if(BMI < 18.5){
        var status = "UNDERWEIGHT"
        document.getElementById("status").style.background="#00C9F3"
        document.getElementById("status").style.borderColor="#00C9F3"
        document.getElementById("status").style.color="white"
    }
    else if (18.5 <= BMI && BMI < 25){
        var status ='NORMAL'
        document.getElementById("status").style.background="#14A44D"
        document.getElementById("status").style.borderColor="#14A44D"
        document.getElementById("status").style.color="white"
    }
    else if(25 <= BMI && BMI < 30){
        var status = 'OVERWEIGHT'
        document.getElementById("status").style.background="#E4A11B"
        document.getElementById("status").style.borderColor="#E4A11B"
        document.getElementById("status").style.color="white"
    }
    else{
        var status ='OBESITY'
        document.getElementById("status").style.background="rgb(240, 15, 15)"
        document.getElementById("status").style.borderColor="rgb(240, 15, 15)"
        document.getElementById("status").style.color="white"
    }
    
    document.getElementById("result").value = BMI
    document.getElementById("status").value = status
}