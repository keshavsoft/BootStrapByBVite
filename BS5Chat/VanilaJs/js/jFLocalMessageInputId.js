const jFLocalMessageInputId = () => {
    let jVarLocalMessageInputId = 'MessageInputId';
    let jVarLocalHtmlId = document.getElementById(jVarLocalMessageInputId);

    if (jVarLocalHtmlId !== null) {
        return jVarLocalHtmlId.value.trim();
    }
    return '';
};

export default jFLocalMessageInputId;
