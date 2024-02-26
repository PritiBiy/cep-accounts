const SavingsAccount = require("./SavingsAccount");

describe("SavingsAccount", () => {

    it("check starting balance", () => {
        const account = new SavingsAccount(100);

        expect(account.balance()).toBe(100);
    });

    it("should be able to deposit", () => {
        const account = new SavingsAccount(100);
        account.deposit(50);

        expect(account.balance()).toBe(150);
    });

});