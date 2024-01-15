import read from "./read.js";
import write from "./write.js";
export default async function save(content){
  let listSave = [];
  let listLoad = await read();
  if((listLoad!==null)&&(listLoad!=="[]")&&(listLoad!==0)&&(listLoad!==listSave)&&(listLoad.toString()!=="")){
    try {
      listLoad.forEach(element => {
        if(element.id !== content.id){
          listSave.push(element);
        }
      });
    } catch (error) {
      console.log("error",error);  
    }
  }
  listSave.push(content);
  await write(JSON.stringify(listSave));
}
