function contact(){
    let name = document.getElementById("name")
    let surname = document.getElementById("surname")
    let email = document.getElementById("email").value.toLowerCase();
    let report = document.getElementById("report")
    let notify = document.getElementById("notify")
    notify.innerHTML = `${name} ${surname} <br> ${email} <br> Usługa:  ${report}`
}