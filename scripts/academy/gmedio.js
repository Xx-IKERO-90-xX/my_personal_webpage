let gmContent = document.getElementById('grado_medio');

function clearGM() {
    gmContent.innerHTML = "";
}

function invokeFirstYearGM() {
    clearGM();

    let fistYearTemplate = document.getElementById("gm1_template").content.cloneNode(true);
    let fistYearContent = fistYearTemplate.getElementById("gm1_content");

    gmContent.append(fistYearContent);
}

function invokeSecondYearGM() {
    clearGM();
    
    let secondYearTemplate = document.getElementById("gm2_template").content.cloneNode(true);
    let secondYearContent = secondYearTemplate.getElementById("gm2_content");
    
    gmContent.append(secondYearContent);
}

let btn_gm1 = document.getElementById("btn_gm1");
let btn_gm2 = document.getElementById("btn_gm2");

btn_gm1.addEventListener("click", invokeFirstYearGM);
btn_gm2.addEventListener("click", invokeSecondYearGM);

invokeFirstYearGM();