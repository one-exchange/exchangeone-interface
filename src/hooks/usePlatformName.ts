import { Blockchain } from '@exchange-one/sdk'
import useBlockchain from './useBlockchain'

export default function usePlatformName(): string {
  const blockchain = useBlockchain()
  switch (blockchain) {
    case Blockchain.BINANCE_SMART_CHAIN:
      return 'Exchange.one'
    case Blockchain.HARMONY:
      return 'Exchange.one'
    case Blockchain.ETHEREUM:
      return 'Exchange.one'
    default:
      return 'Exchange.one'
  }
}
