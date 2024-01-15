import fs from "fs";
import file from "../../resources/file.json" assert { type: "json" };
export default async function verifyFile(){
  if (!fs.existsSync(file.name)) {
    fs.writeFile(file.name,"[]",function(error){
      if (error) {
        console.log("Could not create new file "+file.name);
        return;
      } else {
        console.log("Create new file "+file.name);
      }
    })
  }
}
