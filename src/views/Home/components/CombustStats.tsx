import React from 'react'
import { Card, CardBody, Heading, Text } from '@zealous4467/cmbstswapuikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCombustAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledCombustStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CombustStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCombustAddress()))
  const combustSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0

  return (
    <StyledCombustStats>
      <CardBody>
        <Heading color="contrast" size="xl" mb="24px">
          {TranslateString(534, 'Combust Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total COMBUST Supply')}</Text>
          {combustSupply && <CardValue fontSize="14px" value={combustSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total COMBUST Burned')}</Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New COMBUST/block')}</Text>
          <CardValue fontSize="14px" decimals={0} value={1} />
        </Row>
      </CardBody>
    </StyledCombustStats>
  )
}

export default CombustStats
