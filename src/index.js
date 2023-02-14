const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode(expr) {
	let result = '';
	let chunks = expr.match(/.{1,10}/g);

	chunks.forEach(item => {
		let morseArr = [];
		let chars = item.match(/.{1,2}/g);
		if (item === '**********') {
			morseArr.push(' ');
		} else {
			chars.forEach(char => {
				if (char === '10') {
					morseArr.push('.')
				} else if (char === '11') {
					morseArr.push('-')
				}
			})
		}
		result += (MORSE_TABLE[morseArr.join('')]) ? MORSE_TABLE[morseArr.join('')] : ' ';
	});

	return result;

}
module.exports = {
	decode
}