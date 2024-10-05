let StartFunc = () => {
    let jVarLocalSendButtonId = document.getElementById('SendButtonId');

    jVarLocalSendButtonId.addEventListener("click", ClickFunc);
};

let ClickFunc = () => {
    console.log("button clicked");

};

StartFunc();

// export { StartFunc };