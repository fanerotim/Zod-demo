import type { UserInput } from "../../types/userInput.js"

export const showSuccess = (result: UserInput) => {
    // create a success message
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Successfully submitted form!';
    paragraph.style.color = 'green';
    paragraph.style.fontWeight = 'bold';
    paragraph.style.textAlign = 'center';
    // get form, so we can replace it with the success message
    const form = document.querySelector('form')!;
    form.replaceWith(paragraph);

    // create a back button, so we can show form again
    const button = document.createElement('button');
    button.textContent = 'Fill the form again';
    button.style.display = 'block';
    button.style.margin = '2rem auto';
    paragraph.append(button);

    // add event listener to the button and refresh page on click
    button.addEventListener('click', () => {
        window.location.reload();
    })

    // show the entered by the user data on the page
    // get the container that will hold user input
    const container = <HTMLDivElement>document.getElementById('container')!;
    // create a div wrapper for each newly entered input
    const div = document.createElement('div');
    // store entered by the user text in an <h3> element
    const text = document.createElement('h3');
    text.textContent = result.text;
    // author stored in a <p> element
    const author = document.createElement('p');
    author.textContent = result.author;
    // add both text and author to their div container
    div.style.margin = '0 auto';
    div.append(text, author);
    // and append the div container to the container
    container.append(div);
}