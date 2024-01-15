import execDb from './execDb.js';
export default async function writeDb(content){
  return execDb("update users set content = $1",content);
}
