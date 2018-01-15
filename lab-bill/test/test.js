
describe('#Greet', function() {

  it('should return null if the input is not a string', function() {
    expect(greet(1)).toEqual(null);
  });
  it('should return hello world if the first word of the input is world'), function(){
    expect(greet('world')).toEqual('Hello World');
  };
});