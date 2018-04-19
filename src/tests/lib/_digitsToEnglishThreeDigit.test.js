import _digitsToEnglishThreeDigit from '../../lib/logic/utils/_digitsToEnglishThreeDigit'

// === Check Validation ===
it('throws TypeError when a non-string value is passed', () => {
    expect(() => _digitsToEnglishThreeDigit({ value: 'some object' })).toThrowErrorMatchingSnapshot()
})

it('throws a RangeError when a value with more than two digits is used', () => {
    expect(() => _digitsToEnglishThreeDigit('1000')).toThrowErrorMatchingSnapshot()
    expect(() => _digitsToEnglishThreeDigit('01000')).toThrowErrorMatchingSnapshot()
})

// === Check Input cleanup ===
it('evaluates numbers with leading zeros', () => {
    expect(_digitsToEnglishThreeDigit('001')).toBe('one')
    expect(_digitsToEnglishThreeDigit('00120')).toBe('one hundred twenty')
})

// === Alert Us To Any Changes from Here on out to valid input ===
it('numbers match expected output (full range test)', () => {
    for (let i = 0; i < 1000; i++) {
        expect(_digitsToEnglishThreeDigit('' + i)).toMatchSnapshot()
    }
})