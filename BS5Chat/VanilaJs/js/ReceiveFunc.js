import jFLocalMessageInputId from './jFLocalMessageInputId.js';
import SaveMessage from './SaveMessage.js';
import jFLocalForTemplate from './jFLocalForTemplate.js';

const ReceiveFunc = () => {
    let message = jFLocalMessageInputId();
    if (message) {
        let index = SaveMessage(message, 'receive');
        jFLocalForTemplate(message, 'TemplateFromReceiveId', null);
        let jVarLocalMessageInput = document.getElementById('MessageInputId');
        jVarLocalMessageInput.value = '';
        jVarLocalMessageInput.focus();
    }
};

export default ReceiveFunc;
