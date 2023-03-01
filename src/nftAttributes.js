/**
 * Add your NFT attribute schema here!
 * Set the `value` of any attribute to an array of possible values to be used with
 * the `yarn meta` command, to generate new random instances instantly.
 * Setting it to anything else creates a static attribute with that value.
 *
 * See also https://docs.opensea.io/docs/metadata-standards
 */

const nftAttributes = [
  {
    trait_type: 'background',
    value: [
      '#cce4ff',
      '#ccffd2',
      '#efccff',
      '#ffcccc',
      '#fffacc',
      'gradient cloud',
      'gradient middle blue',
      'gradient purple',
      'gradient navy blue',
      'gradient rainbow',
    ],
  },
  {
    trait_type: 'body',
    value: [
      '#ffffff',
      '#000000',
      '#19affd',
      '#19fafd',
      '#19fd39',
      '#4419fd',
      '#a4fd19',
      '#fd7a19',
      '#fd197f',
      '#fd4819',
      '#fdbf19',
    ],
  },
  {
    trait_type: 'content paper',
    value: [
      'color_stick',
      'cutom',
      'dark flower',
      'newspaper',
      'retro',
      'wespaperfull',
      '#ff8686',
      '#ffd400',
      '#ffd986',
      '#86fbff',
      '#8694ff',
      '#ae86ff',
      '#b4ff86'
    ],
  },
  {
    trait_type: 'lines',
    value: [
      'horizontal'
    ]
  },
  {
    trait_type: 'genres',
    value: [
      '#Alternative',
      '#Bluegrass',
      '#BluesMusic',
      '#CountryMusic',
      '#DiscoMusic',
      '#EDM',
      '#FolkMusic',
      '#GospelMusic',
      '#JazzMusic',
      '#METAL',
      '#NewWave',
      '#OperaticMusic',
      '#Pop',
      '#PunkRock',
      '#RagtimeMusic',
      '#Rap&HipHop',
      '#RnB',
      '#Rock',
      '#SlowRock',
      '#SoulMusic',
      '#TheBaroque',
    ],
  },
]

export default nftAttributes
