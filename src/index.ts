import { log } from "../utils";
import { doesFileExist } from "./file";

import path from "path";

function test2() {
  if (doesFileExist(path.resolve(__dirname, "../.pnp.cjs"))) {
    log("file exists");
  }
}

export {
  test2 as default,
};
