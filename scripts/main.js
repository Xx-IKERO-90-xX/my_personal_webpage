let contentDiv = document.getElementById('content');

function clear() {
    contentDiv.innerHTML = "";
}

function invokeMainTemplate() {
    clear();

    let mainTemplate = document.getElementById('main-template').content.cloneNode(true);
    let content = mainTemplate.getElementById('main-content');

    contentDiv.append(content);
}

invokeMainTemplate();
