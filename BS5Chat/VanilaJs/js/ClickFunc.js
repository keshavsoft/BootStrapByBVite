import jFLocalMessageInputId from './jFLocalMessageInputId.js';
import SaveMessage from './SaveMessage.js';
import jFLocalForTemplate from './jFLocalForTemplate.js';

const ClickFunc = () => {
    let message = jFLocalMessageInputId();
    if (message) {
        let index = SaveMessage(message, 'send');
        jFLocalForTemplate(message, 'TemplateFromSendId', null);
        let jVarLocalMessageInput = document.getElementById('MessageInputId');
        jVarLocalMessageInput.value = '';
        jVarLocalMessageInput.focus();
    }
};

export default ClickFunc;
