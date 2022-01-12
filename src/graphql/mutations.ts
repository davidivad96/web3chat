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
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
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
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
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
export const createAccountChat = /* GraphQL */ `
  mutation CreateAccountChat(
    $input: CreateAccountChatInput!
    $condition: ModelAccountChatConditionInput
  ) {
    createAccountChat(input: $input, condition: $condition) {
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
export const updateAccountChat = /* GraphQL */ `
  mutation UpdateAccountChat(
    $input: UpdateAccountChatInput!
    $condition: ModelAccountChatConditionInput
  ) {
    updateAccountChat(input: $input, condition: $condition) {
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
export const deleteAccountChat = /* GraphQL */ `
  mutation DeleteAccountChat(
    $input: DeleteAccountChatInput!
    $condition: ModelAccountChatConditionInput
  ) {
    deleteAccountChat(input: $input, condition: $condition) {
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
export const createChat = /* GraphQL */ `
  mutation CreateChat(
    $input: CreateChatInput!
    $condition: ModelChatConditionInput
  ) {
    createChat(input: $input, condition: $condition) {
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
export const updateChat = /* GraphQL */ `
  mutation UpdateChat(
    $input: UpdateChatInput!
    $condition: ModelChatConditionInput
  ) {
    updateChat(input: $input, condition: $condition) {
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
export const deleteChat = /* GraphQL */ `
  mutation DeleteChat(
    $input: DeleteChatInput!
    $condition: ModelChatConditionInput
  ) {
    deleteChat(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
