import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'COMBUST-BNB LP',
    lpAddresses: {
      97: '0x29c02122deb8cdec04323616e18fd21ca56c5c9d',
      56: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
    },
    tokenSymbol: 'COMBUST',
    tokenAddresses: {
      97: '0x5d3a2568c4079eeada9aaa6cbfc5eeea2bfcfa79',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'COMBUST-BUSD LP',
    lpAddresses: {
      97: '0x37fcda70840a1e72c9e38f4ee410d12117b38c6a',
      56: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
    },
    tokenSymbol: 'COMBUST',
    tokenAddresses: {
      97: '0x5d3a2568c4079eeada9aaa6cbfc5eeea2bfcfa79',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },  
]

export default farms
