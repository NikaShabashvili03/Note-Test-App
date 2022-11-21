import BodyItemTags from "./BodyItemTags/BodyItemTags"
import React from 'react';
interface noteInterface {
    text: string,
    tags: Array<any>,
}

const BodyItem:React.FC<{sure: boolean, setSure: any ,error: boolean, editNote: any,noteList: Array<noteInterface>,setNote: any, deleteTag: any,  notes: Array<noteInterface>,setNoteList:any,note: noteInterface, DeleteNote: React.MouseEventHandler<HTMLButtonElement>, index: any}> = ({sure,setSure,error,deleteTag,setNote,setNoteList,noteList, notes , note, DeleteNote,editNote, index}) => {
    const [editModal, setEditModal] = React.useState(false);
    const [editedText, setEditedText] = React.useState('');
    return(
        <div className="body__item">
            <ul>
                <div className="body__item__border">
                    <h3>{note?.text}</h3>
                </div>
                <div className="body__item__border">
                    <BodyItemTags sure={sure} setSure={setSure} noteList={noteList} setNote={setNote} deleteTag={deleteTag} notes={notes} setNoteList={setNoteList} note={note}/>
                </div>
            </ul>
            <ul>
                {editModal == true
                    ? (
                        <div className="modal__bg">
                            <div className="modal">
                            <button onClick={() => {setEditModal(false)}}>X</button>
                                <h4>{note.text}</h4>
                                <img src="https://cdn-icons-png.flaticon.com/512/597/597007.png" alt="" />
                                <h4>{editedText}</h4>
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    editNote(note, e, editedText, setEditedText, setEditModal);
                                    }} >
                                    <input placeholder="Input New Note Text" type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)}/>
                                    <button>Change</button>
                                </form>
                                <button className="Deletebtn" type='submit' onClick={() => {DeleteNote(index); setEditModal(false)}}>Delete</button>
                            </div>
                        </div>
                    )
                    : <button onClick={() => {setEditModal(true)}}>Settings</button>
                }
            </ul>
        </div>
    )
}

export default BodyItem