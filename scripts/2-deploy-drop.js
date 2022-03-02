import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0xBf0966bcEa0855d0b0ebAED2f27e99a8B6779C97");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      name: "ChessDAO Membership",
      description: "A DAO for fans of Chess.",
      image: readFileSync("scripts/assets/chess.jpg"),
      // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the module.
      // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
      // you can set this to your own wallet address if you want to charge for the drop.
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()
// 0x3992e499BeB21715AF61B96dD76Bd0EA29ab0A70