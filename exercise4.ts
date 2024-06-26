// 1. Create a Person class with name and age properties. Implement a method to return the person's name.
class Person {
    name: string;
    age: number;
    private socialSecurityNumber: string;

    constructor(name: string, age: number, socialSecurityNumber: string) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = socialSecurityNumber;
    }

    getName(): string {
        return this.name;
    }

    // 2. Add a private property socialSecurityNumber to the Person class and a method to get the age.
    getAge(): number {
        return this.age;
    }
}
