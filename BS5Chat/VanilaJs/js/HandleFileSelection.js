const HandleFileSelection = (event) => {
    let file = event.target.files[0];
    if (file) {
        document.getElementById('fileName').textContent = file.name;
    }
};

export default HandleFileSelection;
