import React from "react";

function CreateArea(props) {
  const [note,setNote] = React.useState({title:"",content:""})

  function handleChange(event){
    const {name,value}=event.target
    setNote(prev=>{
      if (name=="title"){
        return {title:value,content:prev.content}
      }
      else if (name=="content"){
        return {title:prev.title,content:value}
      }
    })
  }
  
  function onAdd(event){
    props.addNote(note);
    event.preventDefault();
    setNote({title:"",content:""});
  }
  
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={note.title} onChange={handleChange} />
        <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={handleChange}  />
        <button onClick={onAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
