import write from "./write.js";
export default async function clear(){
  await write("[]");
}
clear();