let contentDiv = document.getElementById('content');

function clear() {
    contentDiv.innerHTML = "";
}

function invokeMainTemplate() {
    clear();

    let mainTemplate = document.getElementById('main_template').content.cloneNode(true);
    let content = mainTemplate.getElementById('mainContent');

    contentDiv.append(content);
}

function invokePanaGamingTemplate() {
    clear();

    let panaGamingTemplate = document.getElementById('panagaming_template').content.cloneNode(true);
    let content = panaGamingTemplate.getElementById('panaGamingContent');

    contentDiv.append(content);
}

function invokeAcademyTemplate() {
    clear();

    let academyTemplate = document.getElementById('academy_template').content.cloneNode(true);
    let content = academyTemplate.getElementById('academyContent');

    contentDiv.append(content);
}

let btnMain = document.getElementById("btn_main");
let btnProyect = document.getElementById("btn_proyect");
let btnAcademy = document.getElementById("btn_academy");

btnMain.addEventListener("click", invokeMainTemplate);
btnProyect.addEventListener("click", invokePanaGamingTemplate);
btnAcademy.addEventListener("click", invokeAcademyTemplate);

invokeMainTemplate();
