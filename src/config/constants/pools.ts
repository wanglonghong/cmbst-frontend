import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'COMBUST',
    stakingTokenName: QuoteToken.COMBUST,
    stakingTokenAddress: '0xbE3F4046ca72252F91A6A598F81398065C50059f', // COMBUST token
    contractAddress: { // masterChef contract
      97: '0xe28A04E160AF2E608352090AA7347D8E947d944e', 
      56: '0xB543A8082294276D3dE730e74fb59f3b8771fc20',
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
