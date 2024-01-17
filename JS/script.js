
function countLuas(e){
    let hitungNilaiSisi = document.getElementById("sisiLuas").value /* mengambil nilai dari Id("sisiLuas") */
    var hasilLuas = document.getElementById("hasilLuas") 

    let jawab = parseInt(hitungNilaiSisi) * parseInt(hitungNilaiSisi)
    hasilLuas.innerHTML= jawab /* merekam id("hasil luas sebagai jawab") */
    
   
}

function countKeliling(e){
    let hitungNilaiKeliling = document.getElementById("sisiKeliling").value
    let jawab = parseInt(hitungNilaiKeliling) *4
    var hasilKeliling = document.getElementById("hasilKeliling")
    hasilKeliling.innerText= jawab /* merekam id("hasil keiling sebagai jawab") */

}

/* membuat button reset untuk luas */
function resetBtnLuas() {
    var rButton= document.getElementById("sisiLuas")
    
    if (rButton.value !="") {
        rButton.value= ""

    }
    console.log("sudah di reset", resetBtnLuas)
}

/* membuat button reset untuk keliling */
function resetBtnKeliling() {
    var rButton= document.getElementById("sisiKeliling")
    
    if (rButton.value !="") {
        rButton.value= ""

    }
    console.log("sudah di reset", resetBtnKeliling)
}