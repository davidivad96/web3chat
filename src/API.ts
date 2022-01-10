/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAccountInput = {
  id?: string | null,
  address: string,
  avatarUrl: string,
};

export type ModelAccountConditionInput = {
  avatarUrl?: ModelStringInput | null,
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
  address: string,
  avatarUrl: string,
  messages?: ModelMessageConnection | null,
  conversations?: ModelConversationConnection | null,
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
  accountID: string,
  conversationID: string,
  account?: Account | null,
  conversation?: Conversation | null,
  createdAt: string,
  updatedAt: string,
  accountMessagesId?: string | null,
  conversationMessagesId?: string | null,
};

export type Conversation = {
  __typename: "Conversation",
  id: string,
  account1ID: string,
  account2ID: string,
  account1?: Account | null,
  account2?: Account | null,
  messages?: ModelMessageConnection | null,
  createdAt: string,
  updatedAt: string,
  accountConversationsId?: string | null,
};

export type ModelConversationConnection = {
  __typename: "ModelConversationConnection",
  items:  Array<Conversation | null >,
  nextToken?: string | null,
};

export type UpdateAccountInput = {
  id?: string | null,
  address: string,
  avatarUrl?: string | null,
};

export type DeleteAccountInput = {
  address: string,
};

export type CreateConversationInput = {
  id?: string | null,
  account1ID: string,
  account2ID: string,
  accountConversationsId?: string | null,
};

export type ModelConversationConditionInput = {
  account1ID?: ModelIDInput | null,
  account2ID?: ModelIDInput | null,
  and?: Array< ModelConversationConditionInput | null > | null,
  or?: Array< ModelConversationConditionInput | null > | null,
  not?: ModelConversationConditionInput | null,
  accountConversationsId?: ModelIDInput | null,
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

export type UpdateConversationInput = {
  id: string,
  account1ID?: string | null,
  account2ID?: string | null,
  accountConversationsId?: string | null,
};

export type DeleteConversationInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  content: string,
  accountID: string,
  conversationID: string,
  accountMessagesId?: string | null,
  conversationMessagesId?: string | null,
};

export type ModelMessageConditionInput = {
  content?: ModelStringInput | null,
  accountID?: ModelIDInput | null,
  conversationID?: ModelIDInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
  accountMessagesId?: ModelIDInput | null,
  conversationMessagesId?: ModelIDInput | null,
};

