function firstNonRepeatingLetter(s) {
    const lowerCaseStr = s.toLowerCase();
    for (let i = 0; i < lowerCaseStr.length; i++) {
        const char = lowerCaseStr[i];   
        if (lowerCaseStr.indexOf(char) === lowerCaseStr.lastIndexOf(char)) {
            return s[i];
        }
    }
    return '';
}
