/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount {
    onCreateAccount {
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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount {
    onUpdateAccount {
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount {
    onDeleteAccount {
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
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation {
    onCreateConversation {
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
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation {
    onUpdateConversation {
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
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation {
    onDeleteConversation {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
