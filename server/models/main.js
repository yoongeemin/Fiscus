import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: mongoose.Schema.Types.String,
    balance: mongoose.Schema.Types.Number,
});

const TransactionSchema = new mongoose.Schema({
    accountId: mongoose.Schema.Types.ObjectId,
    name: mongoose.Schema.Types.String,
    amount: mongoose.Schema.Types.Number,
    income: mongoose.Schema.Types.Boolean,
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "RootCategory",
    }],
    datetime: mongoose.Schema.Types.Date,
    balance: mongoose.Schema.Types.Number,
});

const RootCategorySchema = new mongoose.Schema({
    name: mongoose.Schema.Types.String,
    children: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "RootCategory",
    }],
});

const SynonymCategorySchema = new mongoose.Schema({
    name: mongoose.Schema.Types.String,
    root: {
        type: mongoose.Schema.Types,
        ref: "RootCategory",
    },
});

export { AccountSchema };
export const Account = mongoose.model("Account", AccountSchema);
export const Transaction = mongoose.model("Transaction", TransactionSchema);
export const RootCategory = mongoose.model("RootCategory", RootCategorySchema);
export const SynonymCategory = mongoose.model("SynonymCategory", SynonymCategorySchema);

