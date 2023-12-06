// a function to display messages to the user  
function displayResult(result,error,info,message,status){
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

//  a function to check users eligibilty to drive based on their age
function checkEligibility(e){
    // prevent the form from submitting 
    e.preventDefault()
    
    var age = e.target.age.value   // get e.target get the value of the age field
    var result = document.querySelector("#result")  // get element by id 
    var error = document.querySelector("#error")
    var info = document.querySelector("#info")

    // input validation starts here
    
    // check if the age field is non empty
    if(!age){
        var message = "age field must not be empty"   // message to be displayed to user
        displayResult(result,error,info,message=message,status="error")
        return false
    }
    
    // check if age input is a valid number
    if(isNaN(age)){
        var message = "age must be a number!"   // message to be displayed to user
        displayResult(result,error,info,message=message,status="error")
        return false
    }
    
    // check if age input is less than zero
    if(age <= 0){
        var message = "Age must not be less that or equal to zero!"
        displayResult(result,error,info,message=message,status="error")
        return false
    }
    
    // input validation ends here

    // if age is greater than 70 then the user is not eligible to drive
    if(age >= 18){
        var message  = `age <strong>${age}</strong> is eligible to vote`   // message to be displayed to user
        displayResult(result,error,info,message=message,status="info")
    }
    //  if age is less than 18 then the user is too young to drive
    else{
        var message  = `age <strong>${age}</strong> is not eligible to vote`   // message to be displayed to user
        displayResult(result,error,info,message=message,status="info")
    }
    
}