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

// Generated by https://quicktype.io

export interface OpenTDBResponse {
  response_code: number;
  results: Result[];
}

export interface Result {
  category: string;
  type: Type;
  difficulty: Difficulty;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export enum Difficulty {
  Easy = 'easy',
  Hard = 'hard',
  Medium = 'medium',
}

export enum Type {
  Boolean = 'boolean',
  Multiple = 'multiple',
}

export interface Question {
  category: string;
  question: string;
  difficulty: Difficulty;
  answers: string[];
  correctAnswer: number;
}

export interface GraphQLSubscription<T> {
  value: {
    data: T;
  };
}
