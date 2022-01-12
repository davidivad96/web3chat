export interface Account {
  address?: string;
  avatarUrl?: string;
}

export interface Chat {
  id?: string;
  name?: string;
  participants?: Account[];
}

export interface GraphQLSubscription<T> {
  value: {
    data: T;
  };
}
