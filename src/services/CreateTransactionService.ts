import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, type, value }: Omit<Transaction, 'id'>): Transaction {
    // TODO
    const { total } = this.transactionsRepository.getBalance();

    if (type === 'outcome' && value > total) {
      throw new Error('Valor acima do permitido');
    }

    const repository = this.transactionsRepository.create({
      title,
      type,
      value,
    });

    return repository;
  }
}

export default CreateTransactionService;
