import React, { useState } from "react";
import Button from "./AI/Buton";
import env from "../env.json"

function Create() {
    // let textNote = React.createRef()
    // const [showFirstContent, setShowFirstContent] = useState(true);
    // let hash = ""

    // const createNote = () => {
    //    console.log(textNote.current.value)
    //    //робимо запит, якщо запит успішний, то виконується наступний код:
    //    textNote.current.value = ""
    //    setShowFirstContent(!showFirstContent)
    //    console.log(showFirstContent)
    //    // встановлюємо новий хеш
    // }

    // const createNewNote = () => {
    //     console.log('createNewNote')
    //     setShowFirstContent(!showFirstContent)
    // }
//======
// eslint-disable-next-line
const [ url, setUrl ]  = useState("")
const [ lineClass, setLineClass ] = useState("hide")
const [ formClass, setFormClass] = useState('')


let loadDataFromForm = (event) => {
    event.preventDefault()
    let note = event.target.elements.note.value
    console.log((note))
    note = note.trim()
    if( note === ""){
        alert("field is emty")
        return false
    }
    sendData( {"note": note})
}

let sendData = (obj) => {
    fetch(env.urlBackend, {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(obj)
    
    }
    )
    .then( respons => respons.json())
    .then(respons => {
        console.log(respons)
        if(respons.result){
            setUrl(env.url+"/"+respons.url)
            setFormClass("hide")
            setLineClass("")
        }
    })
}

    return (
        <div className="create component">

            <form onSubmit={loadDataFromForm} className={formClass}>
                <div className="create-input">
                    <label htmlFor="">Введіть замітку</label>
                    <textarea  placeholder="Text note system" name="note" id="note" maxLength={1000}/>
                    <p>Увага! максимальна довжина замітки 1000 символів!</p>

                </div>
                <div className="create-button">
                    <Button label="Create a Note" type="submit"/>
                </div>
            </form>

            <div className={`create-input ${lineClass}`}>
                <div className="hash-area">{url}</div>
                <div className="create-button"> 
                    <Button label="Create a new Note" onClick={function(){window.location.reload()}}/>
                </div>
            </div>
            
            {/* <div className="create-input">
            {showFirstContent ? (
                <> 
                    <p>Введіть замітку</p>
                    <textarea  placeholder="Text note system" name="note" ref={textNote} maxLength={1000}/>
                    <p>Увага! максимальна довжина замітки 1000 символів!</p>
                </>
           
            ) : (
                <> 
                    <div className="hash-area">{hash}</div>
                    <textarea  placeholder={hash} ref={textNote} />
                    <p>Скопіюйте URL і передайте адресату. Увага! Прочитати замітку можна лише одін раз.</p>
                </>
            )}
            </div>


            <div className="create-button">
            {showFirstContent ? (
                <Button label="Create" type="submit" onClick={createNote}/>
            ) : (
                <Button label="Create new note" onClick={createNewNote}/>

            )}
            </div> */}

        </div>
    );
}

export default Create;