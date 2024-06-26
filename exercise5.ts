class Calculator {
    // Validation: Ensure the provided values are numbers.
    private validateInput(value: any): void {
        if (typeof value !== 'number') {
            throw new Error("Invalid input, please provide a number.");
        }
    }

    // Ensure that the division method handles division by zero appropriately.
    private validateDivision(divisor: number): void {
        if (divisor === 0) {
            throw new Error("Division by zero is not allowed.");
        }
    }

    // Add function
    add(a: number, b: number): number {
        this.validateInput(a);
        this.validateInput(b);
        return a + b;
    }

    // Minus function
    subtract(a: number, b: number): number {
        this.validateInput(a);
        this.validateInput(b);
        return a - b;
    }

    // Multiply function
    multiply(a: number, b: number): number {
        this.validateInput(a);
        this.validateInput(b);
        return a * b;
    }

    // Divide function
    divide(a: number, b: number): number {
        this.validateInput(a);
        this.validateInput(b);
        this.validateDivision(b);
        return a / b;
    }
}
