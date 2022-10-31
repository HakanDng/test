
let userName = prompt ("Kullanici Adiniz:")
let age = prompt ("Yasiniz:")
let info = document.querySelector("#info")

if (userName && age >= 18) {
    info.innerHTML = "ehliyet alir"
} else if (!userName) {
    info.innerHTML = "K.adi yok"
} else if ( !(age >= 18) ) {
    info.innerHTML = "Yasiniz tutmuyor"
}