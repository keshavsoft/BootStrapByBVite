let StartFunc = () => {
    let message = jFLocalMessageInputId();

    if (message) {
        let index = SaveMessage(message, 'receive');
        jFLocalForTemplate(message, 'TemplateFromReceiveId', index);

        // Clear the input field after sending the message
        let jVarLocalMessageInput = document.getElementById('MessageInputId');
        jVarLocalMessageInput.value = '';

        // Focus the input field after sending the message
        jVarLocalMessageInput.focus();
    }
};

let jFLocalMessageInputId = () => {
    let jVarLocalMessageInputId = 'MessageInputId';
    let jVarLocalHtmlId = document.getElementById(jVarLocalMessageInputId);

    if (jVarLocalHtmlId !== null) {
        return jVarLocalHtmlId.value.trim();
    }
    return '';
};

let SaveMessage = (message, type) => {
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    let index = messages.length;
    messages.push({ message, type });
    localStorage.setItem('messages', JSON.stringify(messages));
    return index;
};

let jFLocalForTemplate = (message, templateId) => {
    let jVarLocalMessageContainerId = document.getElementById('MessageContainerId');

    let jVarLocalTemplateFromHtml = document.getElementById(templateId);
    let clone = jVarLocalTemplateFromHtml.content.cloneNode(true);
    clone.querySelector("p").innerHTML = message;

    jVarLocalMessageContainerId.appendChild(clone);
};

export { StartFunc };
