class CheckingAccount {
    _amount;

    constructor(amount) {
        this._amount = amount;
    }

    balance() {
        return this._amount
    }

    deposit(amount) {
        this._amount += amount;
    }

    withdraw(amount) {
        if(amount > this._amount)
            throw TypeError("Amount can not be withdrawn")

        this._amount -= amount;
    }
}

module.exports = CheckingAccount;