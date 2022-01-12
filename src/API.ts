/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAccountInput = {
  id?: string | null,
  avatarUrl: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelAccountConditionInput = {
  avatarUrl?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAccountConditionInput | null > | null,
  or?: Array< ModelAccountConditionInput | null > | null,
  not?: ModelAccountConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Account = {
  __typename: "Account",
  id: string,
  avatarUrl: string,
  messages?: ModelMessageConnection | null,
  chats?: ModelAccountChatConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  content: string,
  chatID: string,
  chat?: Chat | null,
  accountID: string,
  account?: Account | null,
  createdAt: string,
  updatedAt: string,
};

export type Chat = {
  __typename: "Chat",
  id: string,
  name: string,
  messages?: ModelMessageConnection | null,
  accounts?: ModelAccountChatConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAccountChatConnection = {
  __typename: "ModelAccountChatConnection",
  items:  Array<AccountChat | null >,
  nextToken?: string | null,
};

export type AccountChat = {
  __typename: "AccountChat",
  id: string,
  accountID: string,
  account?: Account | null,
  chatID: string,
  chat?: Chat | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAccountInput = {
  id: string,
  avatarUrl?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteAccountInput = {
  id: string,
};

export type CreateAccountChatInput = {
  id?: string | null,
  accountID: string,
  chatID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelAccountChatConditionInput = {
  accountID?: ModelIDInput | null,
  chatID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAccountChatConditionInput | null > | null,
  or?: Array< ModelAccountChatConditionInput | null > | null,
  not?: ModelAccountChatConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateAccountChatInput = {
  id: string,
  accountID?: string | null,
  chatID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteAccountChatInput = {
  id: string,
};

export type CreateChatInput = {
  id?: string | null,
  name: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelChatConditionInput = {
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelChatConditionInput | null > | null,
  or?: Array< ModelChatConditionInput | null > | null,
  not?: ModelChatConditionInput | null,
};

export type UpdateChatInput = {
  id: string,
  name?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteChatInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  content: string,
  chatID: string,
  accountID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelMessageConditionInput = {
  content?: ModelStringInput | null,
  chatID?: ModelIDInput | null,
  accountID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type UpdateMessageInput = {
  id: string,
  content?: string | null,
  chatID?: string | null,
  accountID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type ModelAccountFilterInput = {
  id?: ModelIDInput | null,
  avatarUrl?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAccountFilterInput | null > | null,
  or?: Array< ModelAccountFilterInput | null > | null,
  not?: ModelAccountFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelAccountConnection = {
  __typename: "ModelAccountConnection",
  items:  Array<Account | null >,
  nextToken?: string | null,
};

export type ModelAccountChatFilterInput = {
  id?: ModelIDInput | null,
  accountID?: ModelIDInput | null,
  chatID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAccountChatFilterInput | null > | null,
  or?: Array< ModelAccountChatFilterInput | null > | null,
  not?: ModelAccountChatFilterInput | null,
};

export type ModelChatFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelChatFilterInput | null > | null,
  or?: Array< ModelChatFilterInput | null > | null,
  not?: ModelChatFilterInput | null,
};

export type ModelChatConnection = {
  __typename: "ModelChatConnection",
  items:  Array<Chat | null >,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  chatID?: ModelIDInput | null,
  accountID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type CreateAccountMutationVariables = {
  input: CreateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type CreateAccountMutation = {
  createAccount?:  {
    __typename: "Account",
    id: string,
    avatarUrl: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        chatID: string,
        chat?:  {
          __typename: "Chat",
          id: string,
          name: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          accounts?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        accountID: string,
        account?:  {
          __typename: "Account",
          id: string,
          avatarUrl: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          chats?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelAccountChatConnection",
      items:  Array< {
        __typename: "AccountChat",
        id: string,
        accountID: string,
        account?:  {
          __typename: "Account",
          id: string,
          avatarUrl: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          chats?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatID: string,
        chat?:  {
          __typename: "Chat",
          id: string,
          name: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          accounts?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAccountMutationVariables = {
  input: UpdateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type UpdateAccountMutation = {
  updateAccount?:  {
    __typename: "Account",
    id: string,
    avatarUrl: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        chatID: string,
        chat?:  {
          __typename: "Chat",
          id: string,
          name: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          accounts?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        accountID: string,
        account?:  {
          __typename: "Account",
          id: string,
          avatarUrl: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          chats?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelAccountChatConnection",
      items:  Array< {
        __typename: "AccountChat",
        id: string,
        accountID: string,
        account?:  {
          __typename: "Account",
          id: string,
          avatarUrl: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          chats?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatID: string,
        chat?:  {
          __typename: "Chat",
          id: string,
          name: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          accounts?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAccountMutationVariables = {
  input: DeleteAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type DeleteAccountMutation = {
  deleteAccount?:  {
    __typename: "Account",
    id: string,
    avatarUrl: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        chatID: string,
        chat?:  {
          __typename: "Chat",
          id: string,
          name: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          accounts?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        accountID: string,
        account?:  {
          __typename: "Account",
          id: string,
          avatarUrl: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          chats?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelAccountChatConnection",
      items:  Array< {
        __typename: "AccountChat",
        id: string,
        accountID: string,
        account?:  {
          __typename: "Account",
          id: string,
          avatarUrl: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          chats?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatID: string,
        chat?:  {
          __typename: "Chat",
          id: string,
          name: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          accounts?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAccountChatMutationVariables = {
  input: CreateAccountChatInput,
  condition?: ModelAccountChatConditionInput | null,
};

export type CreateAccountChatMutation = {
  createAccountChat?:  {
    __typename: "AccountChat",
    id: string,
    accountID: string,
    account?:  {
      __typename: "Account",
      id: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          content: string,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chats?:  {
        __typename: "ModelAccountChatConnection",
        items:  Array< {
          __typename: "AccountChat",
          id: string,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatID: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      name: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          content: string,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      accounts?:  {
        __typename: "ModelAccountChatConnection",
        items:  Array< {
          __typename: "AccountChat",
          id: string,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAccountChatMutationVariables = {
  input: UpdateAccountChatInput,
  condition?: ModelAccountChatConditionInput | null,
};

export type UpdateAccountChatMutation = {
  updateAccountChat?:  {
    __typename: "AccountChat",
    id: string,
    accountID: string,
    account?:  {
      __typename: "Account",
      id: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          content: string,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chats?:  {
        __typename: "ModelAccountChatConnection",
        items:  Array< {
          __typename: "AccountChat",
          id: string,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatID: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      name: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          content: string,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      accounts?:  {
        __typename: "ModelAccountChatConnection",
        items:  Array< {
          __typename: "AccountChat",
          id: string,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAccountChatMutationVariables = {
  input: DeleteAccountChatInput,
  condition?: ModelAccountChatConditionInput | null,
};

export type DeleteAccountChatMutation = {
  deleteAccountChat?:  {
    __typename: "AccountChat",
    id: string,
    accountID: string,
    account?:  {
      __typename: "Account",
      id: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          content: string,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chats?:  {
        __typename: "ModelAccountChatConnection",
        items:  Array< {
          __typename: "AccountChat",
          id: string,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatID: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      name: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          content: string,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      accounts?:  {
        __typename: "ModelAccountChatConnection",
        items:  Array< {
          __typename: "AccountChat",
          id: string,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatMutationVariables = {
  input: CreateChatInput,
  condition?: ModelChatConditionInput | null,
};

export type CreateChatMutation = {
  createChat?:  {
    __typename: "Chat",
    id: string,
    name: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        chatID: string,
        chat?:  {
          __typename: "Chat",
          id: string,
          name: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          accounts?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        accountID: string,
        account?:  {
          __typename: "Account",
          id: string,
          avatarUrl: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          chats?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    accounts?:  {
      __typename: "ModelAccountChatConnection",
      items:  Array< {
        __typename: "AccountChat",
        id: string,
        accountID: string,
        account?:  {
          __typename: "Account",
          id: string,
          avatarUrl: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          chats?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatID: string,
        chat?:  {
          __typename: "Chat",
          id: string,
          name: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          accounts?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatMutationVariables = {
  input: UpdateChatInput,
  condition?: ModelChatConditionInput | null,
};

export type UpdateChatMutation = {
  updateChat?:  {
    __typename: "Chat",
    id: string,
    name: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        chatID: string,
        chat?:  {
          __typename: "Chat",
          id: string,
          name: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          accounts?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        accountID: string,
        account?:  {
          __typename: "Account",
          id: string,
          avatarUrl: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          chats?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    accounts?:  {
      __typename: "ModelAccountChatConnection",
      items:  Array< {
        __typename: "AccountChat",
        id: string,
        accountID: string,
        account?:  {
          __typename: "Account",
          id: string,
          avatarUrl: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          chats?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatID: string,
        chat?:  {
          __typename: "Chat",
          id: string,
          name: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          accounts?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatMutationVariables = {
  input: DeleteChatInput,
  condition?: ModelChatConditionInput | null,
};

export type DeleteChatMutation = {
  deleteChat?:  {
    __typename: "Chat",
    id: string,
    name: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        chatID: string,
        chat?:  {
          __typename: "Chat",
          id: string,
          name: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          accounts?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        accountID: string,
        account?:  {
          __typename: "Account",
          id: string,
          avatarUrl: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          chats?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    accounts?:  {
      __typename: "ModelAccountChatConnection",
      items:  Array< {
        __typename: "AccountChat",
        id: string,
        accountID: string,
        account?:  {
          __typename: "Account",
          id: string,
          avatarUrl: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          chats?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatID: string,
        chat?:  {
          __typename: "Chat",
          id: string,
          name: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          accounts?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    chatID: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      name: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          content: string,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      accounts?:  {
        __typename: "ModelAccountChatConnection",
        items:  Array< {
          __typename: "AccountChat",
          id: string,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    accountID: string,
    account?:  {
      __typename: "Account",
      id: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          content: string,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chats?:  {
        __typename: "ModelAccountChatConnection",
        items:  Array< {
          __typename: "AccountChat",
          id: string,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    chatID: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      name: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          content: string,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      accounts?:  {
        __typename: "ModelAccountChatConnection",
        items:  Array< {
          __typename: "AccountChat",
          id: string,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    accountID: string,
    account?:  {
      __typename: "Account",
      id: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          content: string,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chats?:  {
        __typename: "ModelAccountChatConnection",
        items:  Array< {
          __typename: "AccountChat",
          id: string,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    chatID: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      name: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          content: string,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      accounts?:  {
        __typename: "ModelAccountChatConnection",
        items:  Array< {
          __typename: "AccountChat",
          id: string,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    accountID: string,
    account?:  {
      __typename: "Account",
      id: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          content: string,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chats?:  {
        __typename: "ModelAccountChatConnection",
        items:  Array< {
          __typename: "AccountChat",
          id: string,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetAccountQueryVariables = {
  id: string,
};

export type GetAccountQuery = {
  getAccount?:  {
    __typename: "Account",
    id: string,
    avatarUrl: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        chatID: string,
        chat?:  {
          __typename: "Chat",
          id: string,
          name: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          accounts?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        accountID: string,
        account?:  {
          __typename: "Account",
          id: string,
          avatarUrl: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          chats?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelAccountChatConnection",
      items:  Array< {
        __typename: "AccountChat",
        id: string,
        accountID: string,
        account?:  {
          __typename: "Account",
          id: string,
          avatarUrl: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          chats?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatID: string,
        chat?:  {
          __typename: "Chat",
          id: string,
          name: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          accounts?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAccountsQueryVariables = {
  id?: string | null,
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAccountsQuery = {
  listAccounts?:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      id: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          content: string,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chats?:  {
        __typename: "ModelAccountChatConnection",
        items:  Array< {
          __typename: "AccountChat",
          id: string,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAccountChatQueryVariables = {
  id: string,
};

export type GetAccountChatQuery = {
  getAccountChat?:  {
    __typename: "AccountChat",
    id: string,
    accountID: string,
    account?:  {
      __typename: "Account",
      id: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          content: string,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chats?:  {
        __typename: "ModelAccountChatConnection",
        items:  Array< {
          __typename: "AccountChat",
          id: string,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatID: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      name: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          content: string,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      accounts?:  {
        __typename: "ModelAccountChatConnection",
        items:  Array< {
          __typename: "AccountChat",
          id: string,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAccountChatsQueryVariables = {
  id?: string | null,
  filter?: ModelAccountChatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAccountChatsQuery = {
  listAccountChats?:  {
    __typename: "ModelAccountChatConnection",
    items:  Array< {
      __typename: "AccountChat",
      id: string,
      accountID: string,
      account?:  {
        __typename: "Account",
        id: string,
        avatarUrl: string,
        messages?:  {
          __typename: "ModelMessageConnection",
          items:  Array< {
            __typename: "Message",
            id: string,
            content: string,
            chatID: string,
            chat?:  {
              __typename: "Chat",
              id: string,
              name: string,
              createdAt: string,
              updatedAt: string,
            } | null,
            accountID: string,
            account?:  {
              __typename: "Account",
              id: string,
              avatarUrl: string,
              createdAt: string,
              updatedAt: string,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        chats?:  {
          __typename: "ModelAccountChatConnection",
          items:  Array< {
            __typename: "AccountChat",
            id: string,
            accountID: string,
            account?:  {
              __typename: "Account",
              id: string,
              avatarUrl: string,
              createdAt: string,
              updatedAt: string,
            } | null,
            chatID: string,
            chat?:  {
              __typename: "Chat",
              id: string,
              name: string,
              createdAt: string,
              updatedAt: string,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatID: string,
      chat?:  {
        __typename: "Chat",
        id: string,
        name: string,
        messages?:  {
          __typename: "ModelMessageConnection",
          items:  Array< {
            __typename: "Message",
            id: string,
            content: string,
            chatID: string,
            chat?:  {
              __typename: "Chat",
              id: string,
              name: string,
              createdAt: string,
              updatedAt: string,
            } | null,
            accountID: string,
            account?:  {
              __typename: "Account",
              id: string,
              avatarUrl: string,
              createdAt: string,
              updatedAt: string,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        accounts?:  {
          __typename: "ModelAccountChatConnection",
          items:  Array< {
            __typename: "AccountChat",
            id: string,
            accountID: string,
            account?:  {
              __typename: "Account",
              id: string,
              avatarUrl: string,
              createdAt: string,
              updatedAt: string,
            } | null,
            chatID: string,
            chat?:  {
              __typename: "Chat",
              id: string,
              name: string,
              createdAt: string,
              updatedAt: string,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatQueryVariables = {
  id: string,
};

export type GetChatQuery = {
  getChat?:  {
    __typename: "Chat",
    id: string,
    name: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        chatID: string,
        chat?:  {
          __typename: "Chat",
          id: string,
          name: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          accounts?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        accountID: string,
        account?:  {
          __typename: "Account",
          id: string,
          avatarUrl: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          chats?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    accounts?:  {
      __typename: "ModelAccountChatConnection",
      items:  Array< {
        __typename: "AccountChat",
        id: string,
        accountID: string,
        account?:  {
          __typename: "Account",
          id: string,
          avatarUrl: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          chats?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatID: string,
        chat?:  {
          __typename: "Chat",
          id: string,
          name: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          accounts?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatsQueryVariables = {
  id?: string | null,
  filter?: ModelChatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListChatsQuery = {
  listChats?:  {
    __typename: "ModelChatConnection",
    items:  Array< {
      __typename: "Chat",
      id: string,
      name: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          content: string,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      accounts?:  {
        __typename: "ModelAccountChatConnection",
        items:  Array< {
          __typename: "AccountChat",
          id: string,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    chatID: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      name: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          content: string,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      accounts?:  {
        __typename: "ModelAccountChatConnection",
        items:  Array< {
          __typename: "AccountChat",
          id: string,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    accountID: string,
    account?:  {
      __typename: "Account",
      id: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          content: string,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chats?:  {
        __typename: "ModelAccountChatConnection",
        items:  Array< {
          __typename: "AccountChat",
          id: string,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  id?: string | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      content: string,
      chatID: string,
      chat?:  {
        __typename: "Chat",
        id: string,
        name: string,
        messages?:  {
          __typename: "ModelMessageConnection",
          items:  Array< {
            __typename: "Message",
            id: string,
            content: string,
            chatID: string,
            chat?:  {
              __typename: "Chat",
              id: string,
              name: string,
              createdAt: string,
              updatedAt: string,
            } | null,
            accountID: string,
            account?:  {
              __typename: "Account",
              id: string,
              avatarUrl: string,
              createdAt: string,
              updatedAt: string,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        accounts?:  {
          __typename: "ModelAccountChatConnection",
          items:  Array< {
            __typename: "AccountChat",
            id: string,
            accountID: string,
            account?:  {
              __typename: "Account",
              id: string,
              avatarUrl: string,
              createdAt: string,
              updatedAt: string,
            } | null,
            chatID: string,
            chat?:  {
              __typename: "Chat",
              id: string,
              name: string,
              createdAt: string,
              updatedAt: string,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      accountID: string,
      account?:  {
        __typename: "Account",
        id: string,
        avatarUrl: string,
        messages?:  {
          __typename: "ModelMessageConnection",
          items:  Array< {
            __typename: "Message",
            id: string,
            content: string,
            chatID: string,
            chat?:  {
              __typename: "Chat",
              id: string,
              name: string,
              createdAt: string,
              updatedAt: string,
            } | null,
            accountID: string,
            account?:  {
              __typename: "Account",
              id: string,
              avatarUrl: string,
              createdAt: string,
              updatedAt: string,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        chats?:  {
          __typename: "ModelAccountChatConnection",
          items:  Array< {
            __typename: "AccountChat",
            id: string,
            accountID: string,
            account?:  {
              __typename: "Account",
              id: string,
              avatarUrl: string,
              createdAt: string,
              updatedAt: string,
            } | null,
            chatID: string,
            chat?:  {
              __typename: "Chat",
              id: string,
              name: string,
              createdAt: string,
              updatedAt: string,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAccountChatSubscriptionVariables = {
  accountID: string,
};

export type OnCreateAccountChatSubscription = {
  onCreateAccountChat?:  {
    __typename: "AccountChat",
    id: string,
    accountID: string,
    account?:  {
      __typename: "Account",
      id: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          content: string,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chats?:  {
        __typename: "ModelAccountChatConnection",
        items:  Array< {
          __typename: "AccountChat",
          id: string,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatID: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      name: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          content: string,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      accounts?:  {
        __typename: "ModelAccountChatConnection",
        items:  Array< {
          __typename: "AccountChat",
          id: string,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  chatID: string,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    chatID: string,
    chat?:  {
      __typename: "Chat",
      id: string,
      name: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          content: string,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      accounts?:  {
        __typename: "ModelAccountChatConnection",
        items:  Array< {
          __typename: "AccountChat",
          id: string,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    accountID: string,
    account?:  {
      __typename: "Account",
      id: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        items:  Array< {
          __typename: "Message",
          id: string,
          content: string,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      chats?:  {
        __typename: "ModelAccountChatConnection",
        items:  Array< {
          __typename: "AccountChat",
          id: string,
          accountID: string,
          account?:  {
            __typename: "Account",
            id: string,
            avatarUrl: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            chats?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          chatID: string,
          chat?:  {
            __typename: "Chat",
            id: string,
            name: string,
            messages?:  {
              __typename: "ModelMessageConnection",
              nextToken?: string | null,
            } | null,
            accounts?:  {
              __typename: "ModelAccountChatConnection",
              nextToken?: string | null,
            } | null,
            createdAt: string,
            updatedAt: string,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAccountSubscription = {
  onCreateAccount?:  {
    __typename: "Account",
    id: string,
    avatarUrl: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        chatID: string,
        chat?:  {
          __typename: "Chat",
          id: string,
          name: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          accounts?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        accountID: string,
        account?:  {
          __typename: "Account",
          id: string,
          avatarUrl: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          chats?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelAccountChatConnection",
      items:  Array< {
        __typename: "AccountChat",
        id: string,
        accountID: string,
        account?:  {
          __typename: "Account",
          id: string,
          avatarUrl: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          chats?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatID: string,
        chat?:  {
          __typename: "Chat",
          id: string,
          name: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          accounts?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAccountSubscription = {
  onUpdateAccount?:  {
    __typename: "Account",
    id: string,
    avatarUrl: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        chatID: string,
        chat?:  {
          __typename: "Chat",
          id: string,
          name: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          accounts?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        accountID: string,
        account?:  {
          __typename: "Account",
          id: string,
          avatarUrl: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          chats?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelAccountChatConnection",
      items:  Array< {
        __typename: "AccountChat",
        id: string,
        accountID: string,
        account?:  {
          __typename: "Account",
          id: string,
          avatarUrl: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          chats?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatID: string,
        chat?:  {
          __typename: "Chat",
          id: string,
          name: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          accounts?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAccountSubscription = {
  onDeleteAccount?:  {
    __typename: "Account",
    id: string,
    avatarUrl: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        chatID: string,
        chat?:  {
          __typename: "Chat",
          id: string,
          name: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          accounts?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        accountID: string,
        account?:  {
          __typename: "Account",
          id: string,
          avatarUrl: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          chats?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    chats?:  {
      __typename: "ModelAccountChatConnection",
      items:  Array< {
        __typename: "AccountChat",
        id: string,
        accountID: string,
        account?:  {
          __typename: "Account",
          id: string,
          avatarUrl: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          chats?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatID: string,
        chat?:  {
          __typename: "Chat",
          id: string,
          name: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          accounts?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatSubscription = {
  onCreateChat?:  {
    __typename: "Chat",
    id: string,
    name: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        chatID: string,
        chat?:  {
          __typename: "Chat",
          id: string,
          name: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          accounts?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        accountID: string,
        account?:  {
          __typename: "Account",
          id: string,
          avatarUrl: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          chats?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    accounts?:  {
      __typename: "ModelAccountChatConnection",
      items:  Array< {
        __typename: "AccountChat",
        id: string,
        accountID: string,
        account?:  {
          __typename: "Account",
          id: string,
          avatarUrl: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          chats?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatID: string,
        chat?:  {
          __typename: "Chat",
          id: string,
          name: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          accounts?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatSubscription = {
  onUpdateChat?:  {
    __typename: "Chat",
    id: string,
    name: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        chatID: string,
        chat?:  {
          __typename: "Chat",
          id: string,
          name: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          accounts?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        accountID: string,
        account?:  {
          __typename: "Account",
          id: string,
          avatarUrl: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          chats?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    accounts?:  {
      __typename: "ModelAccountChatConnection",
      items:  Array< {
        __typename: "AccountChat",
        id: string,
        accountID: string,
        account?:  {
          __typename: "Account",
          id: string,
          avatarUrl: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          chats?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatID: string,
        chat?:  {
          __typename: "Chat",
          id: string,
          name: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          accounts?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatSubscription = {
  onDeleteChat?:  {
    __typename: "Chat",
    id: string,
    name: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        chatID: string,
        chat?:  {
          __typename: "Chat",
          id: string,
          name: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          accounts?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        accountID: string,
        account?:  {
          __typename: "Account",
          id: string,
          avatarUrl: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          chats?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    accounts?:  {
      __typename: "ModelAccountChatConnection",
      items:  Array< {
        __typename: "AccountChat",
        id: string,
        accountID: string,
        account?:  {
          __typename: "Account",
          id: string,
          avatarUrl: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          chats?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatID: string,
        chat?:  {
          __typename: "Chat",
          id: string,
          name: string,
          messages?:  {
            __typename: "ModelMessageConnection",
            items:  Array< {
              __typename: "Message",
              id: string,
              content: string,
              chatID: string,
              accountID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          accounts?:  {
            __typename: "ModelAccountChatConnection",
            items:  Array< {
              __typename: "AccountChat",
              id: string,
              accountID: string,
              chatID: string,
              createdAt: string,
              updatedAt: string,
            } | null >,
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
