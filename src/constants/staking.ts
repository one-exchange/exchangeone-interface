import { ChainId, Token, WETH } from '@exchange-one/sdk'
import { GOVERNANCE_TOKEN } from './'
import { BUSD } from './tokens'

export const STAKING_REWARDS_INFO: {
  [chainId in ChainId]?: {
    tokens: [Token, Token]
    pid: number
  }[]
} = {
  [ChainId.HARMONY_MAINNET]: [
    {
      tokens: [WETH[ChainId.HARMONY_MAINNET], BUSD[ChainId.HARMONY_MAINNET]],
      pid: 0
    },
    {
      tokens: [WETH[ChainId.HARMONY_MAINNET], GOVERNANCE_TOKEN[ChainId.HARMONY_MAINNET]],
      pid: 1
    }
  ],
  [ChainId.HARMONY_TESTNET]: [
    {
      tokens: [WETH[ChainId.HARMONY_TESTNET], BUSD[ChainId.HARMONY_TESTNET]],
      pid: 0
    },
    {
      tokens: [WETH[ChainId.HARMONY_TESTNET], GOVERNANCE_TOKEN[ChainId.HARMONY_TESTNET]],
      pid: 1
    }
  ]
}
