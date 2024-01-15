import inquirer from "inquirer";
import read from "./read.js";
export default async function location(){
  const answer = await inquirer.prompt([
    {type: "input",name:"location",default:"Lisbon",message:"Enter the location to filter"}
  ]);
  let listShow = [];
  let listLoad = await read();
  if((listLoad!==null)&&(listLoad!=="[]")&&(listLoad!==0)&&(listLoad!==listShow)&&(listLoad.toString()!=="")){
    try {
      listLoad.forEach(element => {
        if(element.location===answer.location){
          const data = {
            id: element.id,
            login: element.login,
            location: element.location
          };
          listShow.push(data);
        }
      });
    } catch (error) {
      console.log("error",error);  
    }
  }
  console.log(listShow);
}
location();