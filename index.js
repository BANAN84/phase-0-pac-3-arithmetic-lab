/*describe('basic math functions', function () {
    it("'add()' is a valid function", function() {
      expect(add).toExist
    })*/
  
  function add(a,b){ return a+b}
  function subtract(a,b){ return a-b}
  function multiply(a,b){ return a*b}
  function divide(a,b){ return a/b}

 /* it('increment(n) increments n and returns the result', function() {
    expect(increment(a)).toEqual(a + 1)
  })
  
  it('decrement(n) decrements n and returns the result', function() {
    expect(decrement(a)).toEqual(a - 1)*/
function increment(n){ return ++n}
function decrement(n){ return --n}
/*describe('makeInt(n)', function() {
  it('parses n as an integer and returns the parsed integer', function() {
    expect(makeInt(a.toString())).toEqual(a)
  })

  it('assumes base 10', function() {
    expect(makeInt('0x2328')).toEqual(0)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
  })
})

describe('preserveDecimal(n)', function() {
  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
    expect(preserveDecimal('2.222')).toBe(2.222)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
  })
})
*/ 
function makeInt(n){ return toString(n)};
function makeInt(string){ return toString(n ,10)};
function NaN (string ){ if (isNaN(makeInt(string))) return "true" }
function preserveDecimal(n){ return parseFloat(n)};
function NaN (string ){ if (isNaN(preserveDecimal(string))) return "true" }


   