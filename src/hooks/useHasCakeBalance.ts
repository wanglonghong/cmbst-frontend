import BigNumber from 'bignumber.js'
import { getCombustAddress } from 'utils/addressHelpers'
import useTokenBalance from './useTokenBalance'

/**
 * A hook to check if a wallet's CAKE balance is at least the amount passed in
 */
const useHasCakeBalance = (minimumBalance: BigNumber) => {
  const cakeBalance = useTokenBalance(getCombustAddress())
  return cakeBalance.gte(minimumBalance)
}

export default useHasCakeBalance