export type UpdateMessageInput = {
  id: string,
  content?: string | null,
  accountID?: string | null,
  conversationID?: string | null,
  accountMessagesId?: string | null,
  conversationMessagesId?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type ModelAccountFilterInput = {
  id?: ModelIDInput | null,
  address?: ModelIDInput | null,
  avatarUrl?: ModelStringInput | null,
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

export type ModelConversationFilterInput = {
  id?: ModelIDInput | null,
  account1ID?: ModelIDInput | null,
  account2ID?: ModelIDInput | null,
  and?: Array< ModelConversationFilterInput | null > | null,
  or?: Array< ModelConversationFilterInput | null > | null,
  not?: ModelConversationFilterInput | null,
  accountConversationsId?: ModelIDInput | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  accountID?: ModelIDInput | null,
  conversationID?: ModelIDInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
  accountMessagesId?: ModelIDInput | null,
  conversationMessagesId?: ModelIDInput | null,
};

export type CreateAccountMutationVariables = {
  input: CreateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type CreateAccountMutation = {
  createAccount?:  {
    __typename: "Account",
    id: string,
    address: string,
    avatarUrl: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        accountID: string,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
        accountMessagesId?: string | null,
        conversationMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelConversationConnection",
      items:  Array< {
        __typename: "Conversation",
        id: string,
        account1ID: string,
        account2ID: string,
        createdAt: string,
        updatedAt: string,
        accountConversationsId?: string | null,
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
    address: string,
    avatarUrl: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        accountID: string,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
        accountMessagesId?: string | null,
        conversationMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelConversationConnection",
      items:  Array< {
        __typename: "Conversation",
        id: string,
        account1ID: string,
        account2ID: string,
        createdAt: string,
        updatedAt: string,
        accountConversationsId?: string | null,
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
    address: string,
    avatarUrl: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        accountID: string,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
        accountMessagesId?: string | null,
        conversationMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelConversationConnection",
      items:  Array< {
        __typename: "Conversation",
        id: string,
        account1ID: string,
        account2ID: string,
        createdAt: string,
        updatedAt: string,
        accountConversationsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateConversationMutationVariables = {
  input: CreateConversationInput,
  condition?: ModelConversationConditionInput | null,
};

export type CreateConversationMutation = {
  createConversation?:  {
    __typename: "Conversation",
    id: string,
    account1ID: string,
    account2ID: string,
    account1?:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    account2?:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        accountID: string,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
        accountMessagesId?: string | null,
        conversationMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountConversationsId?: string | null,
  } | null,
};

export type UpdateConversationMutationVariables = {
  input: UpdateConversationInput,
  condition?: ModelConversationConditionInput | null,
};

export type UpdateConversationMutation = {
  updateConversation?:  {
    __typename: "Conversation",
    id: string,
    account1ID: string,
    account2ID: string,
    account1?:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    account2?:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        accountID: string,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
        accountMessagesId?: string | null,
        conversationMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountConversationsId?: string | null,
  } | null,
};

export type DeleteConversationMutationVariables = {
  input: DeleteConversationInput,
  condition?: ModelConversationConditionInput | null,
};

export type DeleteConversationMutation = {
  deleteConversation?:  {
    __typename: "Conversation",
    id: string,
    account1ID: string,
    account2ID: string,
    account1?:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    account2?:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        accountID: string,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
        accountMessagesId?: string | null,
        conversationMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountConversationsId?: string | null,
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
    accountID: string,
    conversationID: string,
    account?:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      account1ID: string,
      account2ID: string,
      account1?:  {
        __typename: "Account",
        id: string,
        address: string,
        avatarUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      account2?:  {
        __typename: "Account",
        id: string,
        address: string,
        avatarUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountConversationsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountMessagesId?: string | null,
    conversationMessagesId?: string | null,
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
    accountID: string,
    conversationID: string,
    account?:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      account1ID: string,
      account2ID: string,
      account1?:  {
        __typename: "Account",
        id: string,
        address: string,
        avatarUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      account2?:  {
        __typename: "Account",
        id: string,
        address: string,
        avatarUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountConversationsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountMessagesId?: string | null,
    conversationMessagesId?: string | null,
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
    accountID: string,
    conversationID: string,
    account?:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      account1ID: string,
      account2ID: string,
      account1?:  {
        __typename: "Account",
        id: string,
        address: string,
        avatarUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      account2?:  {
        __typename: "Account",
        id: string,
        address: string,
        avatarUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountConversationsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountMessagesId?: string | null,
    conversationMessagesId?: string | null,
  } | null,
};

export type GetAccountQueryVariables = {
  address: string,
};

export type GetAccountQuery = {
  getAccount?:  {
    __typename: "Account",
    id: string,
    address: string,
    avatarUrl: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        accountID: string,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
        accountMessagesId?: string | null,
        conversationMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelConversationConnection",
      items:  Array< {
        __typename: "Conversation",
        id: string,
        account1ID: string,
        account2ID: string,
        createdAt: string,
        updatedAt: string,
        accountConversationsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAccountsQueryVariables = {
  address?: string | null,
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
      address: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetConversationQueryVariables = {
  id: string,
};

export type GetConversationQuery = {
  getConversation?:  {
    __typename: "Conversation",
    id: string,
    account1ID: string,
    account2ID: string,
    account1?:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    account2?:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        accountID: string,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
        accountMessagesId?: string | null,
        conversationMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountConversationsId?: string | null,
  } | null,
};

export type ListConversationsQueryVariables = {
  filter?: ModelConversationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConversationsQuery = {
  listConversations?:  {
    __typename: "ModelConversationConnection",
    items:  Array< {
      __typename: "Conversation",
      id: string,
      account1ID: string,
      account2ID: string,
      account1?:  {
        __typename: "Account",
        id: string,
        address: string,
        avatarUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      account2?:  {
        __typename: "Account",
        id: string,
        address: string,
        avatarUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountConversationsId?: string | null,
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
    accountID: string,
    conversationID: string,
    account?:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      account1ID: string,
      account2ID: string,
      account1?:  {
        __typename: "Account",
        id: string,
        address: string,
        avatarUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      account2?:  {
        __typename: "Account",
        id: string,
        address: string,
        avatarUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountConversationsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountMessagesId?: string | null,
    conversationMessagesId?: string | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      content: string,
      accountID: string,
      conversationID: string,
      account?:  {
        __typename: "Account",
        id: string,
        address: string,
        avatarUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      conversation?:  {
        __typename: "Conversation",
        id: string,
        account1ID: string,
        account2ID: string,
        createdAt: string,
        updatedAt: string,
        accountConversationsId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountMessagesId?: string | null,
      conversationMessagesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAccountSubscription = {
  onCreateAccount?:  {
    __typename: "Account",
    id: string,
    address: string,
    avatarUrl: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        accountID: string,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
        accountMessagesId?: string | null,
        conversationMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelConversationConnection",
      items:  Array< {
        __typename: "Conversation",
        id: string,
        account1ID: string,
        account2ID: string,
        createdAt: string,
        updatedAt: string,
        accountConversationsId?: string | null,
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
    address: string,
    avatarUrl: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        accountID: string,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
        accountMessagesId?: string | null,
        conversationMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelConversationConnection",
      items:  Array< {
        __typename: "Conversation",
        id: string,
        account1ID: string,
        account2ID: string,
        createdAt: string,
        updatedAt: string,
        accountConversationsId?: string | null,
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
    address: string,
    avatarUrl: string,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        accountID: string,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
        accountMessagesId?: string | null,
        conversationMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    conversations?:  {
      __typename: "ModelConversationConnection",
      items:  Array< {
        __typename: "Conversation",
        id: string,
        account1ID: string,
        account2ID: string,
        createdAt: string,
        updatedAt: string,
        accountConversationsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateConversationSubscription = {
  onCreateConversation?:  {
    __typename: "Conversation",
    id: string,
    account1ID: string,
    account2ID: string,
    account1?:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    account2?:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        accountID: string,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
        accountMessagesId?: string | null,
        conversationMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountConversationsId?: string | null,
  } | null,
};

export type OnUpdateConversationSubscription = {
  onUpdateConversation?:  {
    __typename: "Conversation",
    id: string,
    account1ID: string,
    account2ID: string,
    account1?:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    account2?:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        accountID: string,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
        accountMessagesId?: string | null,
        conversationMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountConversationsId?: string | null,
  } | null,
};

export type OnDeleteConversationSubscription = {
  onDeleteConversation?:  {
    __typename: "Conversation",
    id: string,
    account1ID: string,
    account2ID: string,
    account1?:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    account2?:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        accountID: string,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
        accountMessagesId?: string | null,
        conversationMessagesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountConversationsId?: string | null,
  } | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    accountID: string,
    conversationID: string,
    account?:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      account1ID: string,
      account2ID: string,
      account1?:  {
        __typename: "Account",
        id: string,
        address: string,
        avatarUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      account2?:  {
        __typename: "Account",
        id: string,
        address: string,
        avatarUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountConversationsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountMessagesId?: string | null,
    conversationMessagesId?: string | null,
  } | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    accountID: string,
    conversationID: string,
    account?:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      account1ID: string,
      account2ID: string,
      account1?:  {
        __typename: "Account",
        id: string,
        address: string,
        avatarUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      account2?:  {
        __typename: "Account",
        id: string,
        address: string,
        avatarUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountConversationsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountMessagesId?: string | null,
    conversationMessagesId?: string | null,
  } | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    content: string,
    accountID: string,
    conversationID: string,
    account?:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      conversations?:  {
        __typename: "ModelConversationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      account1ID: string,
      account2ID: string,
      account1?:  {
        __typename: "Account",
        id: string,
        address: string,
        avatarUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      account2?:  {
        __typename: "Account",
        id: string,
        address: string,
        avatarUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountConversationsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountMessagesId?: string | null,
    conversationMessagesId?: string | null,
  } | null,
};
