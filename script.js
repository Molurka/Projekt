function FW()
{
    var Wiek=document.form.wiek.value;
    if (Wiek<=14)
    {
       
        document.getElementById("form").innerHTML=("Jesteś za młody skontaktuj się z nami gdy skończysz 14 lat. "); 
        document.getElementById("zapiszzmiany").remove();;
       
    }
    else 
    {
        document.getElementById("form").innerHTML=("Proszę czakać na kontakt od nas, dziekujemy :) "); 
    }
    
    
}



      


var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
toastTrigger.addEventListener('click', function () {
 var toast = new bootstrap.Toast(toastLiveExample)

toast.show()
})
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})