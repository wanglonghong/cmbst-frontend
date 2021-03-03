import {
  getCombustProfileAddress,
  getCombustRabbitsAddress,
  getBunnyFactoryAddress,
  getBunnySpecialAddress,
} from 'utils/addressHelpers'
import { getContract } from 'utils/web3'
import profileABI from 'config/abi/combustProfile.json'
import combustRabbitsAbi from 'config/abi/combustRabbits.json'
import bunnyFactoryAbi from 'config/abi/bunnyFactory.json'
import bunnySpecialAbi from 'config/abi/bunnySpecial.json'

export const getProfileContract = () => {
  return getContract(profileABI, getCombustProfileAddress())
}

export const getPancakeRabbitContract = () => {
  return getContract(combustRabbitsAbi, getCombustRabbitsAddress())
}

export const getBunnyFactoryContract = () => {
  return getContract(bunnyFactoryAbi, getBunnyFactoryAddress())
}

export const getBunnySpecialContract = () => {
  return getContract(bunnySpecialAbi, getBunnySpecialAddress())
}

export default null
