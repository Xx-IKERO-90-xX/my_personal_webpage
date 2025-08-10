let contentDiv = document.getElementById('content');

let btnMain = document.getElementById('btn-main');
let btnEducation = document.getElementById('btn-education');
let btnProyectos = document.getElementById('btn-proyectos');
let btnContacts = document.getElementById('btn-contacts');

function clear() {
    contentDiv.innerHTML = "";
}

function invokeEducationTemplate() {
    clear();
    let educationTemplate = document.getElementById('education-template').content.cloneNode(true);
    let content = educationTemplate.getElementById('education-content');
    
    contentDiv.append(content);
}

function invokeMainTemplate() {
    clear();

    let mainTemplate = document.getElementById('main-template').content.cloneNode(true);
    let content = mainTemplate.getElementById('main-content');

    contentDiv.append(content);
}

btnMain.addEventListener('click', invokeMainTemplate);
btnEducation.addEventListener('click', invokeEducationTemplate);

invokeMainTemplate();
