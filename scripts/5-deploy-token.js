import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0xBf0966bcEa0855d0b0ebAED2f27e99a8B6779C97");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "Chess Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "CHESS",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();
// 0x99EB46E5714D9644c18CDFD24eC1fe98610Ea827