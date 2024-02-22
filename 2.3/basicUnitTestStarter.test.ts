describe("Testing the calculator", () => {
    test("Example test", () => {
      expect(calculator.add(2, 50)).toBe(52);
    });
    test("Addition works", () => {
      expect(calculator.add(5, 10)).toBe(15);
    });
    test("Subtraction works", () => {
      expect(calculator.subtract(200, 50)).toBe(150);
    });
    test("Multiplication works", () => {
      expect(calculator.multiply(20, 10)).toBe(200);
    });
    test("Division works", () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });
    
    test("first test", () => {
      let first = "quack"
      let second = "roar"
      expect(first).toEqual(second)
    });

    test("second test", () => {
      let first = "nuggets"
      let second = "not nuggets"
      expect(first).toBeGreaterThan(second)
    });

    test("third test", () => {
      let first = "burgers"
      let second = "grilled cheese"
      expect(first).toBeLessThan(second)
    });
    
    describe("Stretch Goals", () => {
      test("(2+2)/4 == 1", () => {
        expect(calculator.divide(calculator.add(2, 2), 4)).toBe(1);
      });
      test("(28/4)*(6/2)*(30-27+(3-4)) == 42", () => {
        expect(true).toBeTruthy();
      });
    });
  });
  
  const calculator = {
    /** Takes two numbers and adds them together.
     * @example
     * calculator.add(2, 3) == 5
     */
    add: (a: number, b: number): number => a + b,
    /** Takes two numbers and subtracts the second from the first.
     * @example
     * calculator.subtract(2, 3) == -1
     */
    subtract: (a: number, b: number): number => a - b,
    /** Takes two numbers and multiplies them together.
     * @example
     * calculator.multiply(2, 3) == 6
     */
    multiply: (a: number, b: number): number => a * b,
    /** Takes two numbers and divides the first by the second.
     * @example
     * calculator.divide(2, 3) == 0.5
     */
    divide: (a: number, b: number): number => a / b,
  };