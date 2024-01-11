import Button from "./AI/Buton";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import env from "../env.json"


function Note() {
    let { noteURL } = useParams()
    console.log('noteURL', noteURL)
    const [ noteText, setNoteText ]= useState('')
    const [ lineClass, setLineClass] = useState('hide')
    const [ formClass, setFormClass] = useState('')
    const [ errorClass, setErrorClass] = useState('hide')
    // const [ hash, setHash ] = useState('')
    console.log('noteText1 - ', noteText, 'hash-', noteURL)




    useEffect(()=> {
        console.log('useEffect')
        if(noteURL !== undefined) { 
            console.log('fetch on')

            fetch(env.urlBackend, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({"url": noteURL})
            }
            )
            .then( respons => respons.json())
            .then(respons => {
                console.log(respons)
                if(respons.result){
                    console.log('first')
                    console.log(respons.result)
                    setNoteText(respons.note)
                    console.log('noteText - ', noteText)
                    setErrorClass('hide')
                    setFormClass("hide")
                    setLineClass("")
                }
                else if (!respons.result) {
                    console.log('ErrorClass',respons.result)
                    setFormClass('hide')
                    setLineClass('hide')
                    setErrorClass('')
                }
            })
        } else {
            console.log('form')
            setFormClass('')
            setLineClass('hide')
            setErrorClass('hide')

        }
    }, [noteURL, noteText])

    const getNote=(event) =>{
        event.preventDefault()
        let url = event.target.elements.url.value 
        console.log(event, url)
        url = url.trim()
        console.log(url)
        if(url==='') {
            alert('Field is emty')
            return false
        }
        noteURL = url
        window.location.href = env.url+"/"+url

    }

    const searchNote = () => {
        window.location.href=env.url
    }


    return (
        <div className="note component">
            <div className={`note-input ${lineClass}`}> 
                <div>Note: {noteURL}</div>
                <div className="hash-area">{noteText}</div>
                <div className="note-button" >
                    <Button label="Look for a Note one more" onClick={searchNote} ></Button>
                </div>

            </div>
            <div className={`error-message ${errorClass}`}>
                <div className="error-block">Замітки з таким хешем не існує.</div>
                <div className="note-button" > 
                    <Button label="Look for a Note" onClick={searchNote}></Button>
                </div>
            </div>
            <div className={formClass}>
                <form  onSubmit={getNote} > 
                    <div className="note-input"> 
                        <div className="note-hash">
                            <label htmlFor="url">Введіть hash замітки</label>
                            <input type="text" name="url" id="url" />
                        </div>
                        <div className="note-button" >
                            <Button label="Look for a Note" type="submit"></Button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Note;