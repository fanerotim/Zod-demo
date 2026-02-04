import { z } from '../../node_modules/zod/index.js';
import {} from '../types/userInput.js';
// create schema
const Schema = z.object({
    author: z.string().trim().min(5, { message: 'Minimum length is 5 characters' }).max(20, { message: 'Maximum length is 20 characters!' }),
    text: z.string().trim().min(10, { message: 'Minimum length is 10 characters' }).max(100, { message: 'Maximum length is 100 characters!' })
});
export const validator = (userInput) => {
    return Schema.parse(userInput);
};
//# sourceMappingURL=valitaror.js.map