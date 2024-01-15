import fs from "fs";
import file from "../../resources/file.json" assert { type: "json" };
export default async function writeFile(content){
  fs.writeFileSync(file.name, content, {})
}
