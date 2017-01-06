const myBeverage = {
	  delicious: true,
	  sour: false,
};
// run only this tests 
describe.only('my beverage', () => {
	  it('is delicious', () => {
		      expect(myBeverage.delicious).toBeTruthy();
		    });

	  // skip this test
	  it.skip('is not sour', () => {
		      expect(myBeverage.sour).toBeFalsy();
		    });
});

describe('my other beverage', () => {
	  // ... will be skipped
 });
