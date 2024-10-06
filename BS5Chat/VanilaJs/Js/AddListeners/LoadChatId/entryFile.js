import { StartFunc as ClickFunc } from "./clickFunc.js";

let StartFunc = () => {
    let jVarLocalSendButtonId = document.getElementById('LoadChatId');
    jVarLocalSendButtonId.addEventListener("click", ClickFunc);
};

export { StartFunc };
