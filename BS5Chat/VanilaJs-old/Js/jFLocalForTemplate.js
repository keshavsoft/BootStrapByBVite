const jFLocalForTemplate = (message, templateId, fileUrl = null) => {
    let jVarLocalMessageContainerId = document.getElementById('MessageContainerId');
    let jVarLocalTemplateFromHtml = document.getElementById(templateId);
    let clone = jVarLocalTemplateFromHtml.content.cloneNode(true);
    clone.querySelector("p").innerHTML = message;
    if (fileUrl) {
        let imgElement = clone.querySelector(".uploaded-file");
        imgElement.src = fileUrl;
        imgElement.style.display = 'block';
    }
    jVarLocalMessageContainerId.appendChild(clone);
};

export default jFLocalForTemplate;
