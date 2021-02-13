const {
	repair,
	succeed,
	fail,
	get
} = require('./enhancer.js');

describe('enhancement functions', () => {

	describe('succeed()', () => {
		it('should increase enhancement by 1 unless enhancement is already 20', () => {
			const item = {
				name: "Axe",
				durability: 75,
				enhancement: 15
			};
			const masterItem = {
				name: "Axe",
				durability: 75,
				enhancement: 20
			};

			expect(succeed(item)).toEqual({
				name: "Axe",
				durability: 75,
				enhancement: 16
			});
			expect(succeed(masterItem)).toEqual(masterItem);
		});
	});

	describe('repair()', () => {
		it("should return an item with durability: 100", () => {
			const item = {
				name: "Shield",
				durability: 50
			};

			expect(repair(item)).toEqual({
				name: "Shield",
				durability: 100
			});
		});
	});

	describe("fail()", () => {
		it("shouuld decrease enhancement by one and decrease durabiility by 10 when enhancement is over 16", () => {
			const item = {
				name: "sword",
				durability: 80,
				enhancement: 20,
			};

			const expected = {
				name: "sword",
				durability: 70,
				enhancement: 19,
			};

			expect(fail(item)).toEqual(expected);
		});

		it("should should decrease durability by 5 when enhancement is less than 15", () => {
			const item = {
				name: "sword",
				durability: 80,
				enhancement: 14,
			};

			const expected = {
				name: "sword",
				durability: 75,
				enhancement: 14,
			};

			expect(fail(item)).toEqual(expected);
		});
	});
});