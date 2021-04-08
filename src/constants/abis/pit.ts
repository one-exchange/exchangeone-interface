import { Interface } from '@ethersproject/abi'
import PIT_ABI from '@exchange-one/contracts/abi/XOneXStaking.json'

const PIT_INTERFACE = new Interface(PIT_ABI)

export default PIT_INTERFACE
export { PIT_ABI, PIT_INTERFACE }
