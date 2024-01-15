import queryDb from './queryDb.js';
export default async function readDb(){
  const dbData = await queryDb("select content from users");
  try {
    return JSON.parse(dbData);
  } catch (error) {
    return "[]";
  }
}
