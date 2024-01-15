import request from "./github/request.js";
import save from "./save.js";
import inquirer from "inquirer";
export default async function fetch(){
  const answer = await inquirer.prompt([
    {type: "input",name:"username",default:"jcristovao",message:"Enter your github username"}
  ]);
  let userResponse = await request('GET /users/'+answer.username);
  userResponse.repos = await request('GET /users/'+answer.username+'/repos');
  let languages = [];
  userResponse.repos.forEach(repo => {
    if(repo.language!==null){
      languages.push(repo.language);
    }
  });
  userResponse.languages = languages;
  await save(userResponse);
}
fetch();