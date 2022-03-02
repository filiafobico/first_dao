import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x3992e499BeB21715AF61B96dD76Bd0EA29ab0A70",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "King piece",
        description: "This NFT will give you access to ChessDAO!",
        image: readFileSync("scripts/assets/king.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
// 0xBf0966bcEa0855d0b0ebAED2f27e99a8B6779C97