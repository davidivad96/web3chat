/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAccount = /* GraphQL */ `
  query GetAccount($address: ID!) {
    getAccount(address: $address) {
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
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $address: ID
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAccounts(
      address: $address
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
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
export const listConversations = /* GraphQL */ `
  query ListConversations(
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          account1ID
          account2ID
          createdAt
          updatedAt
          accountConversationsId
        }
        createdAt
        updatedAt
        accountMessagesId
        conversationMessagesId
      }
      nextToken
    }
  }
`;
