
import {getData} from "@/actions/todoActions";
import Todos from "@/components/todos";
import {getAllUsers} from "@/actions/userActions";
export default async  function Home() {

    const users = await getAllUsers();
    const data = await getData(users[0].id);
    console.log(users);
  return (
   <main className="flex  items-center justify-center ">
       <Todos todos={data} user={users[0]}/>
   </main>
  );
}
