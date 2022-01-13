export const getChat = /* GraphQL */ `
  query GetChat($id: ID!, $messagesSortDirection: ModelSortDirection) {
    getChat(id: $id) {
      id
      name
      messages(sortDirection: $messagesSortDirection) {
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
