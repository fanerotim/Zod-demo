import { z } from '../../node_modules/zod/index.js';
import { type UserInput } from '../types/userInput.js';

export const validator = (userInput: UserInput) => {
    console.log(userInput);
}