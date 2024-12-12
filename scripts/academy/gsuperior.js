let gsContent = document.getElementById("grado_superior");

function clearGS() {
    gsContent.innerHTML = "";
}

function invokeFirstYearGS() {
    clearGS();

    let firstYearTemplate = document.getElementById("gs1_template").content.cloneNode(true);
    let fistYearContent = firstYearTemplate.getElementById("gs1_content");

    gsContent.append(fistYearContent);
}

function invokeSecondYearGS() {
    clearGS();

    let secondYearTemplate = document.getElementById("gs2_template").content.cloneNode(true);
    let secondYearContent = secondYearTemplate.getElementById("gs2_content");

    gsContent.append(secondYearContent);
}

let btn_gs1 = document.getElementById("btn_gs1");
let btn_gs2 = document.getElementById("btn_gs2");

btn_gs1.addEventListener("click", invokeFirstYearGS);
btn_gs2.addEventListener("click", invokeSecondYearGS);

invokeFirstYearGS();