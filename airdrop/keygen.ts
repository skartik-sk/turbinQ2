import { Keypair } from "@solana/web3.js";
import bs58 from 'bs58'
// import * as prompt from 'prompt-sync'
let kp = Keypair.generate()
console.log(`You've generated a new Solana wallet: ${kp.publicKey.toBase58()}`)
console.log(`[${kp.secretKey}]`)


