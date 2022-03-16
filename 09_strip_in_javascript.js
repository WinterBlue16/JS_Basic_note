let sampleString = '     Hello javascript!     ';

// strip
function trim(params) {
    return params.replace(/^\s+|\s+$/gm, '')
}

console.log(trim(sampleString));

// lstrip
function ltrim(params) {
    return params.replace(/^\s+/gm, '');
}

console.log(ltrim(sampleString));

// rstrip
function rtrim(params) {
    return params.replace(/\s+$/gm, '');
}

console.log(rtrim(sampleString));