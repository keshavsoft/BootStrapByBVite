import SaveMessage from './SaveMessage.js';
import jFLocalForTemplate from './jFLocalForTemplate.js';

const HandleFileUpload = (event, type) => {
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

export default HandleFileUpload;
