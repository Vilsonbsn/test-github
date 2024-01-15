import config from "../resources/config.json" assert { type: "json" };
import verifyFile from "./file/verifyFile.js";
import verifyDb from "./db/verifyDb.js";
export default async function verify(){
  if(config.type==="db"){
    verifyDb();
  }else{
    verifyFile();
  }
}
