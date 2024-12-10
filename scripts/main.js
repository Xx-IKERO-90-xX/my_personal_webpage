
function clear() {
    let contentDiv = document.getElementById('content');
    contentDiv.innerHTML = "";
}

function invokeMainTemplate() {
    clear();

    let contentDiv = document.getElementById('content');
    let mainTemplate = document.getElementById('main_template').content.cloneNode = true;
    content = mainTemplate.getElementsByClassName('main');

    contentDiv.append(content);
}

function invokePanaGamingTemplate() {
    clear();

    let contentDiv = document.getElementById('content');
    let panaGamingTemplate = contentDiv.getElementById('panagaming_template').content.cloneNode = true;
    let content = panaGamingTemplate.getElementById('panaGamingContent');

    contentDiv.append(content);
}

function invokeAcademyTemplate() {
    clear();

    let contentDiv = document.getElementById('content');
    let academyTemplate = document.getElementById('academy_template').content.cloneNode = true;
    let content = academyTemplate.getElementById('academyContent');

    contentDiv.append(content);
}

let btnMain = document.getElementById("btn_main");
let btnProyect = document.getElementById("btn_proyect");
let btnAcademy = document.getElementById("btn_academy");

btnMain.addEventListener("click", invokeMainTemplate());
btnProyect.addEventListener("click", invokePanaGamingTemplate());
btnAcademy.addEventListener("click", invokeAcademyTemplate());

invokeMainTemplate();



