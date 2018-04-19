/*
    Chris Wininger
    _digitsToEnglishTwoDigit

    An internal helper function, which special cases the problem of converting numbers to english text
        representations to two digits. This should not be exposed outside the API except to test
 */

export default (strNum) => {
    if (typeof strNum !== 'string')
        throw new TypeError('_digitsToEnglishTwoDigit only accepts strings')

    strNum = strNum.replace(/^0+/, '')

    if (strNum.length > 2)
        throw new RangeError('_digitsToEnglishTwoDigit accepts at most two characters')

    if (strNum.length === 0)
        return ''

    const wordMapSingle = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
    }

    const wordMapTens = {
        '2': 'twenty',
        '3': 'thirty',
        '4': 'forty',
        '5': 'fifty',
        '6': 'sixty',
        '7': 'seventy',
        '8': 'eighty',
        '9': 'ninety'
    }

    if (wordMapSingle[strNum])
        return wordMapSingle[strNum]

    if (strNum[1] !== '0')
        return wordMapTens[strNum[0]] + ' ' + wordMapSingle[strNum[1]]
    else
        return wordMapTens[strNum[0]]
}