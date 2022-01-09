/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount {
    onCreateAccount {
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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount {
    onUpdateAccount {
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount {
    onDeleteAccount {
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
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation {
    onCreateConversation {
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
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation {
    onUpdateConversation {
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
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation {
    onDeleteConversation {
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
export const onCreateAccountConversation = /* GraphQL */ `
  subscription OnCreateAccountConversation {
    onCreateAccountConversation {
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
export const onUpdateAccountConversation = /* GraphQL */ `
  subscription OnUpdateAccountConversation {
    onUpdateAccountConversation {
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
export const onDeleteAccountConversation = /* GraphQL */ `
  subscription OnDeleteAccountConversation {
    onDeleteAccountConversation {
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
