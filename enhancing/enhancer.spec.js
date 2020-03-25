const { succeed, fail, repair } = require('./enhancer.js');
// test away!
it("should run the tests", function() {
    expect(true).toBe(true);
  });

  const item = {
      name: "jester",
      enhancement: 20,
      durability: 100
  };

  describe('enhancer.js', function() {
      describe('.succeed()', function() {
          it('should check if enhancement = 20', function() {
              expect(succeed(item.enhancement)).toBe(20);
          });
          it('should add 1 to value of enhancement', function() {
              expect(succeed(item.enhancement)).toBe(item.enhancement +1);
          });
      });
      describe('.fail()', function() {
          it('should check that enhancement is less than 15', function() {
              expect(item.durability).toBe(item.durability -5);
          });
          it('should check that enhancement is = to 15', function() {
              expect(item.durability).toBe(item.durability -10);
          });
          it('should check that enhancement >=16', function() {
              expect(item.durability).toBe(item.durability -10 && item.enhancement -1);
          });
      });

      describe('.repair()', function() {
          it('should check that item durability <100', function() {
              expect(item.durability).toBe(100);
          });
      });
  });

//need a test to ensure that enhancement falls within 
//correct range (0-20)

//need a test that ensures durablity falls
//within the correct range (0-100)