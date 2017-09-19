describe("Calculator", function() {

	beforeEach(function() {
		calc = new Calculator();
	});
	describe('Addition function', function() {
		it('should add two numbers together and return the result', function() {
			calc.add(2);
			calc.add(2);
			expect(calc.value).toBe(4);
		});

		it("should not return 4 if the numbers given don't add up to 4", function() {
			calc.add(12);
			calc.add(7);
			expect(calc.value).toBe(19);
		});

		it("should have called the alert function if the number given is undefined", function() {
			spyOn(window, "alert");
			calc.add();
			expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
		});
	});

	describe('Subtraction function', function() {
		it('should subtract the second number from the first and return the result', function() {
			calc.add(10);
			calc.subtract(5);
			expect(calc.value).toBe(5);
		});

		it("should not return 4 if the result is not 4", function() {
			calc.add(12);
			calc.subtract(3);
			expect(calc.value).toBe(9);
		});

		it("should have called the alert function if the number given is undefined", function() {
			spyOn(window, "alert");
			calc.add();
			calc.subtract();
			expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
		});
	});
});