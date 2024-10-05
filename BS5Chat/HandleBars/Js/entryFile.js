import { StartFunc as AddListeners } from "./AddListeners/entryFile.js";

let StartFunc = () => {
    // AddListeners();
    // Load messages from local storage when the page loads
    LoadMessages().then();
};

let jFLocalAddListeners = () => {
    let jVarLocalSendButtonId = document.getElementById('SendButtonId');
    jVarLocalSendButtonId.addEventListener("click", ClickFunc);

    let jVarLocalReceiveButtonId = document.getElementById('ReceiveButtonId');
    jVarLocalReceiveButtonId.addEventListener("click", ReceiveFunc);

    let jVarLocalDeleteAllMessages = document.getElementById('DeleteAllMessages');
    jVarLocalDeleteAllMessages.addEventListener("click", DeleteAllMessages);

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

let jFLocalForTemplate = ({ inChatArray }) => {
    let jVarLocalMessageContainerId = document.getElementById('MessageContainerId');
    let jVarLocalTemplateForChatId = document.getElementById('TemplateForChatId');
    let clone = jVarLocalTemplateForChatId.content.cloneNode('true');
    const s = new XMLSerializer();
    const str = s.serializeToString(clone);

    var template = Handlebars.compile(str);

    jVarLocalMessageContainerId.innerHTML = template({ ChatArray: inChatArray });
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

let LoadMessages = async () => {
    let messages = await jFLocalFetch();

    jFLocalForTemplate({ inChatArray: messages });
};

let jFLocalFetch = async () => {
    const response = await fetch('chat.json');
    const movies = await response.json();
    return movies;
};

let DeleteAllMessages = () => {
    localStorage.removeItem('messages');
    document.getElementById('MessageContainerId').innerHTML = '';
};

StartFunc();
