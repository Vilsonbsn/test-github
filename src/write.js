import config from "../resources/config.json" assert { type: "json" };
import verify from "./verify.js";
import writeFile from "./file/writeFile.js";
import writeDb from "./db/writeDb.js";
export default async function write(content){
  verify();
  if(config.type==="db"){
    return await writeDb(content);
  }else{
    return await writeFile(content);
  }
}
