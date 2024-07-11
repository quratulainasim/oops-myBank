#! /usr/bin/env node
class BankAccount {
    accountbalance;
    constructor(accountbalance) {
        this.accountbalance = accountbalance;
    }
    credit(amount) {
        if (amount > 0) {
            this.accountbalance += amount;
            console.log(`Credit successfully, your current amount: $${this.accountbalance}`);
            if (amount > 100) {
                this.accountbalance -= 1;
                console.log(`A fee of 1$ has been deducted,Current amount : $${this.accountbalance}`);
            }
        }
        else {
            console.log("Credit unsuccessfull");
        }
    }
    debit(amount) {
        if (amount > 0 && amount <= this.accountbalance) {
            this.accountbalance -= amount;
            console.log(`Debit successfully,your current amount: $${this.accountbalance}`);
        }
        else {
            console.log("Debit unsuccessfull");
        }
    }
}
class customer {
    firstName;
    lastName;
    gender;
    age;
    mobileNumber;
    bankAccount;
    constructor(firstName, lastName, gender, age, mobileNumber, bankAccount) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.bankAccount = bankAccount;
    }
    display() {
        console.log("Name:" + this.firstName + " " + this.lastName);
        console.log("Gender: " + this.gender);
        console.log("Age:  " + this.age);
        console.log("Mobile Number: " + this.mobileNumber);
        console.log("Account Balance: " + this.bankAccount.accountbalance);
    }
}
;
console.log("\n ACCOUNT 1");
const Account1 = new BankAccount(1000);
console.log(`My Current Bank Amount is 1000$`);
const Customer1 = new customer("Quratulain", "Asim", "female", 34, 3122108976, Account1);
Customer1.display();
console.log("\n.......DEBIT TRANSACTION.......");
Customer1.bankAccount.debit(500);
console.log();
console.log("\n ......CREDIT TRANSACTION......");
Customer1.bankAccount.credit(300);
console.log();
console.log("\n ACCOUNT 2");
const Account2 = new BankAccount(1000);
console.log(`My Current Bank Amount is 1000$`);
const Customer2 = new customer("Asim", "Noor", "male", 36, 3015510896, Account2);
Customer2.display();
console.log();
console.log("\n .......DEBIT TRANSACTION.......");
Customer2.bankAccount.debit(700);
console.log();
console.log("\n.........CREDIT TRANSACTION.......");
Customer2.bankAccount.credit(200);
console.log();
export {};
