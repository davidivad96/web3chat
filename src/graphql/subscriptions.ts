/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAccountChat = /* GraphQL */ `
  subscription OnCreateAccountChat($accountID: ID!) {
    onCreateAccountChat(accountID: $accountID) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($chatID: ID!) {
    onCreateMessage(chatID: $chatID) {
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
export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount {
    onCreateAccount {
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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount {
    onUpdateAccount {
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount {
    onDeleteAccount {
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
export const onCreateChat = /* GraphQL */ `
  subscription OnCreateChat {
    onCreateChat {
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
export const onUpdateChat = /* GraphQL */ `
  subscription OnUpdateChat {
    onUpdateChat {
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
export const onDeleteChat = /* GraphQL */ `
  subscription OnDeleteChat {
    onDeleteChat {
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
