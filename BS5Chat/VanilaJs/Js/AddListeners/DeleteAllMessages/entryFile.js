import { StartFunc as clickFunc } from "./clickFunc.js";

let StartFunc = () => {
    let jVarLocalSendButtonId = document.getElementById('DeleteAllMessages');
    jVarLocalSendButtonId.addEventListener("click", clickFunc);
};

export { StartFunc };
