import React, { useState } from "react"
import { Modal } from "../../Modal"
import { ItemButton } from "./ItemButton/ItemButton";

interface noteInterface {
    text: string,
    tags: Array<any>,
}

const BodyItemTags:React.FC<{sure:boolean, setSure: any, note: noteInterface,notes: Array<noteInterface>,deleteTag: any,setNote: any,setNoteList:any,noteList: Array<noteInterface>}> = ({sure, setSure, deleteTag,setNote,noteList,setNoteList, note, notes}) => {
    const [AddTagModal, setAddTagModal] = useState(false);
    const [newTag, setNewTag] = useState('');
    const [error, setError] = useState('');
    const [tagChanger, setTagChanger] = useState('');
    const AddNewTag = (e: any) => {
        e.preventDefault();
        setError('')
        if(newTag.trim().length === 0){
            setError('Please enter valid tag')
            return
        }
        note.tags.push("#" + newTag);
        setAddTagModal(false);
    }
    // const ChangeTag = (e:any, i: any,tags: string) => {
    //     notes[notes.indexOf(note)].tags[0] = tagChanger;
    // }
    // const deleteTag = (i: any, thistags: string) => {
    //     // const filterednotes = note.tags.filter(filtered => filtered !== note.tags[i]);
    //     // console.log(notes);
    //     // console.log(notes.indexOf(note))
    //     // console.log(notes[notes.indexOf(note)].tags);
    //     // // setNoteList([...notes], notes[notes.indexOf(note)].tags.filter(filtered => filtered !== noteList[notes.indexOf(note)].tags[i]));
    //     // console.log(notes[notes.indexOf(note)].tags[1])
    //     // console.log(notes);
        
    //     setNote(
    //         notes[notes.indexOf(note)].tags.filter(filtered => filtered !== thistags)
    //     )
        
        
    // }
    const [countModal, setCountModal] = useState(0);
    return(
    <div className="body__item__tags">
        <button className="editTagbtn" onClick={() => {
            setCountModal(countModal + 1);
            setAddTagModal(true);
            setError('');
            if(countModal % 2){
                setAddTagModal(false);
                setCountModal(0)
                setError('');
            }
            }}>
            {countModal % 2 ? <h2>-</h2> : <h2>+</h2>}
            </button>
        {AddTagModal && 
            <div className="modal__bga">
                <div className="modala">
                    <form onSubmit={(e) => AddNewTag(e)}>
                        <ul>{error}</ul>
                        <ul>
                            <input placeholder="Input New Tag" type="text" value={newTag} onChange={e => {setError(''); setNewTag(e.target.value)}} />
                            <button>submit</button>
                        </ul>
                    </form>
                </div>
            </div>
        }
        {note?.tags.map((tags, i) => <ItemButton setSure={setSure} sure={sure} key={i} note={note} tagChanger={tagChanger} setTagChanger={setTagChanger} deleteTag={deleteTag} tags={tags} i={i}/>)}
    </div>    
    )
}

export default BodyItemTags