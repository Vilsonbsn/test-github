import queryDb from './queryDb.js';
export default async function verifyDb(){
  await queryDb(
    "DO $$ \n"+
    "DECLARE \n"+
    "  user_qtt INT := 0; \n"+
    "BEGIN \n"+
    "  select count(1) into user_qtt from information_schema.tables where table_name = 'users'; \n"+
    "  IF user_qtt = 0 THEN \n"+
    "    EXECUTE 'create table users(content json);'; \n"+
    "  END IF; \n"+
    "  EXECUTE 'select count(1) from users' into user_qtt; \n"+
    "  IF user_qtt = 0 THEN \n"+
    "    EXECUTE 'insert into users(content)values(''[]''::json)'; \n"+
    "  END IF; \n"+
    "END \n"+
    "$$;");
}