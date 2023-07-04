import { Resolvers } from "../__generate__/resolvers-types";

export const authResolveers: Resolvers = {
  Mutation: {
    async signup(parent, { input }, context) {
      return {
        user: {
          id: 1,
          ...input,
        },
      };
    },
  },
};
