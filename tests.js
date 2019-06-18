// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("add", function(){
    it('should be a defined function', function(){
        expect(typeof add).toBe('function');
    });
    it('should return 5 when adding 3 and 2.', function(){
        expect(add(3,2)).toBe(5);
    });
    it('should return false when adding two strings', function() {
        expect (add("black", "bird"));
    });
});

describe("sayHello", function(){
    it('should be a defined function', function(){
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function(){
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function(){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it ('should return the string "Hello, Pat!" when executed', function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it ('should return the string "Hello, World!" when executed', function(){
        expect(sayHello("World")).toBe("Hello, World!");
    });

});

describe("isFive", function(){
    it('should be a defined function', function(){
        expect(typeof isFive).toBe('function');
    });
    // it ('should return true when passed 5', function(){
    //     expect(typeof isFive).toBe(5);
    // });
});

describe("isEven", function(){
    it('should be a defined function', function(){
        expect(typeof isEven).toBe("function");
    });
    it('should return a boolean value', function(){
        expect(typeof isEven(true)).toBe("boolean");
    });
    it('returns true when executed with isEven(2)', function(){
        expect(isEven(2)).toBe(true);
    });
    it('returns true when executed with isEven(-4)', function(){
        expect(isEven(-4)).toBe(true);
    });
    it('returns false when executed with isEven(3)', function(){
        expect(isEven(3)).toBe(false);
    });
    it('returns false when called with "banana"', function(){
        expect(isEven("banana")).toBe(false);
    });
    it('returns true when executed with "8"', function(){
        expect(isEven("8")).toBe(true);
    });
    it('returns false when executed with isEven(Infinity)', function(){
        expect(isEven(Infinity)).toBe(false);
    });
    it('returns false when passed the boolean value ' + true, function(){
        expect(isEven(true)).toBe(false);
    });
    it('returns false when passed the boolean value ' + false, function(){
        expect(isEven(false)).toBe(false);
    });
});

//do not make conditional statements. try to solve the problem. solve what the function should be doing instead of passing the tests.//