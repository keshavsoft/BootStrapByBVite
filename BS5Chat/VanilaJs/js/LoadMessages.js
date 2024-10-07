import jFLocalForTemplate from './jFLocalForTemplate.js';

const LoadMessages = () => {
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.forEach((msgObj, index) => {
        let templateId = msgObj.type === 'send' ? 'TemplateFromSendId' : 'TemplateFromReceiveId';
        jFLocalForTemplate(msgObj.message, templateId, msgObj.fileUrl);
    });
};

export default LoadMessages;
