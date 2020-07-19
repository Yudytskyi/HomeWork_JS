'use strict';

function checkCorrectBracketSequence(str, options = {
    brackets: {
        '(': ')',
        '{': '}',
        '[': ']',
        '<': '>',
    }
}) {
    const maxLength = Math.max(...Object.keys(options.brackets).map(i => i.length));

    if (maxLength < 2) {
        console.log(lightCheck(str, options));
    } else {
        console.log(fullCheck(str, options));
    }
}

const options = {
    brackets: {
        '(': ')',
        'ab': 'ba',
        'ab<--<==': '==>-->ba',
        '{': '}',
        '<--': '-->',
        '[': ']',
        '<=': '=>',
        '<': '>',
    }
};

const text1 =
    "klad;lkg( ;kj;jh{hjglhfg(;ihh[poug kluhglgh{lg;ogu }hg<>gli ljig(uyflfy)kh]) gyf78}lj)hjg;(kgc_)";

const text2 = '( { ( [ { } < > ] ( ) ) } ) ()';

const text3 = '<-- (ab { <= (ab<--<== [ { } < > ] ( ) ==>-->ba) => } ba) () -->';

checkCorrectBracketSequence(text1);

checkCorrectBracketSequence(text2, options);

checkCorrectBracketSequence(text3, options);


