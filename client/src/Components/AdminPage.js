import React, {useState} from 'react'

export default function AdminPage() {
    const [file, setFile] = useState()
    function handleChange(e){
        if(e.target.files){
            console.log(e.target.files[0])
        }
        
    }
;

    function handleSubmit(e){
        e.preventDefault()
        fetch('/englishes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(file),
            })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
         })
         
         setFile()
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='file' name = 'name' value = {file} onChange = {handleChange}/>
            <button type='submit'>Submit New Entry</button>
        </form>
    </div>
  )
}
