import { StartFunc as SendButtonId } from "./SendButtonId/entryFile.js";
import { StartFunc as ReceiveButtonId } from "./ReceiveButtonId/entryFile.js";
import { StartFunc as DeleteAllMessages } from "./DeleteAllMessages/entryFile.js";
let StartFunc = () => {
    jFLocalAddListeners();
    SendButtonId();
    ReceiveButtonId();
    DeleteAllMessages();
};


let jFLocalAddListeners = () => {
    // let jVarLocalSendButtonId = document.getElementById('SendButtonId');
    // jVarLocalSendButtonId.addEventListener("click", ClickFunc);

    // let jVarLocalReceiveButtonId = document.getElementById('ReceiveButtonId');
    // jVarLocalReceiveButtonId.addEventListener("click", ReceiveFunc);

    // let jVarLocalDeleteAllMessages = document.getElementById('DeleteAllMessages');
    // jVarLocalDeleteAllMessages.addEventListener("click", DeleteAllMessages);

    let jVarLocalMessageInputId = document.getElementById('MessageInputId');
    jVarLocalMessageInputId.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && !event.ctrlKey) {
            event.preventDefault(); // Prevent the default form submission
            ClickFunc();
        } else if (event.key === "Enter" && event.ctrlKey) {
            event.preventDefault(); // Prevent the default form submission
            ReceiveFunc();
        }
    });
};

let jFLocalForTemplate = (message, templateId) => {
    let jVarLocalMessageContainerId = document.getElementById('MessageContainerId');

    let jVarLocalTemplateFromHtml = document.getElementById(templateId);
    let clone = jVarLocalTemplateFromHtml.content.cloneNode(true);
    clone.querySelector("p").innerHTML = message;

    jVarLocalMessageContainerId.appendChild(clone);
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
    let message = jFLocalMessageInputId();
    if (message) {
        let index = SaveMessage(message, 'send');
        jFLocalForTemplate(message, 'TemplateFromSendId', index);

        // Clear the input field after sending the message
        let jVarLocalMessageInput = document.getElementById('MessageInputId');
        jVarLocalMessageInput.value = '';

        // Focus the input field after sending the message
        jVarLocalMessageInput.focus();
    }
};

let ReceiveFunc = () => {
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

let SaveMessage = (message, type) => {
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    let index = messages.length;
    messages.push({ message, type });
    localStorage.setItem('messages', JSON.stringify(messages));
    return index;
};

export { StartFunc };
