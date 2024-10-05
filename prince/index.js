let StartFunc = () => {
    let jVarLocalSendButtonId = document.getElementById('SendButtonId');

    jVarLocalSendButtonId.addEventListener("click", ClickFunc);
};

let jFLocalForTemplate = () => {
    console.log("button clicked");

    let jVarLocalMessageContainerId = document.getElementById('MessageContainerId');
    let jVarLocalMessage = jFLocalMessageInputId();

    let jVarLocalTemplateFromHtml = document.getElementById('TemplateFromSendId');
    let clone = jVarLocalTemplateFromHtml.content.cloneNode('true');
    clone.querySelector("p").innerHTML = jVarLocalMessage;

    jVarLocalMessageContainerId.appendChild(clone)
};

let jFLocalMessageInputId = () => {
    let jVarLocalMessageInputId = 'MessageInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalMessageInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let ClickFunc = () => {
    jFLocalForTemplate();
};

StartFunc();

// export { StartFunc };