import inquirer from "inquirer";
import read from "./read.js";
export default async function both(){
  const answer = await inquirer.prompt([
    {type: "input",name:"language",default:"TypeScript",message:"Enter the language to filter"},
    {type: "input",name:"location",default:"Lisbon",message:"Enter the location to filter"}
  ]);
  let listShow = [];
  let listLoad = await read();
  if((listLoad!==null)&&(listLoad!=="[]")&&(listLoad!==0)&&(listLoad!==listShow)&&(listLoad.toString()!=="")){
    try {
      listLoad.forEach(userLoad => {
        let hasLanguage = false;
        userLoad.languages.forEach(userLanguage => {
          if(answer.language===userLanguage){
            hasLanguage = true;
          }
        })
        if((hasLanguage)&&(userLoad.location===answer.location)){
          const data = {
            id: userLoad.id,
            login: userLoad.login,
            location: userLoad.location
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
both();
