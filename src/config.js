const config = {
  /** base info */
  name: 'Cassette Tape Collection', // project name
  description: 'This NFTs collection is historical of music genres, restro style.',
  nftName: 'Cassete NFT- Goerli', // name for a single NFT (=> "NFTs #42"), can be the same as the project name
  host: 'https://cassettenft.art', // host URI
  externalUri: 'https://github.com/rzoktan/simple-nft', // optional, link to project website
  // the number of NFTs to mint initially when the contract is deployed.
  nftsToMint: 1000,

  /** royalties */
  royalty: {
    basisPoints: 500, // 100 points = 1%. Must be >= 0.
    receiver: '0xAB8Eca9d6a2C3839336782748E497843eDf77777', // ETH address
  },

  /** caching */
  cache: process.env.NODE_ENV === 'production', // enabled only on production by default
  metadataCacheTtl: 2 * 60 * 60, // TTL in seconds
  contentCacheTtl: 60 * 60, // TTL in seconds

  /** static image generation */
  screenshotSize: 512, // in px
  // wait time before creating static image from dynamic content.
  // setting this too low may result in blank images, keep >= 25ms at least.
  waitBeforeScreenshot: 1000, // in ms
}

export default config
