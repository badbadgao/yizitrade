import { InMemoryCache, makeVar } from '@apollo/client';

export const cartItemsVar = makeVar<string[]>([]);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return cartItemsVar();
          },
        },
      },
    },
  },
});

export default cache;
