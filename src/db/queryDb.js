import connDb from './connDb.js';
export default async function queryDb(stmt){
  let result = [];
  await connDb.any(stmt)
  .then(data => {
    result = data;
  }) // print data;
  .catch(error => {
    console.log('queryDB ERROR:', stmt, error);
  }); // print the error;
  return result;
}