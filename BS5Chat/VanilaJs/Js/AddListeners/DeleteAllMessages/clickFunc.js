let StartFunc = () => {
    jFLocalToInputMessageContainerId("");
};

let jFLocalToInputMessageContainerId = (inValue) => {
    let jVarLocalHtmlId = 'MessageContainerId';
    let jVarLocalMessageContainerId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalMessageContainerId === null === false) {
        jVarLocalMessageContainerId.innerHTML = inValue;
    };
};

export { StartFunc };
