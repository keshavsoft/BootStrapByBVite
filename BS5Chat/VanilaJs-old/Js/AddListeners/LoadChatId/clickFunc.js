let StartFunc = () => {
    LoadMessages().then();
};

let jFLocalForTemplate = (message, templateId) => {
    let jVarLocalMessageContainerId = document.getElementById('MessageContainerId');

    let jVarLocalTemplateFromHtml = document.getElementById(templateId);
    let clone = jVarLocalTemplateFromHtml.content.cloneNode(true);
    clone.querySelector("p").innerHTML = message;

    jVarLocalMessageContainerId.appendChild(clone);
};

let jFLocalFetch = async () => {
    const response = await fetch('chat.json');
    const movies = await response.json();
    return movies;
};

let LoadMessages = async () => {
    let messages = await jFLocalFetch();

    messages.forEach((msgObj, index) => {
        let templateId = msgObj.Type === 'Send' ? 'TemplateFromSendId' : 'TemplateFromReceiveId';

        jFLocalForTemplate(msgObj.Message, templateId, index);
    });
};

export { StartFunc };
