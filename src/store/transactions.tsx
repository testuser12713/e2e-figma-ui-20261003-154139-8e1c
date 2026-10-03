import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

export type Transaction = {
  id: string;
  name: string;
  description?: string;
  amount: number;
  date: string;
  category?: string;
};

export const initialTransactions: Transaction[] = [
  {
    id: '1',
    name: 'Spend On Fun Mall Cinema',
    category: 'movie',
    amount: 23,
    date: '02- Monday',
  },
  {
    id: '2',
    name: 'Spend On Starbucks',
    category: 'coffee',
    amount: 13,
    date: '02- Monday',
  },
  {
    id: '3',
    name: 'Spend On Super Market',
    category: 'shop',
    amount: 43,
    date: '01- Sunday',
  },
  {
    id: '4',
    name: 'Spend On Super Market',
    category: 'shop',
    amount: 25,
    date: '01- Sunday',
  },
];

type TransactionsContextValue = {
  transactions: Transaction[];
  addTransaction: (input: Omit<Transaction, 'id'>) => void;
};

const TransactionsContext = createContext<TransactionsContextValue | undefined>(
  undefined,
);

export function TransactionsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [transactions, setTransactions] =
    useState<Transaction[]>(initialTransactions);

  const addTransaction = useCallback((input: Omit<Transaction, 'id'>) => {
    setTransactions((prev) => [
      { ...input, id: `${Date.now()}-${prev.length + 1}` },
      ...prev,
    ]);
  }, []);

  const value = useMemo(
    () => ({ transactions, addTransaction }),
    [transactions, addTransaction],
  );

  return (
    <TransactionsContext.Provider value={value}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions(): TransactionsContextValue {
  const context = useContext(TransactionsContext);
  if (!context) {
    throw new Error(
      'useTransactions must be used within a TransactionsProvider',
    );
  }
  return context;
}
