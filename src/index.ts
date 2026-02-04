import { validator } from "./utils/valitaror.js";

// get form
const form = document.querySelector('form')!;
// attach a click event listener
form.onsubmit = function(e) {
    // prevent default behavior
    e.preventDefault();
    // get uset input
    const author = (form.elements[0] as HTMLInputElement).value;
    const text = (form.elements[1] as HTMLInputElement).value;
    // pass input to validator
    const isValid = validator({author, text});
    
    if (!isValid) {
        console.log(isValid);
    }
}