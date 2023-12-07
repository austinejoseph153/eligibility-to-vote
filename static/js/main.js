// a function to display messages to the user  
function displayResult(result,error,info,message,status="success"){
    if(status == "success"){
        if(result.classList.contains("d-none")){ result.classList.remove("d-none") }
                
        if(!error.classList.contains("d-none")){ error.classList.add("d-none") }
        
        if(!info.classList.contains("d-none")){ info.classList.add("d-none") }
            
        result.innerHTML = message
    }
    else if(status == "error"){
        if(error.classList.contains("d-none")){ error.classList.remove("d-none") }
    
        if(!result.classList.contains("d-none")){ result.classList.add("d-none") }
                
        if(!info.classList.contains("d-none")){ info.classList.add("d-none") }
        error.innerHTML = message
    }
    else{
        if(info.classList.contains("d-none")){ info.classList.remove("d-none") }
                
        if(!error.classList.contains("d-none")){ error.classList.add("d-none") }
            
        if(!result.classList.contains("d-none")){ result.classList.add("d-none") }
            
        info.innerHTML = message
    }
}

// a function to replace all whitespace in the input value 
function trimAge(age){
    var trimmed_age = ""
    for(let x=0; x< age.length; x+=1){
        if(age[x] == " "){
            continue
        }
        trimmed_age+=age[x]
    }
    return trimmed_age
}


function validateInput(age){
    var message = ""
    var validated = true
    age = trimAge(age) // trim age of any white spaces
    
    // check if the age field is non empty
    if(!age){
        message = "age field must not be empty"   // message to be displayed to user
        validated = false
    }
    // check if age input is a valid number
    else if(isNaN(age)){
        var message = "age must be a valid number!"   // message to be displayed to user
        validated = false
    }
    
    // check if age input is less than zero
    else if (age <= 0){
        var message = "Age must not be less that or equal to zero!"
        validated = false
    }
    else{
        message = age   
    }
    return {
        "validated":validated,
        "message":message
    }

}


//  a function to check users eligibilty to drive based on their age
function checkEligibility(e){
    // prevent the form from submitting 
    e.preventDefault()
    
    var age = e.target.age.value   // get e.target get the value of the age field
    var result = document.querySelector("#result")  // get element by id 
    var error = document.querySelector("#error")
    var info = document.querySelector("#info")

    // input validation starts here
    var validated = validateInput(age)
    if(!validated.validated){
        displayResult(result,error,info,message=validated.message,status="error")
        return
    }else{
        age = validated.message
    }
    // input validation ends here

    // if age is greater than 70 then the user is not eligible to drive
    if(age >= 18){
        var message  = `age <strong>${age}</strong> is eligible to vote`   // message to be displayed to user
        displayResult(result,error,info,message=message)
    }
    //  if age is less than 18 then the user is too young to drive
    else{
        var message  = `age <strong>${age}</strong> is not eligible to vote`   // message to be displayed to user
        displayResult(result,error,info,message=message,status="info")
    }
    
}