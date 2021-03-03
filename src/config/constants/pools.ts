import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'COMBUST',
    stakingTokenName: QuoteToken.COMBUST,
    stakingTokenAddress: '0x5d3a2568c4079eeada9aaa6cbfc5eeea2bfcfa79', // COMBUST token
    contractAddress: { // masterChef contract
      97: '0xe28A04E160AF2E608352090AA7347D8E947d944e', 
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://combust.finance/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  
]

export default pools
