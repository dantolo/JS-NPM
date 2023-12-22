import './App.css'
import  axios from 'axios'

function App() {

//funcion async-await para consumir API
const getUsers = async () => {
  try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response);
    console.log(response.data[0].name);
  } catch (error) {
    console.log("peligroooo", error);
  }
}


///////////////////////////////////////////////
//funcion para enviar un usuario
const postUser = async () =>{
  try{
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const user = {
    userId: 1986,
    title: "Java Fullstack dev",
    body: "Daniel Maldonado"
  }
  const  response = await axios.post(url, user);
  console.log(response);
  // para mostrar solamente la informacion en consola 
  console.log(response.data);
} catch (error) {
  console.log("peligroooo", error);
}
}

///////////////////////////////////////////////
  return (
    <>
      <div>
        <h1 className="box">HTTP - Axios</h1>
      </div>
      <div className="card">
        <button onClick={getUsers}>
          Get Method
        </button>
        <button onClick={postUser}>
          Post Method
        </button>
      </div>
    </>
  )
}

export default App
