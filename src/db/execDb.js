import connDb from './connDb.js';
export default async function execDb(stmt, params){
  let result = [];
  await connDb.any(stmt, [params])
  .then(data => {
    result = data;
  }) // print data;
  .catch(error => {
    console.log('ExecDb ERROR:', error);
  }); // print the error;
  return result;
}