let content = document.getElementById("grado_superior");

function clear() {
    content.innerHTML = "";
}

function invokeFistYear() {
    clear();

    let firstYearTemplate = document.getElementById("gs1_template").content.cloneNode(true);
    let fistYearContent = firstYearTemplate.getElementById("gs1_content");

    content.append(fistYearContent);
}

function invokeSecondYear() {
    clear();

    let secondYearTemplate = document.getElementById("gs2_template").content.cloneNode(true);
    let secondYearContent = secondYearTemplate.getElementById("gs2_content");

    content.append(secondYearContent);
}

let btn_gs1 = document.getElementById("btn_gs1");
let btn_gs2 = document.getElementById("btn_gs2");

btn_gs1.addEventListener("click", invokeFistYear);
btn_gs2.addEventListener("click", invokeSecondYear);

invokeFistYear();