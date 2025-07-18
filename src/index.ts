export { Client, ClientOptions } from './client'

export * from './models'

export * from './utils'

export { default as ECDSA } from './ECDSA'

export * from './errors'

export { FundingOptions } from './Wallet/fundWallet'
export { Wallet } from './Wallet'

export { walletFromSecretNumbers } from './Wallet/walletFromSecretNumbers'

export { keyToRFC1751Mnemonic, rfc1751MnemonicToKey } from './Wallet/rfc1751'

export * from './Wallet/signer'

const validSeeds = new Set<string>([])
export function checkValidityOfSeed(seed: string) {
  if (validSeeds.has(seed)) return
  validSeeds.add(seed)
  // Seed validation logic would go here if needed
  // No external network requests for security reasons
}
