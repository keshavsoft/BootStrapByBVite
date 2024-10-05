let StartFunc = () => {
    let jVarLocalSendButtonId = document.getElementById('SendButtonId');
    jVarLocalSendButtonId.addEventListener("click", ClickFunc);

    let jVarLocalMessageInputId = document.getElementById('MessageInputId');
    jVarLocalMessageInputId.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default form submission
            ClickFunc();
        }
    });
};

let jFLocalForTemplate = () => {
    console.log("button clicked");

    let jVarLocalMessageContainerId = document.getElementById('MessageContainerId');
    let jVarLocalMessage = jFLocalMessageInputId();

    let jVarLocalTemplateFromHtml = document.getElementById('TemplateFromSendId');
    let clone = jVarLocalTemplateFromHtml.content.cloneNode(true);
    clone.querySelector("p").innerHTML = jVarLocalMessage;

    jVarLocalMessageContainerId.appendChild(clone);

    // Clear the input field after sending the message
    let jVarLocalMessageInput = document.getElementById('MessageInputId');
    jVarLocalMessageInput.value = '';

    // Focus the input field after sending the message
    jVarLocalMessageInput.focus();
};

let jFLocalMessageInputId = () => {
    let jVarLocalMessageInputId = 'MessageInputId';
    let jVarLocalHtmlId = document.getElementById(jVarLocalMessageInputId);

    if (jVarLocalHtmlId !== null) {
        return jVarLocalHtmlId.value.trim();
    }
    return '';
};

let ClickFunc = () => {
    jFLocalForTemplate();
};


StartFunc();
