'use strict';

function fullCheck(str, options) {
    const openBrackets = Object.keys(options.brackets).sort((a, b) => a.length - b.length);
    const openBracketsFirstLetter = openBrackets.map(i => i[0]);
    const maxLengthBracket = Math.max(...openBrackets.map(i => i.length));
    const closeBrackets = Object.values(options.brackets).sort((a, b) => a.length - b.length);
    const closeBracketsFirstLetter = closeBrackets.map(i => i[0]);
    const bracketsStack = [];
    let currentLetter = '';

    for (let i = 0; i < str.length; i++) {
        if (openBracketsFirstLetter.includes(str[i])) {

            for (let j = 1; j <= maxLengthBracket; j++) {
                if (openBrackets.includes(str.slice(i, i + j))) {
                    currentLetter = str.slice(i, i + j);
                }
            }

            bracketsStack.push(currentLetter);
            i += currentLetter.length - 1;
            continue;
        }

        if (closeBracketsFirstLetter.includes(str[i])) {

            for (let j = 1; j <= maxLengthBracket; j++) {
                if (closeBrackets.includes(str.slice(i, i + j))) {
                    currentLetter = str.slice(i, i + j);
                }
            }

            if (options.brackets[bracketsStack[bracketsStack.length - 1]] === currentLetter) {
                bracketsStack.pop();
                i += currentLetter.length - 1;
            } else {
                return false;
            }
        }
    }

    return bracketsStack.length === 0;
}