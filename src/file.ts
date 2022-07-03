import fs from "fs";

export function doesFileExist(filePath: string) {
  return fs.existsSync(filePath);
}