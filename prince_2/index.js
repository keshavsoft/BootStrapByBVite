let StartFunc = () => {
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

    // Load messages from local storage when the page loads
    LoadMessages();
};

let jFLocalForTemplate = (message, templateId, fileUrl = null) => {
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
        jFLocalForTemplate(message, 'TemplateFromSendId', null);

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
        jFLocalForTemplate(message, 'TemplateFromReceiveId', null);

        // Clear the input field after sending the message
        let jVarLocalMessageInput = document.getElementById('MessageInputId');
        jVarLocalMessageInput.value = '';

        // Focus the input field after sending the message
        jVarLocalMessageInput.focus();
    }
};

let HandleFileSelection = (event) => {
    let file = event.target.files[0];
    if (file) {
        document.getElementById('fileName').textContent = file.name;
    }
};

let HandleFileUpload = (event, type) => {
    let file = document.getElementById('upload').files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = (e) => {
            let fileUrl = e.target.result;
            let message = "File attached: " + file.name;
            let index = SaveMessage(message, type, fileUrl);
            let templateId = type === 'send' ? 'TemplateFromSendId' : 'TemplateFromReceiveId';
            jFLocalForTemplate(message, templateId, fileUrl);

            // Clear the selected file name after sending or receiving the file
            document.getElementById('fileName').textContent = '';
            document.getElementById('upload').value = '';
        };
        reader.readAsDataURL(file);
    }
};

let SaveMessage = (message, type, fileUrl = null) => {
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    let index = messages.length;
    messages.push({ message, type, fileUrl });
    localStorage.setItem('messages', JSON.stringify(messages));
    return index;
};

let LoadMessages = () => {
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.forEach((msgObj, index) => {
        let templateId = msgObj.type === 'send' ? 'TemplateFromSendId' : 'TemplateFromReceiveId';
        jFLocalForTemplate(msgObj.message, templateId, msgObj.fileUrl);
    });
};

let DeleteAllMessages = () => {
    localStorage.removeItem('messages');
    document.getElementById('MessageContainerId').innerHTML = '';
};

document.addEventListener('keydown', (event) => {
    if (event.key === "Enter" && !event.ctrlKey) {
        event.preventDefault();
        HandleFileUpload(event, 'send');
    } else if (event.key === "Enter" && event.ctrlKey) {
        event.preventDefault();
        HandleFileUpload(event, 'receive');
    }
});

StartFunc();
