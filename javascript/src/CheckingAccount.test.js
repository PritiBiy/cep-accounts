const CheckingAccount = require("./CheckingAccount");

describe("CheckingAccount", () => {

    it("check starting balance", () => {
        const account = new CheckingAccount(100);
        expect(account.balance()).toBe(100);
    });

    it("should be able to deposit", () => {
        const account = new CheckingAccount(100);
        account.deposit(50);

        expect(account.balance()).toBe(150);
    });

    it("should be able to withdraw", () => {
        const account = new CheckingAccount(100);
        account.withdraw(50);

        expect(account.balance()).toBe(50);
    });

    it("should throw error if withdraw amount exceeds", () => {
        const account = new CheckingAccount(100);

        expect(() => account.withdraw(101)).toThrow(TypeError);
    });
});