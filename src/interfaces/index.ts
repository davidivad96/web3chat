export interface Account {
  address?: string;
  avatarUrl?: string;
}

export interface Chat {
  id?: string;
  name?: string;
  participants?: Account[];
}

export interface Message {
  id?: string;
  content?: string;
  sender?: Account;
}

export interface GraphQLSubscription<T> {
  value: {
    data: T;
  };
}
