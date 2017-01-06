const can = {
	  ounces: 12,
	  name: 'pamplemousse',
};

describe('the can', () => {
	  it('has 12 ounces', () => {
		      expect(can.ounces).toBe(12);
		    });

	  it('has a sophisticated name', () => {
		      expect(can.name).toBe('pamplemousse');
		    });
	  it('has name not equal to lara', () => {
	              expect(can.name).not.toBe('lara')
	  });
});
