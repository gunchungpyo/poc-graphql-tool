// example data
const authors = [
  { id: 1, firstName: 'Tom', lastName: 'Coleman' },
  { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
  { id: 3, firstName: 'Mikhail', lastName: 'Novikov' }
];

const posts = [
  { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
  { id: 2, authorId: 2, title: 'Welcome to Meteor', votes: 3 },
  { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
  { id: 4, authorId: 3, title: 'Launchpad is Cool', votes: 7 }
];

export const resolvers = {
  Query: {
    posts: () => posts,
    author: (_, { id }) => find(authors, { id })
  },

  Author: {
    posts: (author) => filter(posts, { authorId: author.id })
  },

  Post: {
    author: (post) => find(authors, { id: post.authorId })
  }
};

function find(data, criteria) {
  return data.find((item) => item.id === criteria.id);
}

function filter(data, criteria) {
  return data.filter((item) => item.authorId === criteria.authorId);
}
