'use strict';

function lightCheck(str, options = {
    brackets: {
        '(': ')',
        '{': '}',
        '[': ']',
        '<': '>',
    }
}) {
    const bracketsStack = [];
    const brackets = options.brackets;

    for (const s of str) {
        if (brackets[s]) {
            bracketsStack.push(s);
            continue;
        }
        if (Object.values(brackets).includes(s)) {
            if (brackets[bracketsStack[bracketsStack.length - 1]] === s) {
                bracketsStack.pop();
            } else {
                return false;
            }
        }
    }

    return bracketsStack.length === 0;
}

