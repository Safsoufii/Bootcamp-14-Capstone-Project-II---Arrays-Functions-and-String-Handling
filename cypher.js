function encode(message) {
    // create a variable to store the encoded message
    let encodedMessage = '';
  
    // loop through each character in the message
    for (let i = 0; i < message.length; i++) {
      // get the character at the current index
      let char = message[i];
  
      // check if the character is a letter
      if (char >= 'a' && char <= 'z') {
        // convert the letter to its ASCII code
        let code = char.charCodeAt(0);
  
        // shift the code forwards by 15 places
        code += 15;
  
        // if the code is greater than 'z', we need to wrap around to the start of the alphabet
        while (code > 'z'.charCodeAt(0)) {
          code -= 26;
        }
  
        // convert the code back to a letter and add it to the encoded message
        encodedMessage += String.fromCharCode(code);
      } else if (char >= 'A' && char <= 'Z') {
        // similar process for uppercase letters
        let code = char.charCodeAt(0);
        code += 15;
        while (code > 'Z'.charCodeAt(0)) {
          code -= 26;
        }
        encodedMessage += String.fromCharCode(code);
      } else {
        // for spaces and punctuation, just add the original character to the encoded message
        encodedMessage += char;
      }
    }
  
    // return the encoded message
    return encodedMessage;
  }
  
  let encodedMessage = encode('Hello, World!');
  console.log(encodedMessage);
  
