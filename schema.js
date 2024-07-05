export const typeDefs = `#graphql
type Surah {
    number: ID!
    name: String!
    englishName: String!
    englishNameTranslation: String!
    revelationType: String!
    ayahs: [Ayah!]!
}
type Ayah {
    number: ID!
    numberInSurah: Int!
    juz: Int!
    ruku: Int!
    hizbQuarter: Int!
    sajda: Sajda
    text: String!
}

type Sajda {
    id: ID
    recommended: Boolean
    obligatory: Boolean
}

type Edition {
    identifier: String!
    name: String!
    englishName: String!
    language: String!
    format: String!
    type: String!
}

type Query {
    surahs: [Surah!]!
    surah(number: ID!): Surah
    ayahs: [Ayah!]!
    ayah(number: ID!): Ayah!
    edition: Edition!
}
`