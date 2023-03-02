// import * as anchor from "@project-serum/anchor";
// import { MintSongNft } from "../target/types/mint_song_nft";

// describe("mint-song-nft", () => {
//   const testNFTTitle = "Kenny Lofton 2";
//   const testNFTSymbol = "TONICSONG2";
//   const testNFTuri = "https://tonic-nft-jsons.s3.us-east-2.amazonaws.com/testnft.json";

//   // Configure the client to use the local cluster.
//   const provider = anchor.AnchorProvider.env();
//   const wallet = provider.wallet as anchor.Wallet;
//   anchor.setProvider(provider);

//   const program = anchor.workspace.MintSongNft as anchor.Program<MintSongNft>;

//   const TOKEN_METADATA_PROGRAM_ID = new anchor.web3.PublicKey(
//     "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
//   );

//   it("Mint!", async () => {
//     // Derive the mint address and the associated toekn account address
//     const mintKeypair: anchor.web3.Keypair = anchor.web3.Keypair.generate();
//     const tokenAddress = await anchor.utils.token.associatedAddress({
//       mint: mintKeypair.publicKey,
//       owner: wallet.publicKey
//     });
//     console.log(`New token: ${mintKeypair.publicKey}`);

//     // Derive the metadata and master edition addresses
//     const metadataAddress = (await anchor.web3.PublicKey.findProgramAddress(
//       [
//         Buffer.from("metadata"),
//         TOKEN_METADATA_PROGRAM_ID.toBuffer(),
//         mintKeypair.publicKey.toBuffer(),
//       ],
//       TOKEN_METADATA_PROGRAM_ID
//     ))[0];
//     console.log("Metadata initialized");
//     const masterEditionAddress = (await anchor.web3.PublicKey.findProgramAddress(
//       [
//         Buffer.from("metadata"),
//         TOKEN_METADATA_PROGRAM_ID.toBuffer(),
//         mintKeypair.publicKey.toBuffer(),
//         Buffer.from("edition"),
//       ],
//       TOKEN_METADATA_PROGRAM_ID
//     ))[0];
//     console.log("Master edition metadata initialized");
    
//     // Transact with the "mint" frunction in our on-chain program
//     await program.methods.mint(
//       testNFTTitle, testNFTSymbol, testNFTuri
//     )
//     .accounts({
//       masterEdition: masterEditionAddress,
//       metadata: metadataAddress,
//       mint: mintKeypair.publicKey,
//       tokenAccount: tokenAddress,
//       mintAuthority: wallet.publicKey,
//       tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
//     })
//     .signers([mintKeypair])
//     .rpc();
//   });
// });
