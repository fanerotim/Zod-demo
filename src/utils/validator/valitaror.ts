import { ZodError } from '../../../node_modules/zod/index.js';
import { z } from '../../../node_modules/zod/index.js';
import { type UserInput } from '../../types/userInput.js';
import { showError } from '../show-error/showError.js';
import { showSuccess } from '../show-success/showSuccess.js';

// create schema
const Schema = z.object({
    author: z.string().trim().min(5, { message: 'Minimum length is 5 characters' }).max(20, { message: 'Maximum length is 20 characters!' }),
    text: z.string().trim().min(10, { message: 'Minimum length is 10 characters' }).max(100, { message: 'Maximum length is 100 characters!' })
})

export const validator = (userInput: UserInput) => {
    // before validating user input, remove any previous error message if there are such
    const errorParagraphs = Array.from(document.querySelectorAll('p'));
    
    if (errorParagraphs.length > 0) {
        for (let p of errorParagraphs) {
            p.remove();
        }
    }

    try {
        // show success message if form is submitted successfully
        const result = Schema.parse(userInput);
        showSuccess(result);
    } catch (err) {
        // show error message if form submission fails
        showError(err as ZodError)
    }
}