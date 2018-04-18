/*
    digitsToEnglish
    Chris Wininger

    Function takes a Number represented as a string or Number and outputs a String representing the number using
        English words. I allow string representations of numbers to be passed in so that we can represent numbers
        larger than JavaScripts MaxInteger
 */


// '!!! TODO ADD MINUS SUPPORT

import _digitsToEnglishThreeDigit from './utils/_digitsToEnglishThreeDigit'

export default (strInput) => {
    // copy so we retain an un-changed reference for error handling
    let strNum = strInput

    const positionPostfixes = [
        '',
        'thousand',
        'million',
        'billion',
        'trillion',
        'quadrillion'
    ]

    let negative = false

    /*
        check for valid types (in theory we could also support anything with a toString but for now lets just
            allow string or number
     */
    if (typeof strNum !== 'string' && typeof strNum !== 'number')
        throw new Error(`this methods accepts either a Number or a String, invalid input: "${strInput}"`)

    strNum = (typeof strNum === 'string') ? strNum : strNum.toString()

    if (isNaN(strNum))
        throw new Error(`values must be whole numbers, invalid input: "${strInput}"`)

    if (strNum.indexOf('.') >= 0)
        throw new Error(`this method only accepts whole numbers, invalid input: "${strInput}"`)

    if (strNum[0] === '-') {
        negative = true
        strNum = strNum.slice(1)
    }

    const len = strNum.length

    if (len > 18)
        throw new Error(
          'this library currently only supports whole numbers between 999999999999999999 and - 999999999999999999')

    let strOutput = ''

    // simple base case for 0-999
    if (len <= 3) {
        strOutput = _digitsToEnglishThreeDigit(strNum)
    } else {
        // loop over number right to left by threes
        let i = len - 1
        let significancePos = 0
        while (i >= 0) {
            const strCurrVal = (strNum[i - 2] || '') + (strNum[i - 1] || '') + (strNum[i] || '')

            const postFix = positionPostfixes[significancePos]
            strOutput = _digitsToEnglishThreeDigit(strCurrVal) + ' ' + (postFix ? postFix + ' ' : '') + ', ' + strOutput
            i = i - 3
            significancePos++
        }
    }

    // prefix negative if needed and return value
    return !negative ? strOutput : 'negative ' + strOutput
}

// ==== Helpers ====

