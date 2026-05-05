function calcularDose(){

    let inputPeso = document.getElementById('inputDipi')
    let resultado= document.querySelector('.resposta')

    let pesoKg = Number(inputPeso.value.replace(',', '.'))
    let doseDipirona = 25
    let concentracaoDipirona = 500 

    let volumeFinal = (pesoKg * doseDipirona) / concentracaoDipirona
    resultado.innerHTML = `${volumeFinal.toFixed(2)} <strong>ml</strong>`
 }

 function calcularDose2(){
        
    let inputPeso = document.getElementById('inputTramadol')
    let resultado2= document.querySelector('.resposta2')

    let pesoKg = Number(inputPeso.value.replace(',', '.'))
    let doseTramadol = 4
    let concentracaoTramadol = 50

    let volumeFinal = (pesoKg * doseTramadol) / concentracaoTramadol
    resultado2.innerHTML = `${volumeFinal.toFixed(2)} <strong>ml</strong>`
 }

 function calcularDose3(){
        
    let inputPeso = document.getElementById('inputDexa')
    let resultado3= document.querySelector('.resposta3')

    let pesoKg = Number(inputPeso.value.replace(',', '.'))
    let doseDexametasona= 0.1
    let concentracaoDexametasona = 2

    let volumeFinal = (pesoKg * doseDexametasona) / concentracaoDexametasona
    resultado3.innerHTML = `${volumeFinal.toFixed(2)} <strong>ml</strong>`
 }

 function calcularDose4(){
        
    let inputPeso = document.getElementById('inputMeta')
    let resultado4= document.querySelector('.resposta4')

    let pesoKg = Number(inputPeso.value.replace(',', '.'))
    let doseMetadona= 0.1
    let concentracaoMetadona = 10

    let volumeFinal = (pesoKg * doseMetadona) / concentracaoMetadona
    resultado4.innerHTML = `${volumeFinal.toFixed(2)} <strong>ml</strong>`
 }

 function calcularDose5(){
        
    let inputPeso = document.getElementById('inputMelox')
    let resultado5= document.querySelector('.resposta5')

    let pesoKg = Number(inputPeso.value.replace(',', '.'))
    let doseMeloxicam = 0.1
    let concentracaoMeloxicam = 2

    let volumeFinal = (pesoKg * doseMeloxicam) / concentracaoMeloxicam
    resultado5.innerHTML = `${volumeFinal.toFixed(2)} <strong>ml</strong>`
 }
