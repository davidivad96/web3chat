export interface Account {
  address?: string;
  avatarUrl?: string;
}

export interface Conversation {
  with: Account;
}
