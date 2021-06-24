function compute() {
    let principal = document.getElementById("principal").principal;
    let rate = document.getElementById("rate").rate;
    let years = document.getElementById("years").years;
    let intrest = principal * years * rate / 100;
    let year = new Date().getFullYear() + parseInt(years);
   p=document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>","this is you Simple "

    
}
    function updateRate() {
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText = rateval;
        
    }function validate(){
        var input_number=document.getElementById("principal");
        if(input_number.value=="" || input_number.value<=0){
            alert("Enter a postive number");
            return false;
        }
            alert("Thanks for submitting");
            return true;
    }    