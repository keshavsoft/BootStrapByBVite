import StartFunc from '../BS5Chat/VanilaJs/js/StartFunc.js';
import HandleFileUpload from '../BS5Chat/VanilaJs/js/HandleFileUpload.js';

document.addEventListener('keydown', (event) => {
    if (event.key === "Enter" && !event.ctrlKey) {
        event.preventDefault();
        HandleFileUpload(event, 'send');
    } else if (event.key === "Enter" && event.ctrlKey) {
        event.preventDefault();
        HandleFileUpload(event, 'receive');
    }
});

StartFunc();
