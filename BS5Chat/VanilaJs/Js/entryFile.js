import { StartFunc as AddListeners } from "./AddListeners/entryFile.js";

let StartFunc = () => {
    AddListeners();
    // Load messages from local storage when the page loads
    // LoadMessages().then();
};

StartFunc();
