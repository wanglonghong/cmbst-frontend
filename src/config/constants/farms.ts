import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'CMBST-BNB LP',
    lpAddresses: {
      97: '0x29c02122deb8cdec04323616e18fd21ca56c5c9d',
      56: '0x41039b01e5079ae2c27d8915b4fb5e2a3f860df9',
    },
    tokenSymbol: 'CMBST',
    tokenAddresses: {
      97: '0x5d3a2568c4079eeada9aaa6cbfc5eeea2bfcfa79',
      56: '0xbE3F4046ca72252F91A6A598F81398065C50059f',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'CMBST-BUSD LP',
    lpAddresses: {
      97: '0x37fcda70840a1e72c9e38f4ee410d12117b38c6a',
      56: '0xddb537aadf973144e792cded0897c059e8921d51',
    },
    tokenSymbol: 'CMBST',
    tokenAddresses: {
      97: '0x5d3a2568c4079eeada9aaa6cbfc5eeea2bfcfa79',
      56: '0xbE3F4046ca72252F91A6A598F81398065C50059f',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },  
]

export default farms
