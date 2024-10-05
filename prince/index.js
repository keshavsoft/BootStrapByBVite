let StartFunc = () => {
    let jVarLocalSendButtonId = document.getElementById('SendButtonId');

    jVarLocalSendButtonId.addEventListener("click", ClickFunc);
};

let ClickFunc = () => {
    console.log("button clicked");

    let jVarLocalMessageContainerId = document.getElementById('MessageContainerId');

    let jVarLocalTemplateFromHtml = document.getElementById('TemplateFromSendId');
    let clone = jVarLocalTemplateFromHtml.content.cloneNode('true');

    jVarLocalMessageContainerId.appendChild(clone)
};

StartFunc();

// export { StartFunc };