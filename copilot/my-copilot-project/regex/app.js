// regex to match the phone in the format (xxx) xxx-xxxx
const phoneRegex = /\(\d{3}\) \d{3}-\d{4}/;

// test phoneRegex against the phone number with console.log
console.log(phoneRegex.test('(123) 456-7890')); // true

