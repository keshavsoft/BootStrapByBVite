const SaveMessage = (message, type, fileUrl = null) => {
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    let index = messages.length;
    messages.push({ message, type, fileUrl });
    localStorage.setItem('messages', JSON.stringify(messages));
    return index;
};

export default SaveMessage;
