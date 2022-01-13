export const getChat = /* GraphQL */ `
  query GetChat($id: ID!, $messagesLimit: Int, $messagesNextToken: String, $messagesSortDirection: ModelSortDirection) {
    getChat(id: $id) {
      id
      name
      messages(limit: $messagesLimit, nextToken: $messagesNextToken, sortDirection: $messagesSortDirection) {
        items {
          id
          content
          account {
            id
            avatarUrl
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      accounts {
        items {
          account {
            id
            avatarUrl
          }
        }
        nextToken
      }
    }
  }
`;
