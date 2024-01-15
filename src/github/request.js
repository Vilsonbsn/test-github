import { Octokit } from "@octokit/core";
import { exit } from "process"; 
export default async function request(command){
  const octokit = new Octokit({});
  try {
    const response = await octokit.request(command, {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
    return response.data;
  } catch (error) {
    console.log("Failed to perform command "+command);
  }
}
