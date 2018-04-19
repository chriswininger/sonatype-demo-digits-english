/*
    Chris Wininger
    _digitsToEnglishThreeDigit

    An internal helper function, which special cases the problem of converting numbers to english text
        representations to three digits. This should not be exposed outside the API except to test
 */

import _digitsToEnglishTwoDigit from './_digitsToEnglishTwoDigit'

export default (strNum) => {
    if (typeof strNum !== 'string')
        throw new Error('only accepts strings')

    if (strNum.length > 3)
        throw new Error('only accepts numbers with at 3 or fewer digits')

    strNum = strNum.replace(/^0+/, '')

    if (strNum.length <= 2) {
        return _digitsToEnglishTwoDigit(strNum)
    } else {
        const tens = _digitsToEnglishTwoDigit(strNum.slice(1))
        return _digitsToEnglishTwoDigit(strNum[0]) + (tens ? ' hundred ' + tens : ' hundred')
    }
}