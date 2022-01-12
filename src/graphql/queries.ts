/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      id
      avatarUrl
      messages {
        items {
          id
          content
          chatID
          chat {
            id
            name
            messages {
              items {
                id
                content
                chatID
                accountID
                createdAt
                updatedAt
              }
              nextToken
            }
            accounts {
              items {
                id
                accountID
                chatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          accountID
          account {
            id
            avatarUrl
            messages {
              items {
                id
                content
                chatID
                accountID
                createdAt
                updatedAt
              }
              nextToken
            }
            chats {
              items {
                id
                accountID
                chatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      chats {
        items {
          id
          accountID
          account {
            id
            avatarUrl
            messages {
              items {
                id
                content
                chatID
                accountID
                createdAt
                updatedAt
              }
              nextToken
            }
            chats {
              items {
                id
                accountID
                chatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          chatID
          chat {
            id
            name
            messages {
              items {
                id
                content
                chatID
                accountID
                createdAt
                updatedAt
              }
              nextToken
            }
            accounts {
              items {
                id
                accountID
                chatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
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
    $id: ID
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAccounts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        avatarUrl
        messages {
          items {
            id
            content
            chatID
            chat {
              id
              name
              messages {
                nextToken
              }
              accounts {
                nextToken
              }
              createdAt
              updatedAt
            }
            accountID
            account {
              id
              avatarUrl
              messages {
                nextToken
              }
              chats {
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        chats {
          items {
            id
            accountID
            account {
              id
              avatarUrl
              messages {
                nextToken
              }
              chats {
                nextToken
              }
              createdAt
              updatedAt
            }
            chatID
            chat {
              id
              name
              messages {
                nextToken
              }
              accounts {
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAccountChat = /* GraphQL */ `
  query GetAccountChat($id: ID!) {
    getAccountChat(id: $id) {
      id
      accountID
      account {
        id
        avatarUrl
        messages {
          items {
            id
            content
            chatID
            chat {
              id
              name
              messages {
                nextToken
              }
              accounts {
                nextToken
              }
              createdAt
              updatedAt
            }
            accountID
            account {
              id
              avatarUrl
              messages {
                nextToken
              }
              chats {
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        chats {
          items {
            id
            accountID
            account {
              id
              avatarUrl
              messages {
                nextToken
              }
              chats {
                nextToken
              }
              createdAt
              updatedAt
            }
            chatID
            chat {
              id
              name
              messages {
                nextToken
              }
              accounts {
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      chatID
      chat {
        id
        name
        messages {
          items {
            id
            content
            chatID
            chat {
              id
              name
              messages {
                nextToken
              }
              accounts {
                nextToken
              }
              createdAt
              updatedAt
            }
            accountID
            account {
              id
              avatarUrl
              messages {
                nextToken
              }
              chats {
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        accounts {
          items {
            id
            accountID
            account {
              id
              avatarUrl
              messages {
                nextToken
              }
              chats {
                nextToken
              }
              createdAt
              updatedAt
            }
            chatID
            chat {
              id
              name
              messages {
                nextToken
              }
              accounts {
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAccountChats = /* GraphQL */ `
  query ListAccountChats(
    $id: ID
    $filter: ModelAccountChatFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAccountChats(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        accountID
        account {
          id
          avatarUrl
          messages {
            items {
              id
              content
              chatID
              chat {
                id
                name
                createdAt
                updatedAt
              }
              accountID
              account {
                id
                avatarUrl
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          chats {
            items {
              id
              accountID
              account {
                id
                avatarUrl
                createdAt
                updatedAt
              }
              chatID
              chat {
                id
                name
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        chatID
        chat {
          id
          name
          messages {
            items {
              id
              content
              chatID
              chat {
                id
                name
                createdAt
                updatedAt
              }
              accountID
              account {
                id
                avatarUrl
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          accounts {
            items {
              id
              accountID
              account {
                id
                avatarUrl
                createdAt
                updatedAt
              }
              chatID
              chat {
                id
                name
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChat = /* GraphQL */ `
  query GetChat($id: ID!) {
    getChat(id: $id) {
      id
      name
      messages {
        items {
          id
          content
          chatID
          chat {
            id
            name
            messages {
              items {
                id
                content
                chatID
                accountID
                createdAt
                updatedAt
              }
              nextToken
            }
            accounts {
              items {
                id
                accountID
                chatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          accountID
          account {
            id
            avatarUrl
            messages {
              items {
                id
                content
                chatID
                accountID
                createdAt
                updatedAt
              }
              nextToken
            }
            chats {
              items {
                id
                accountID
                chatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      accounts {
        items {
          id
          accountID
          account {
            id
            avatarUrl
            messages {
              items {
                id
                content
                chatID
                accountID
                createdAt
                updatedAt
              }
              nextToken
            }
            chats {
              items {
                id
                accountID
                chatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          chatID
          chat {
            id
            name
            messages {
              items {
                id
                content
                chatID
                accountID
                createdAt
                updatedAt
              }
              nextToken
            }
            accounts {
              items {
                id
                accountID
                chatID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listChats = /* GraphQL */ `
  query ListChats(
    $id: ID
    $filter: ModelChatFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listChats(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        messages {
          items {
            id
            content
            chatID
            chat {
              id
              name
              messages {
                nextToken
              }
              accounts {
                nextToken
              }
              createdAt
              updatedAt
            }
            accountID
            account {
              id
              avatarUrl
              messages {
                nextToken
              }
              chats {
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        accounts {
          items {
            id
            accountID
            account {
              id
              avatarUrl
              messages {
                nextToken
              }
              chats {
                nextToken
              }
              createdAt
              updatedAt
            }
            chatID
            chat {
              id
              name
              messages {
                nextToken
              }
              accounts {
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
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
      chatID
      chat {
        id
        name
        messages {
          items {
            id
            content
            chatID
            chat {
              id
              name
              messages {
                nextToken
              }
              accounts {
                nextToken
              }
              createdAt
              updatedAt
            }
            accountID
            account {
              id
              avatarUrl
              messages {
                nextToken
              }
              chats {
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        accounts {
          items {
            id
            accountID
            account {
              id
              avatarUrl
              messages {
                nextToken
              }
              chats {
                nextToken
              }
              createdAt
              updatedAt
            }
            chatID
            chat {
              id
              name
              messages {
                nextToken
              }
              accounts {
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      accountID
      account {
        id
        avatarUrl
        messages {
          items {
            id
            content
            chatID
            chat {
              id
              name
              messages {
                nextToken
              }
              accounts {
                nextToken
              }
              createdAt
              updatedAt
            }
            accountID
            account {
              id
              avatarUrl
              messages {
                nextToken
              }
              chats {
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        chats {
          items {
            id
            accountID
            account {
              id
              avatarUrl
              messages {
                nextToken
              }
              chats {
                nextToken
              }
              createdAt
              updatedAt
            }
            chatID
            chat {
              id
              name
              messages {
                nextToken
              }
              accounts {
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $id: ID
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMessages(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        content
        chatID
        chat {
          id
          name
          messages {
            items {
              id
              content
              chatID
              chat {
                id
                name
                createdAt
                updatedAt
              }
              accountID
              account {
                id
                avatarUrl
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          accounts {
            items {
              id
              accountID
              account {
                id
                avatarUrl
                createdAt
                updatedAt
              }
              chatID
              chat {
                id
                name
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        accountID
        account {
          id
          avatarUrl
          messages {
            items {
              id
              content
              chatID
              chat {
                id
                name
                createdAt
                updatedAt
              }
              accountID
              account {
                id
                avatarUrl
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          chats {
            items {
              id
              accountID
              account {
                id
                avatarUrl
                createdAt
                updatedAt
              }
              chatID
              chat {
                id
                name
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
