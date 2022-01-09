/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
      id
      address
      avatarUrl
      conversations {
        nextToken
      }
      messages {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
      id
      address
      avatarUrl
      conversations {
        nextToken
      }
      messages {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
      id
      address
      avatarUrl
      conversations {
        nextToken
      }
      messages {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
      id
      accounts {
        nextToken
      }
      messages {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
      id
      accounts {
        nextToken
      }
      messages {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
      id
      accounts {
        nextToken
      }
      messages {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      content
      accountID
      conversationID
      account {
        id
        address
        avatarUrl
        createdAt
        updatedAt
      }
      conversation {
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      accountMessagesId
      conversationMessagesId
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      content
      accountID
      conversationID
      account {
        id
        address
        avatarUrl
        createdAt
        updatedAt
      }
      conversation {
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      accountMessagesId
      conversationMessagesId
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      content
      accountID
      conversationID
      account {
        id
        address
        avatarUrl
        createdAt
        updatedAt
      }
      conversation {
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      accountMessagesId
      conversationMessagesId
    }
  }
`;
export const createAccountConversation = /* GraphQL */ `
  mutation CreateAccountConversation(
    $input: CreateAccountConversationInput!
    $condition: ModelAccountConversationConditionInput
  ) {
    createAccountConversation(input: $input, condition: $condition) {
      id
      accountID
      conversationID
      account {
        id
        address
        avatarUrl
        createdAt
        updatedAt
      }
      conversation {
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateAccountConversation = /* GraphQL */ `
  mutation UpdateAccountConversation(
    $input: UpdateAccountConversationInput!
    $condition: ModelAccountConversationConditionInput
  ) {
    updateAccountConversation(input: $input, condition: $condition) {
      id
      accountID
      conversationID
      account {
        id
        address
        avatarUrl
        createdAt
        updatedAt
      }
      conversation {
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteAccountConversation = /* GraphQL */ `
  mutation DeleteAccountConversation(
    $input: DeleteAccountConversationInput!
    $condition: ModelAccountConversationConditionInput
  ) {
    deleteAccountConversation(input: $input, condition: $condition) {
      id
      accountID
      conversationID
      account {
        id
        address
        avatarUrl
        createdAt
        updatedAt
      }
      conversation {
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
