import _digitsToEnglishTwoDigit from '../../lib/logic/utils/_digitsToEnglishTwoDigit'

// === Check Validation ===
it('throws TypeError when a non-string value is passed', () => {
    expect(() => _digitsToEnglishTwoDigit({ value: 'some object' })).toThrowErrorMatchingSnapshot()
})

it('throws a RangeError when a value with more than two digits is used', () => {
    expect(() => _digitsToEnglishTwoDigit('100')).toThrowErrorMatchingSnapshot()
    expect(() => _digitsToEnglishTwoDigit('0100')).toThrowErrorMatchingSnapshot()
})

// === Check Input cleanup ===
it('evaluates numbers with leading zeros', () => {
    expect(_digitsToEnglishTwoDigit('001')).toBe('one')
    expect(_digitsToEnglishTwoDigit('0012')).toBe('twelve')
})

// === Alert Us To Any Changes from Here on out to valid input ===
it('numbers match expected output (full range test)', () => {
    for (let i = 0; i < 100; i++) {
        expect(_digitsToEnglishTwoDigit('' + i)).toMatchSnapshot()
    }
})