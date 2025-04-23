import fs from "node:fs";
import { sendStream } from "h3";

export default defineEventHandler((event) => {
  // just return the json file
  return sendStream(
    event,
    fs.createReadStream(JSON_FILE)
  );
});
