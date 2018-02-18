const MyMath = require('./../myMath.js');
const assert = require('assert');

describe('MyMath', function(){
    describe('aPlusBSquare', function(){
        it('should return 25 when the value 2 and 3 passed', function(){
            assert.equal(MyMath.aPlusBSquare(2,3), 25);
        });

        it('should return 49 when the value 3 and 4 passed', function(){
            assert.equal(MyMath.aPlusBSquare(3,4), 48);
        });
    });
})