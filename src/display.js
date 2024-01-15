import read from "./read.js";
export default async function display(){
    let listShow = [];
    let listLoad = await read();
    if((listLoad!==null)&&(listLoad!=="[]")&&(listLoad!==0)&&(listLoad!==listShow)&&(listLoad.toString()!=="")){
      try {
        listLoad.forEach(element => {
          const data = {
              id: element.id,
              login: element.login,
              location: element.location
          };
          listShow.push(data);
        });
      } catch (error) {
        console.log("error",error);  
      }
    }
    console.log(listShow);
  }
display();