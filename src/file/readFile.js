import fs from "fs";
import file from "../../resources/file.json" assert { type: "json" };
export default async function readFile(){
  let data = await fs.readFileSync(file.name, null);
  return await JSON.parse(data.toString());
}
