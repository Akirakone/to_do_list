import './App.css';
import React, {useState} from 'react';

function App() {

  const [newtask, setNewtask] = useState("");
  const [tasktodo, setTasktodo] =useState([]);
   
  

    const handleNewtaskSubmit= (event)=>{
        event.preventDefault();

        if (newtask.length ==0){
          return;
        }
        const todoItem={
          text:newtask,
          complete: false
        }

        setTasktodo([...tasktodo, todoItem])
        setNewtask ("")
    }

    const onDeleteHandler = (Tasks) => {
      const filterTasktodo= tasktodo.filter((tasktodo,i)=>{
        return i!= Tasks;
      });
      setTasktodo(filterTasktodo)
      // const newArray = [...tasktodo];
      // newArray.splice(index, 1);
      // setTasktodo(newArray);
      
  }


  const handletogglecomplete = (index) => {
    const newArray = [...tasktodo];
    if (newArray[index].complete ) {
        newArray[index].complete = false
    } else {
        newArray[index].complete = true

    }
    setTasktodo(newArray);

}




  return (
    <div style={{textAlign:"center"}}>
      <h1>What do you need to do ?</h1>
    <form  onSubmit={(event)=>{handleNewtaskSubmit(event)}}>

        <input onChange= {(event)=>{setNewtask(event.target.value);}} value={newtask}
        type="text"/>

    <div>
        <button>Add Task</button>
    </div>
    </form>

    { 
            tasktodo.map((tasktodo, i) => {
                  return <div key={i}>
                    <input onChange={()=>{handletogglecomplete(i);}} checked={tasktodo.complete}  type ="checkbox" />
                <span>{tasktodo.text}</span>
                <button style={{ marginLeft: "5px" }} onClick={() => { onDeleteHandler(i) }}>Delete</button>
                </div>
            })
        }
   
  
</div>
  );
}

export default App;

