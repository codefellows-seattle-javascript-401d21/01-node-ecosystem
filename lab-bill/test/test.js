// describe('Math Module', function() {
//     describe('#Floor', function() {
//       it('should take in a floating point number, and return the previous whole integer', function() {
//         expect(math.floor(1.123)).toEqual(1)
//         expect(math.floor(1.123)).not.toEqual(1.123)
//       })

//       it('should validate that the input for `num` is a numeric value', function() {
//         // expect(...)
//       })
//     })
describe('#Greet', function() {

  it('should return null if the input is not a string', function() {
    expect(greet(1)).toEqual(null);
  });
  it('should return hello world if the first word of the input is world'), function(){
    expect(greet('world')).toEqual('Hello World');
  };
});