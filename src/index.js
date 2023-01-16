module.exports = function toReadable(number) {
    if (number == 0) {
        return 'zero';
    }

    var numberSting = number.toString();
    var result = '';

    for (let i = 0; i < numberSting.length; i++) {
        var symbol = numberSting.charAt(i);
        var appendix = '';
        var shouldReplace = false;
        
        if (i == 0 && numberSting.length == 3) {
            appendix = ' hundred ';
        }
        if (i == 1 && numberSting.length == 3) {
            if (symbol != '0') {
                appendix = 'ty ';
                shouldReplace = true;
            }
            var lastNumber = parseInt(numberSting.substring(1));
            if (lastNumber >= 10 && lastNumber < 20) {
                result = result + lessTwentyTransform(lastNumber.toString());
                break;
            }
        }
        if (i == 0 && numberSting.length == 2) {
            appendix = 'ty ';
            shouldReplace = true;
            var lastNumber = parseInt(numberSting.substring(i));
            if (lastNumber >= 10 && lastNumber < 20) {
                result = result + lessTwentyTransform(lastNumber.toString());
                break;
            }
        }
        result = result + mainTransform(symbol, shouldReplace) + appendix;
    }
    return result.trim();
}

function mainTransform(char, shouldReplace) {
    switch(char) {
        case '1': return 'one';
        case '2': {
            if (!shouldReplace) {
                return 'two';
            } else {
                return 'twen'
            }
        }
        case '3': {
            if (!shouldReplace) {
                return 'three';
            } else {
                return 'thir'
            }
        }
        case '4': {
            if (!shouldReplace) {
                return 'four';
            } else {
                return 'for'
            }
        }
        case '5': {
            if (!shouldReplace) {
                return 'five';
            } else {
                return 'fif'
            }
        }
        case '6': return 'six';
        case '7': return 'seven';
        case '8': {
            if (!shouldReplace) {
                return 'eight';
            } else {
                return 'eigh'
            }
        }
        case '9': return 'nine';
        case '0': return '';
    }
}
function lessTwentyTransform(number) {
    switch(number) {
        case '10': return 'ten';
        case '11': return 'eleven';
        case '12': return 'twelve';
        case '13': return 'thirteen';
        case '14': return 'fourteen';
        case '15': return 'fifteen';
        case '16': return 'sixteen';
        case '17': return 'seventeen';
        case '18': return 'eighteen';
        case '19': return 'nineteen';
    }
}