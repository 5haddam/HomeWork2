firstLine = prompt('Enter the first line');
secondLine = prompt('Enter the second line');
thirdLine = prompt('Enter the third line');

alert(`${firstLine}${secondLine}${thirdLine}`);

fiveDigitNumber = +prompt('Enter five-digit number');

fiveDigitNumberWithSpaces = `${fiveDigitNumber.toString()[0]} ${fiveDigitNumber.toString()[1]} ${fiveDigitNumber.toString()[2]} ${fiveDigitNumber.toString()[3]} ${fiveDigitNumber.toString()[4]}`;
alert(fiveDigitNumberWithSpaces);