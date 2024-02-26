class SavingsAccount {
    constructor(amount) {
        this._amount = amount;
    }
    
    balance() {
        return this._amount;
    }

    deposit(amount) {
        this._amount += amount;
    }
}

module.exports = SavingsAccount;