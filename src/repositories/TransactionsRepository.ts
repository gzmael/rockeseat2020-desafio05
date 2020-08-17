import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    const income = this.transactions.reduce(
      (acumulador: number, valorAtual: Transaction) => {
        if (valorAtual.type === 'income') {
          return valorAtual.value + acumulador;
        }
        return acumulador;
      },
      0,
    );

    const outcome = this.transactions.reduce(
      (acumulador: number, valorAtual: Transaction) => {
        if (valorAtual.type === 'outcome') {
          return valorAtual.value + acumulador;
        }
        return acumulador;
      },
      0,
    );
    const total = income - outcome;
    return { income, outcome, total };
  }

  // eslint-disable-next-line class-methods-use-this
  public create({ title, type, value }: Omit<Transaction, 'id'>): Transaction {
    // TODO

    const newTransaction = new Transaction({ title, type, value });

    this.transactions.push(newTransaction);

    return newTransaction;
  }
}

export default TransactionsRepository;
