let studentDetails = []

function submitData(event){
    event.preventDefault()

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let dob = document.getElementById("dob").value
    let stdGender = ""
    let subjectsList = []
    let contact = document.getElementById("contact").value

    //Radio button value extraction
    let gender = document.getElementsByName("gender")
    for(let g of gender){
        if(g.checked){
            stdGender = g.value
        }
    }

    let subjects = document.getElementsByName("subject")
    for(let sub of subjects){
        if(sub.checked){
            subjectsList.push(sub.value)
        }
    }

    let details = {
        "Name" : name,
        "Email": email,
        "DateOfBirth": dob,
        "Gender": stdGender,
        "Subjects": subjectsList,
        "Contact": contact
    }
    studentDetails.push(details)
    console.log(studentDetails)
}

//accept data from form
document.getElementById("submit_btn").addEventListener('click', function(event){
    submitData(event)
})

document.querySelector("body").addEventListener('keydown',function(event){
    if(event.key == "Enter"){
        //function call
        submitData(event)
    }
})