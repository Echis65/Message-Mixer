// Import the encryptors functions here.
let encryptors = require("./encryptors.js")
let caesarCipher = encryptors.caesarCipher;
let reverseCipher = encryptors.reverseCipher;
let symbolCipher = encryptors.symbolCipher;

const encodeMessage = (str) => {
  // Use the encryptor functions here.
  let encodedMessage = reverseCipher(symbolCipher(caesarCipher(str,6)))
  return encodedMessage
}

const decodeMessage = (str) => {
  // Use the encryptor functions here.
  let decodedMessage = caesarCipher(symbolCipher(reverseCipher(str)),-6)
  return decodedMessage
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
if(process.argv[2] === 'encode'){
process.stdout.write('Enter the message you would like to encrypt...\n> ');
}else{
  process.stdout.write('Enter the message you would like to decrypt...\n> ');
}

process.stdin.on('data', handleInput);