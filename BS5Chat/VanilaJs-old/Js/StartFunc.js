import ClickFunc from './ClickFunc.js';
import ReceiveFunc from './ReceiveFunc.js';
import DeleteAllMessages from './DeleteAllMessages.js';
import HandleFileSelection from './HandleFileSelection.js';
import LoadMessages from './LoadMessages.js';

const StartFunc = () => {
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

    let jVarLocalUploadInput = document.getElementById('upload');
    jVarLocalUploadInput.addEventListener("change", HandleFileSelection);

    // Focus the input box when the page loads
    jVarLocalMessageInputId.focus();

    LoadMessages();
};

export default StartFunc;
