import digitsToEnglish from '../../lib/logic/digitsToEnglish'

// === Check Validation ===
it('throws TypeError when a non-string value is passed', () => {
    expect(() => digitsToEnglish({ value: 'some object' })).toThrowErrorMatchingSnapshot()
})

it('throws ValidationErrorNaN when a non-numeric value is passed', () => {
    expect(() => digitsToEnglish('1ab323')).toThrowErrorMatchingSnapshot()
})

it('throws ValidationErrorDecimal when a value with a decimal is passed', () => {
    expect(() => digitsToEnglish('10.45')).toThrowErrorMatchingSnapshot()
})

// === basic validations ===
it('handles zero', () => {
    // handles zero in all its forms
    expect(digitsToEnglish(0)).toBe('zero')
    expect(digitsToEnglish('0')).toBe('zero')
    expect(digitsToEnglish('0000')).toBe('zero')
    expect(digitsToEnglish('-0000')).toBe('zero')
})

// some simple tests based on sample data provided (note in sample data they start with upper case but I handle this ui)
it('handles base sample numbers', () => {
    expect(digitsToEnglish(13)).toBe('thirteen')
    expect(digitsToEnglish(85)).toBe('eighty five')
    expect(digitsToEnglish(5237)).toBe('five thousand two hundred and thirty seven')
})

it('handles negative numbers', () => {
    expect(digitsToEnglish(-1)).toBe('negative one')
    expect(digitsToEnglish(-12)).toBe('negative twelve')
    expect(digitsToEnglish(-121)).toBe('negative one hundred and twenty one')
    expect(digitsToEnglish(-1000000)).toBe('negative one million')
})

// === range tests ===

// we can't test all these numbers as a snapshot reasonably so lets do a start range and some major points along the way
it('handles 1-9999 -- partial range test', () => {
    for (let i = 0; i < 10000; i++) {
        expect(digitsToEnglish(i)).toMatchSnapshot()
    }
})

it('handles "significant" milestones -- partial range test', () => {
    // keep adding trailing zeros and make sure we get the correct significance postfix added (millions, billions, etc...)
    let strVal = '10000'
    while (strVal.length <= 18) {
        expect(digitsToEnglish(strVal)).toMatchSnapshot()
        expect(digitsToEnglish(parseInt(strVal))).toMatchSnapshot()
        strVal += '0'
    }

    // go ahead and check our max possible js int
    expect(digitsToEnglish(Number.MAX_SAFE_INTEGER)).toMatchSnapshot()
})
