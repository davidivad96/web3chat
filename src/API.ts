/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAccountInput = {
  id?: string | null,
  address: string,
  avatarUrl: string,
};

export type ModelAccountConditionInput = {
  address?: ModelStringInput | null,
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
  conversations?: ModelAccountConversationConnection | null,
  messages?: ModelMessageConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAccountConversationConnection = {
  __typename: "ModelAccountConversationConnection",
  items:  Array<AccountConversation | null >,
  nextToken?: string | null,
};

export type AccountConversation = {
  __typename: "AccountConversation",
  id: string,
  accountID: string,
  conversationID: string,
  account: Account,
  conversation: Conversation,
  createdAt: string,
  updatedAt: string,
};

export type Conversation = {
  __typename: "Conversation",
  id: string,
  accounts?: ModelAccountConversationConnection | null,
  messages?: ModelMessageConnection | null,
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

export type UpdateAccountInput = {
  id: string,
  address?: string | null,
  avatarUrl?: string | null,
};

export type DeleteAccountInput = {
  id: string,
};

export type CreateConversationInput = {
  id?: string | null,
};

export type ModelConversationConditionInput = {
  and?: Array< ModelConversationConditionInput | null > | null,
  or?: Array< ModelConversationConditionInput | null > | null,
  not?: ModelConversationConditionInput | null,
};

export type UpdateConversationInput = {
  id: string,
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

export type CreateAccountConversationInput = {
  id?: string | null,
  accountID: string,
  conversationID: string,
};

export type ModelAccountConversationConditionInput = {
  accountID?: ModelIDInput | null,
  conversationID?: ModelIDInput | null,
  and?: Array< ModelAccountConversationConditionInput | null > | null,
  or?: Array< ModelAccountConversationConditionInput | null > | null,
  not?: ModelAccountConversationConditionInput | null,
};

export type UpdateAccountConversationInput = {
  id: string,
  accountID?: string | null,
  conversationID?: string | null,
};

export type DeleteAccountConversationInput = {
  id: string,
};

export type ModelAccountFilterInput = {
  id?: ModelIDInput | null,
  address?: ModelStringInput | null,
  avatarUrl?: ModelStringInput | null,
  and?: Array< ModelAccountFilterInput | null > | null,
  or?: Array< ModelAccountFilterInput | null > | null,
  not?: ModelAccountFilterInput | null,
};

export type ModelAccountConnection = {
  __typename: "ModelAccountConnection",
  items:  Array<Account | null >,
  nextToken?: string | null,
};

export type ModelConversationFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelConversationFilterInput | null > | null,
  or?: Array< ModelConversationFilterInput | null > | null,
  not?: ModelConversationFilterInput | null,
};

export type ModelConversationConnection = {
  __typename: "ModelConversationConnection",
  items:  Array<Conversation | null >,
  nextToken?: string | null,
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

export type ModelAccountConversationFilterInput = {
  id?: ModelIDInput | null,
  accountID?: ModelIDInput | null,
  conversationID?: ModelIDInput | null,
  and?: Array< ModelAccountConversationFilterInput | null > | null,
  or?: Array< ModelAccountConversationFilterInput | null > | null,
  not?: ModelAccountConversationFilterInput | null,
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
    conversations?:  {
      __typename: "ModelAccountConversationConnection",
      items:  Array< {
        __typename: "AccountConversation",
        id: string,
        accountID: string,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
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
    conversations?:  {
      __typename: "ModelAccountConversationConnection",
      items:  Array< {
        __typename: "AccountConversation",
        id: string,
        accountID: string,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
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
    conversations?:  {
      __typename: "ModelAccountConversationConnection",
      items:  Array< {
        __typename: "AccountConversation",
        id: string,
        accountID: string,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
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
    accounts?:  {
      __typename: "ModelAccountConversationConnection",
      items:  Array< {
        __typename: "AccountConversation",
        id: string,
        accountID: string,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
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
    accounts?:  {
      __typename: "ModelAccountConversationConnection",
      items:  Array< {
        __typename: "AccountConversation",
        id: string,
        accountID: string,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
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
    accounts?:  {
      __typename: "ModelAccountConversationConnection",
      items:  Array< {
        __typename: "AccountConversation",
        id: string,
        accountID: string,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
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
      conversations?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      accounts?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      conversations?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      accounts?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      conversations?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      accounts?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountMessagesId?: string | null,
    conversationMessagesId?: string | null,
  } | null,
};

export type CreateAccountConversationMutationVariables = {
  input: CreateAccountConversationInput,
  condition?: ModelAccountConversationConditionInput | null,
};

export type CreateAccountConversationMutation = {
  createAccountConversation?:  {
    __typename: "AccountConversation",
    id: string,
    accountID: string,
    conversationID: string,
    account:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      conversations?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    conversation:  {
      __typename: "Conversation",
      id: string,
      accounts?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAccountConversationMutationVariables = {
  input: UpdateAccountConversationInput,
  condition?: ModelAccountConversationConditionInput | null,
};

export type UpdateAccountConversationMutation = {
  updateAccountConversation?:  {
    __typename: "AccountConversation",
    id: string,
    accountID: string,
    conversationID: string,
    account:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      conversations?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    conversation:  {
      __typename: "Conversation",
      id: string,
      accounts?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAccountConversationMutationVariables = {
  input: DeleteAccountConversationInput,
  condition?: ModelAccountConversationConditionInput | null,
};

export type DeleteAccountConversationMutation = {
  deleteAccountConversation?:  {
    __typename: "AccountConversation",
    id: string,
    accountID: string,
    conversationID: string,
    account:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      conversations?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    conversation:  {
      __typename: "Conversation",
      id: string,
      accounts?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
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
    address: string,
    avatarUrl: string,
    conversations?:  {
      __typename: "ModelAccountConversationConnection",
      items:  Array< {
        __typename: "AccountConversation",
        id: string,
        accountID: string,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
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
  } | null,
};

export type ListAccountsQueryVariables = {
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountsQuery = {
  listAccounts?:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      conversations?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
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
    accounts?:  {
      __typename: "ModelAccountConversationConnection",
      items:  Array< {
        __typename: "AccountConversation",
        id: string,
        accountID: string,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
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
      accounts?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
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
    accountID: string,
    conversationID: string,
    account?:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      conversations?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      accounts?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      accountMessagesId?: string | null,
      conversationMessagesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAccountConversationQueryVariables = {
  id: string,
};

export type GetAccountConversationQuery = {
  getAccountConversation?:  {
    __typename: "AccountConversation",
    id: string,
    accountID: string,
    conversationID: string,
    account:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      conversations?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    conversation:  {
      __typename: "Conversation",
      id: string,
      accounts?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAccountConversationsQueryVariables = {
  filter?: ModelAccountConversationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountConversationsQuery = {
  listAccountConversations?:  {
    __typename: "ModelAccountConversationConnection",
    items:  Array< {
      __typename: "AccountConversation",
      id: string,
      accountID: string,
      conversationID: string,
      account:  {
        __typename: "Account",
        id: string,
        address: string,
        avatarUrl: string,
        createdAt: string,
        updatedAt: string,
      },
      conversation:  {
        __typename: "Conversation",
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
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
    conversations?:  {
      __typename: "ModelAccountConversationConnection",
      items:  Array< {
        __typename: "AccountConversation",
        id: string,
        accountID: string,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
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
  } | null,
};

export type OnUpdateAccountSubscription = {
  onUpdateAccount?:  {
    __typename: "Account",
    id: string,
    address: string,
    avatarUrl: string,
    conversations?:  {
      __typename: "ModelAccountConversationConnection",
      items:  Array< {
        __typename: "AccountConversation",
        id: string,
        accountID: string,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
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
  } | null,
};

export type OnDeleteAccountSubscription = {
  onDeleteAccount?:  {
    __typename: "Account",
    id: string,
    address: string,
    avatarUrl: string,
    conversations?:  {
      __typename: "ModelAccountConversationConnection",
      items:  Array< {
        __typename: "AccountConversation",
        id: string,
        accountID: string,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
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
  } | null,
};

export type OnCreateConversationSubscription = {
  onCreateConversation?:  {
    __typename: "Conversation",
    id: string,
    accounts?:  {
      __typename: "ModelAccountConversationConnection",
      items:  Array< {
        __typename: "AccountConversation",
        id: string,
        accountID: string,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
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
  } | null,
};

export type OnUpdateConversationSubscription = {
  onUpdateConversation?:  {
    __typename: "Conversation",
    id: string,
    accounts?:  {
      __typename: "ModelAccountConversationConnection",
      items:  Array< {
        __typename: "AccountConversation",
        id: string,
        accountID: string,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
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
  } | null,
};

export type OnDeleteConversationSubscription = {
  onDeleteConversation?:  {
    __typename: "Conversation",
    id: string,
    accounts?:  {
      __typename: "ModelAccountConversationConnection",
      items:  Array< {
        __typename: "AccountConversation",
        id: string,
        accountID: string,
        conversationID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
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
      conversations?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      accounts?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      conversations?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      accounts?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      conversations?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversation?:  {
      __typename: "Conversation",
      id: string,
      accounts?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    accountMessagesId?: string | null,
    conversationMessagesId?: string | null,
  } | null,
};

export type OnCreateAccountConversationSubscription = {
  onCreateAccountConversation?:  {
    __typename: "AccountConversation",
    id: string,
    accountID: string,
    conversationID: string,
    account:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      conversations?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    conversation:  {
      __typename: "Conversation",
      id: string,
      accounts?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAccountConversationSubscription = {
  onUpdateAccountConversation?:  {
    __typename: "AccountConversation",
    id: string,
    accountID: string,
    conversationID: string,
    account:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      conversations?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    conversation:  {
      __typename: "Conversation",
      id: string,
      accounts?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAccountConversationSubscription = {
  onDeleteAccountConversation?:  {
    __typename: "AccountConversation",
    id: string,
    accountID: string,
    conversationID: string,
    account:  {
      __typename: "Account",
      id: string,
      address: string,
      avatarUrl: string,
      conversations?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    conversation:  {
      __typename: "Conversation",
      id: string,
      accounts?:  {
        __typename: "ModelAccountConversationConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
