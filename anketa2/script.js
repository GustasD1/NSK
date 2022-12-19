const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));
$(document).ready(function() {
    $("#santuoka").change(function() {
        if ($("#santuoka").val() == "Vedęs/ištekėjusi") {
            $("#test").show()
            $("#test2").show()
            $("#vaikai").show()
        } else {
            $("#test").hide()
            $("#test2").hide()
        }
        if ($("#santuoka").val() == "Nevedęs/netekėjusi") {
            $("#test").hide()
            $("#test2").hide()
            $("#vaik").hide()
            $("#vaik2").hide()
            $("#vaik3").hide()
            $("#vaikai").hide()
        }
        if ($("#santuoka").val() == "Išsiskyręs/išsiskyrusi") {
            $("#test").hide()
            $("#test2").hide()
            $("#vaik").hide()
            $("#vaik2").hide()
            $("#vaik3").hide()
            $("#vaikai").hide()
        }
    })
}); 
$(document).ready(function() {
    $("#skaitmuo").change(function() {
        if ($("#skaitmuo").val() == 0) {
            $("#vaik").hide()
            $("#vaik2").hide()
            $("#vaik3").hide()
        }
        if ($("#skaitmuo").val() == 1) {
            $("#vaik").show()
            $("#vaik2").hide()
            $("#vaik3").hide()
        }
        if ($("#skaitmuo").val() == 2) {
            $("#vaik").show()
            $("#vaik2").show()
            $("#vaik3").hide()
        }
        if ($("#skaitmuo").val() == 3) {
            $("#vaik").show()
            $("#vaik2").show()
            $("#vaik3").show()
        }



    })
}); 
$(document).ready(function() {
    $("#padetis").change(function() {
        if ($("#padetis").val() == "Studijuoja") {
            $("#stud").show()
            $("#stud2").show()
            $("#stud3").show()
            $("#darb").hide()
            $("#darb2").hide()
            $("#darb4").hide()
            $("#darb5").hide()
            $("#darb6").hide()
            $("#nedarb").hide()
            $("#atostogos").hide()
        }
        if ($("#padetis").val() == "Dirba") {
            $("#stud").hide()
            $("#stud2").hide()
            $("#stud3").hide()
            $("#darb").show()
            $("#darb2").show()
            $("#darb4").show()
            $("#darb5").show()
            $("#darb6").show()
            $("#nedarb").hide()
            $("#atostogos").hide()
        }
        if ($("#padetis").val() == "Nedirba") {
            $("#stud").hide()
            $("#stud2").hide()
            $("#stud3").hide()
            $("#darb").hide()
            $("#darb2").hide()
            $("#nedarb").show()
            $("#darb4").show()
            $("#darb5").show()
            $("#darb6").show()
            $("#atostogos").hide()
        }
        if ($("#padetis").val() == "Motinystės/tėvystės atostogos") {
            $("#stud").hide()
            $("#stud2").hide()
            $("#stud3").hide()
            $("#darb").hide()
            $("#darb2").hide()
            $("#darb4").show()
            $("#darb5").show()
            $("#darb6").show()
            $("#nedarb").hide()
            $("#atostogos").show()
        }
    })
}); 
function saugoti(){
    const vardas = document.getElementById('vardas');
    const vardas2 = document.getElementById('vardas2');
    const pavarde = document.getElementById('pavarde');
    const pavarde2 = document.getElementById('pavarde2');
    const lytis = document.getElementById('lytis');
    const asmens = document.getElementById('asmens');
    const numeris = document.getElementById('numeris');
    const pastas = document.getElementById('pastas');
    const adresas = document.getElementById('adresas');
    const kontaktai = document.getElementById('kontaktai');
    const gimimas = document.getElementById('gimimas');
    const santuoka = document.getElementById('santuoka');
    const partner = document.getElementById('test3');
    const asmensp = document.getElementById('test4');
    const skaitmuo = document.getElementById('skaitmuo');
    const vaik = document.getElementById('vaik4');
    const vaik2 = document.getElementById('vaik5');
    const vaik3 = document.getElementById('vaik6');
    const padetis = document.getElementById('padetis');
    const stud = document.getElementById('stud4');
    const stud2 = document.getElementById('stud5');
    const stud3 = document.getElementById('stud6');
    const darb = document.getElementById('darb6');
    const darb2 = document.getElementById('darb7');
    const darb4 = document.getElementById('darb8');
    const darb5 = document.getElementById('darb9');
    const darb6 = document.getElementById('darb10');
    const nedarb = document.getElementById('nedarb2');
    const atostogos = document.getElementById('atostogos2');


    let data = 
        '\r Vardas: ' + vardas.value + ' \r\n ' + 
        'Antrasis vardas: ' +vardas2.value + ' \r\n ' + 
        'Pavardė: ' + pavarde.value + ' \r\n ' + 
        'Ankstesnė pavardė: ' + pavarde2.value + ' \r\n ' + 
        'Lytis: ' + lytis.value + ' \r\n ' + 
        'Gimimo data: ' + gimimas.value + ' \r\n ' + 
        'Asmens kodas: ' + asmens.value + ' \r\n ' + 
        'Telefono numeris: ' + numeris.value + ' \r\n ' + 
        'El. pašto adresas: ' + pastas.value + ' \r\n ' + 
        'Adresas: ' + adresas.value + ' \r\n ' + 
        'Kiti kontaktai: ' + kontaktai.value + ' \r\n ' + 
        'Šeimyninė padėtis: ' + santuoka.value + ' \r\n ' + 
        'Partnerio vardas / pavardė: ' + partner.value + ' \r\n ' + 
        'Partnerio asmens kodas: ' + asmensp.value + ' \r\n ' + 
        'Vaikų skaičius: ' + skaitmuo.value + ' \r\n ' +
        '1-ojo vaiko vardas / pavardė: ' + vaik.value + ' \r\n ' + 
        '2-ojo vaiko vardas / pavardė: ' + vaik2.value + ' \r\n ' + 
        '3-iojo vaiko vardas / pavardė: ' + vaik3.value + ' \r\n ' + 
        'Profesinė padėtis: ' + padetis.value  + ' \r\n ' + 
        'Studijų pakopa: ' + stud.value  + ' \r\n ' + 
        'Kursas : ' + stud2.value  + ' \r\n ' + 
        'Įstaiga kurioje mokotės: ' + stud3.value  + ' \r\n ' + 
        'Darbo įstaiga: ' + darb.value  + ' \r\n ' + 
        'Pareigos : ' + darb2.value  + ' \r\n ' + 
        'Nedarbo priežastis : ' + nedarb.value  + ' \r\n ' + 
        'Atostogų pradžia: ' + atostogos.value  + ' \r\n ' + 
        'Darbo patirtis: ' + darb4.value  + ' \r\n ' + 
        'Darbo pobūdis: ' + darb5.value  + ' \r\n ' + 
        'Darbo sritis: ' + darb6.value;
    

    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	  

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 

}