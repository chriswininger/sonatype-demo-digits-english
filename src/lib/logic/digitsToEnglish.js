/*
    digitsToEnglish
    Chris Wininger

    Function takes a Number represented as a string or Number and outputs a String representing the number using
        English words. I allow string representations of numbers to be passed in so that we can represent numbers
        larger than JavaScripts MaxInteger
 */

import _digitsToEnglishThreeDigit from './utils/_digitsToEnglishThreeDigit'
import { ValidationErrorNaN, ValidationErrorDecimal } from "./errors";

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
        throw new TypeError(`the supplied value is not of type string or number`)

    strNum = (typeof strNum === 'string') ? strNum : strNum.toString()

    if (isNaN(strNum))
        throw new ValidationErrorNaN(`the value "${strInput}" was not a number`)

    if (strNum.indexOf('.') >= 0)
        throw new ValidationErrorDecimal(`the value "${strInput}" contains a decimal point`)

    if (strNum[0] === '-') {
        negative = true
        strNum = strNum.slice(1)
    }

    const lenBeforeTrim = strNum.length

    // trim leading zeros
    strNum = strNum.replace(/^0+/, '')

    const len = strNum.length

    if (len > 18)
        throw new RangeError(
          'this library currently only supports whole numbers between -999999999999999999 and 999999999999999999')

    // special base case for single 0
    if (strNum === '' && lenBeforeTrim > 0)
        return 'zero'

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

            if (strCurrVal.replace(/^0+/, '').length > 0) {
                const postFix = positionPostfixes[significancePos]
                let placeSeparator = ' '

                // const placeSeparator = (i === len - 1) ? ' ' : ', '
                strOutput = _digitsToEnglishThreeDigit(strCurrVal) + ' ' + (postFix || '') +
                  placeSeparator + strOutput
            }

            // prepend the and separator if we're looking at a right-most number < 100 (1001 => one thousand and one)
            if (i === len -1 && strNum[i - 2] === '0' && (strNum[i - 1] !== '0' || strNum[i] !== '0'))
                strOutput = 'and ' + strOutput

            i = i - 3
            significancePos++
        }
    }

    /*
        cheap trick to fix extra space sometimes added to end, this will get tests happy, but there is a better
        fix for this
     */
    strOutput = strOutput.trim()

    // prefix negative if needed and return value
    return !negative ? strOutput : 'negative ' + strOutput
}
