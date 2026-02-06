;
export const showError = (error) => {
    // transform error data, so we can obtain the information needed to show errors
    const errorValues = Object.values(error)[1];
    const errorData = JSON.parse(errorValues);
    for (let data of errorData) {
        // get id of input that has error
        const erroredInput = data.path[0];
        // get input coordinates
        const input = document.getElementById(erroredInput);
        const coordinates = input.getBoundingClientRect();
        // create a paragraph, add basic styles, add error message and attach it to page / DOM
        const paragraph = document.createElement('p');
        paragraph.textContent = data.message;
        paragraph.style.color = 'red';
        paragraph.style.position = 'absolute';
        paragraph.style.fontSize = '.7rem';
        // add paragraph to page, so it can be positioned on the page
        document.body.append(paragraph);
        // position error messages
        paragraph.style.left = coordinates.right - paragraph.clientWidth + 'px';
        paragraph.style.top = coordinates.bottom + 'px';
    }
};
//# sourceMappingURL=showError.js.map