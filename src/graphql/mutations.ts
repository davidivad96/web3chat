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
      messages {
        items {
          id
          content
          accountID
          conversationID
          createdAt
          updatedAt
          accountMessagesId
          conversationMessagesId
        }
        nextToken
      }
      conversations {
        items {
          id
          account1ID
          account2ID
          createdAt
          updatedAt
          accountConversationsId
        }
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
      messages {
        items {
          id
          content
          accountID
          conversationID
          createdAt
          updatedAt
          accountMessagesId
          conversationMessagesId
        }
        nextToken
      }
      conversations {
        items {
          id
          account1ID
          account2ID
          createdAt
          updatedAt
          accountConversationsId
        }
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
      messages {
        items {
          id
          content
          accountID
          conversationID
          createdAt
          updatedAt
          accountMessagesId
          conversationMessagesId
        }
        nextToken
      }
      conversations {
        items {
          id
          account1ID
          account2ID
          createdAt
          updatedAt
          accountConversationsId
        }
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
      account1ID
      account2ID
      account1 {
        id
        address
        avatarUrl
        messages {
          nextToken
        }
        conversations {
          nextToken
        }
        createdAt
        updatedAt
      }
      account2 {
        id
        address
        avatarUrl
        messages {
          nextToken
        }
        conversations {
          nextToken
        }
        createdAt
        updatedAt
      }
      messages {
        items {
          id
          content
          accountID
          conversationID
          createdAt
          updatedAt
          accountMessagesId
          conversationMessagesId
        }
        nextToken
      }
      createdAt
      updatedAt
      accountConversationsId
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
      account1ID
      account2ID
      account1 {
        id
        address
        avatarUrl
        messages {
          nextToken
        }
        conversations {
          nextToken
        }
        createdAt
        updatedAt
      }
      account2 {
        id
        address
        avatarUrl
        messages {
          nextToken
        }
        conversations {
          nextToken
        }
        createdAt
        updatedAt
      }
      messages {
        items {
          id
          content
          accountID
          conversationID
          createdAt
          updatedAt
          accountMessagesId
          conversationMessagesId
        }
        nextToken
      }
      createdAt
      updatedAt
      accountConversationsId
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
      account1ID
      account2ID
      account1 {
        id
        address
        avatarUrl
        messages {
          nextToken
        }
        conversations {
          nextToken
        }
        createdAt
        updatedAt
      }
      account2 {
        id
        address
        avatarUrl
        messages {
          nextToken
        }
        conversations {
          nextToken
        }
        createdAt
        updatedAt
      }
      messages {
        items {
          id
          content
          accountID
          conversationID
          createdAt
          updatedAt
          accountMessagesId
          conversationMessagesId
        }
        nextToken
      }
      createdAt
      updatedAt
      accountConversationsId
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
        messages {
          nextToken
        }
        conversations {
          nextToken
        }
        createdAt
        updatedAt
      }
      conversation {
        id
        account1ID
        account2ID
        account1 {
          id
          address
          avatarUrl
          createdAt
          updatedAt
        }
        account2 {
          id
          address
          avatarUrl
          createdAt
          updatedAt
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
        accountConversationsId
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
        messages {
          nextToken
        }
        conversations {
          nextToken
        }
        createdAt
        updatedAt
      }
      conversation {
        id
        account1ID
        account2ID
        account1 {
          id
          address
          avatarUrl
          createdAt
          updatedAt
        }
        account2 {
          id
          address
          avatarUrl
          createdAt
          updatedAt
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
        accountConversationsId
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
        messages {
          nextToken
        }
        conversations {
          nextToken
        }
        createdAt
        updatedAt
      }
      conversation {
        id
        account1ID
        account2ID
        account1 {
          id
          address
          avatarUrl
          createdAt
          updatedAt
        }
        account2 {
          id
          address
          avatarUrl
          createdAt
          updatedAt
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
        accountConversationsId
      }
      createdAt
      updatedAt
      accountMessagesId
      conversationMessagesId
    }
  }
`;
