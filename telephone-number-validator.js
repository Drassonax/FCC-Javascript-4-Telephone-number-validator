function telephoneCheck(str) {
    // Good luck!
    let phoneNumberRegEx = [
      /^\d\d\d-\d\d\d-\d\d\d\d$/,
      /^\((?=\d\d\d\))\d\d\d\)?\d\d\d-\d\d\d\d$/,
      /^\((?=\d\d\d\))\d\d\d\)? \d\d\d-\d\d\d\d$/,
      /^\d\d\d \d\d\d \d\d\d\d$/,
      /^\d\d\d\d\d\d\d\d\d\d$/,
      /^1 ?\d\d\d-\d\d\d-\d\d\d\d$/,
      /^1 ?\((?=\d\d\d\))\d\d\d\)?\d\d\d-\d\d\d\d$/,
      /^1 ?\((?=\d\d\d\))\d\d\d\)? \d\d\d-\d\d\d\d$/,
      /^1 ?\d\d\d \d\d\d \d\d\d\d$/,
      /^1 ?\d\d\d\d\d\d\d\d\d\d$/
    ]
    for (let i=0; i<phoneNumberRegEx.length; i++) {
      if (phoneNumberRegEx[i].test(str)) {
        console.log(i)
        return true
      }
    }
    return false
  }