import React from 'react';

const parseHTMLString = (htmlString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    return doc.body;
};

const StringToJSX = ({ htmlString }) => {
    const parsedElement = parseHTMLString(htmlString);

    return (
        <div>
            {React.cloneElement(parsedElement, {})}
        </div>
    );
};

export default StringToJSX;