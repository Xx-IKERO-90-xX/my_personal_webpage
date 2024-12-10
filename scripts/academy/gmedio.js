let content = document.getElementById('grado_medio');

function clear() {
    content.innerHTML = "";
}

function invokeFirstYear() {
    clear();
    
    let fistYearTemplate = document.getElementById("gm1_template").content.cloneNode(true);
    let fistYearContent = fistYearTemplate.getElementById("gm1_content");
    content.append(fistYearContent);
}


function invokeSecondYear() {
    clear();

    let secondYearTemplate = document.getElementById("gm2_template").content.cloneNode(true);
    let secondYearContent = secondYearTemplate.getElementById("gm2_content");

    content.append(secondYearContent);
}


let btn_gm1 = document.getElementById("btn_gm1");
let btn_gm2 = document.getElementById("btn_gm2");

btn_gm1.addEventListener("click", invokeFirstYear);
btn_gm2.addEventListener("click", invokeSecondYear);

invokeFirstYear();