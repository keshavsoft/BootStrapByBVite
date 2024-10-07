const DeleteAllMessages = () => {
    localStorage.removeItem('messages');
    document.getElementById('MessageContainerId').innerHTML = '';
};

export default DeleteAllMessages;
