let name = prompt("İsminizi giriniz")
let myName = document.querySelector("#myName")
myName.innerHTML = `${name}` 


function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let days = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Perşembe",
        "Cuma",
        "Cumartesi",
    ];
    m = checkTime(m);
    s = checkTime(s);
    let myclock = document.getElementById('myClock')
    myclock.innerHTML = h + ":" + m + ":" + s + days[today.getDay()]
    setTimeout(showTime, 1000);


}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
}

showTime()