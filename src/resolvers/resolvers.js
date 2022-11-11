import User from "../models/User";
export const resolvers = {
  Query: {
    async Users() {
      const users = await User.find();
      return users;
    },
  },
  Mutation: {
    async createUser(_, { input }) {
      var newUser = new User(input);
      await newUser.save();
      console.log(newUser);
      return newUser;
    },
    async deleteUser(_, _id) {
      return await User.findByIdAndDelete(_id);
    },
    async updateUser(_, { _id, input }) {
      console.log(_id);
      var u = await User.findByIdAndUpdate(_id, input);
      console.log(u);
      return u;
    },
  },
};
