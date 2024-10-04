import sidebarItems from './sideBarItems.json' with {type: 'json'};

const StartFunc = ({ mode, inFilesArray, inTableName }) => {
    const variables = {};
    let LocalFiles = inFilesArray;

    Object.keys(LocalFiles).forEach((filename) => {
        variables[filename + '.html'] = {
            web_title: "Mazer Admin Dashboard",
            filename: filename + '.html',
            sidebarItems,
            isDev: mode === 'development'
        };
    });

    return variables;
};

export { StartFunc };