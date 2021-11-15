
function showMyDiv(){
    let salary = document.forms["cardForm"]["salary"].value;
    let paymentDay = document.forms["cardForm"]["paymentDay"].value;
    

   if (salary == "" && paymentDay == ""){
       document.getElementById("salary-error").style.display = "flex";
       document.getElementById("salary-error").innerHTML = "Please enter your salary!";
       document.getElementById("payment-error").style.display = "flex";
        document.getElementById("payment-error").innerHTML = "Please select a payment day!";
       return false;
   }
   if (salary.length>1 && paymentDay == ""){
    document.getElementById("salary-error").style.display = "none";
    document.getElementById("salary-error").innerHTML = "Please enter your salary!";
    document.getElementById("payment-error").style.display = "flex";
    document.getElementById("payment-error").innerHTML = "Please select a payment day!";
    return false;
}
    if (salary == "" && paymentDay.length>1){
    document.getElementById("salary-error").style.display = "flex";
    document.getElementById("salary-error").innerHTML = "Please enter your salary!";
    document.getElementById("payment-error").style.display = "none";
    document.getElementById("payment-error").innerHTML = "Please select a payment day!";
    return false;
}

   if (salary.length>1){
    document.getElementById("salary-error").style.display = "none"; 
   }

    if (paymentDay.length>1){
    document.getElementById("payment-error").style.display = "none"; 
   }
    
    document.getElementById("labelDiv").style.display = "contents";
    document.getElementById("salaryDiv").style.display = "none";
   
 
}

function showMyDiv2(){
    let personName = document.forms["cardForm"]["name"].value;
    let personSurname = document.forms["cardForm"]["surname"].value;
    let personAdress = document.forms["cardForm"]["adress"].value;
    let personEmail = document.forms["cardForm"]["e-mail"].value;
    let personCity = document.forms["cardForm"]["city"].value;
    let nameMessage = document.getElementById("personName-error").innerHTML = "Please enter your name!";
    let surnameMessage = document.getElementById("personSurname-error").innerHTML = "Please enter your surname!";
    let adressMessage = document.getElementById("personAdress-error").innerHTML = "Please enter your adress!";
    let emailMessage = document.getElementById("personEmail-error").innerHTML = "Please enter your E-mail!";
    let cityMessage = document.getElementById("personCity-error").innerHTML = "Please enter your city!";
    if (personName == "" ){
        document.getElementById("personName-error").style.display = "flex";    
        return false;    
    }else{
        document.getElementById("personName-error").style.display = "none";
    }

    if (personSurname == "" ){
        document.getElementById("personSurname-error").style.display = "flex";        
        return false;
    }else{
        document.getElementById("personSurname-error").style.display = "none"; 
    }

    if (personAdress == "" ){
        document.getElementById("personAdress-error").style.display = "flex";        
        return false;
    }else{
        document.getElementById("personAdress-error").style.display = "none"; 
    }

    if (personEmail == ""){
            document.getElementById("personEmail-error").style.display = "flex";
            return false;
    }else{
        document.getElementById("personEmail-error").style.display = "none";
    }

    if (personCity == "" ){
        document.getElementById("personCity-error").style.display = "flex";        
        return false;
    }else{
        document.getElementById("personCity-error").style.display = "none";
    }
    
    
   

    document.getElementById("labelDiv").style.display = "none";
    document.getElementById("labelDiv2").style.display = "contents";

    
}

function hideMyDiv() {
    
    document.getElementById("labelDiv").style.display = "none";
    document.getElementById("salaryDiv").style.display = "contents";
    
    
}





function hideMyDiv2() {
    document.getElementById("labelDiv").style.display = "contents";
    document.getElementById("labelDiv2").style.display = "none";
}

function showMyDiv3(){

    

    let colorBlack = document.getElementById("black");
    let colorOrange = document.getElementById("orange");
    let colorWhite = document.getElementById("white");

    

    if ((colorBlack.checked == false) && (colorOrange.checked == false) && (colorWhite.checked == false)){
        document.getElementById("colorError").style.display = "flex";
        document.getElementById("colorError").innerHTML = "Please choose one of the colors!";
        return false;
    }else{
        document.getElementById("colorError").style.display = "none";
    }
    

    function radioBtn(radiobutton) {
            var radiobutton = document.getElementsByName('color');
            radiobutton.forEach((item) => {
            if (item !== radiobutton) item.checked =  false;
            })
        }

    document.getElementById("labelDiv2").style.display = "none";
    document.getElementById("labelDiv3").style.display = "contents";


}

function hideMyDiv3() {
    document.getElementById("labelDiv2").style.display = "contents";
    document.getElementById("labelDiv3").style.display = "none";
}

function myFun(checkbox) {
        var checkboxes = document.getElementsByName('delivery')
        checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked =  false;
        })
    }



function showMyDiv4(){

    let box1 = document.getElementById("box1")
    let box2 = document.getElementById("box2")

    if((!box1.checked && !box2.checked)){
        document.getElementById("checkError").style.display = "flex";
        document.getElementById("checkError").innerHTML = "Please select one of the delivery options!";
        return false;
    }else{
        document.getElementById("checkError").style.display = "none";
    }
    
    
    

    document.getElementById("labelDiv3").style.display = "none";
    document.getElementById("labelDiv4").style.display = "contents";
}

function hideMyDiv4() {
    document.getElementById("labelDiv3").style.display = "contents";
    document.getElementById("labelDiv4").style.display = "none";
}

function showMyDiv5(){
    let textArea = document.forms["cardForm"]["textarea"].value;
    if (textArea == ""){
        document.getElementById("textAreaError").style.display = "flex";
        document.getElementById("textAreaError").innerHTML = "Please fill the text area!";
        return false;
    }else{
        document.getElementById("textAreaError").style.display = "none";
    }



    document.getElementById("labelDiv4").style.display = "none";
    document.getElementById("labelDiv5").style.display = "contents";

}

function hideMyDiv5() {
    document.getElementById("labelDiv4").style.display = "contents";
    document.getElementById("labelDiv5").style.display = "none";
}

let salary = document.getElementById("salary").value;
let paymentDay = document.getElementById("dayPayment").value;
let personName = document.getElementById("name").value;
let personSurname = document.getElementById("surname").value;
let personAdress = document.getElementById("adress").value;
let personEmail = document.getElementById("email").value;
let personCity = document.getElementById("city").value;

function showInformation(){
    document.getElementById("showInfo").innerHTML = 
    "<ul><li><b>Monthly salary after taxes: </b>"+salary+" "+"EUR"+"</br> "+
    "<li><b>Interest payment day: </b>"+paymentDay+"</br> "+
    "<li><b>Name: </b>"+personName+"</br> "+
    "<li><b>Surname: </b>"+personSurname+"</br> "+
    "<li><b>Adress: </b>"+personAdress+"</br> "+
    "<li><b>E-mail: </b>"+personEmail+"</br> "+
    "<li><b>City: </b>"+personCity+"</ul></br> ";
    document.getElementById("summary").style.display = "none";
    
}

