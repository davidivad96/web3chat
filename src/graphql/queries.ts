/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAccount = /* GraphQL */ `
  query GetAccount($address: ID!) {
    getAccount(address: $address) {
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
export const listConversations = /* GraphQL */ `
  query ListConversations(
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
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
        createdAt
        updatedAt
        accountMessagesId
        conversationMessagesId
      }
      nextToken
    }
  }
`;
export const getAccountConversation = /* GraphQL */ `
  query GetAccountConversation($id: ID!) {
    getAccountConversation(id: $id) {
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
export const listAccountConversations = /* GraphQL */ `
  query ListAccountConversations(
    $filter: ModelAccountConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccountConversations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        accountID
        conversationID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
