import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import { quran } from "./_db.js"

const resolvers = {
    Query: {
      surahs: () => quran.surahs,
      surah: (_, args) => quran.surahs.find(surah => surah.number === parseInt(args.number)),
      ayahs: () => quran.surahs.map(surah => surah.ayahs).flat(),
      ayah: (_, args) => this.ayahs.find(ayah => ayah.number === args.number),
      edition: () => quran.edition,
    },
    Surah: {
        ayahs: (parent) => quran.surahs.find(surah => surah.number === parent.number).ayahs,
    },
  };

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);