import config from "../resources/config.json" assert { type: "json" };
import readFile from "./file/readFile.js";
import readDb from "./db/readDb.js";
import verify from "./verify.js";
export default async function read(){
  verify();
  if(config.type==="db"){
    return await readDb();
  }else{
    return await readFile();
  }
}
