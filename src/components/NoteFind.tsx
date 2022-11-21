import React, { useState } from "react";
import { Body } from "./Body/Body";
import { Input } from "./Input/Input";
import { Title } from "./Title/Title";
import notes from '../data.json'


export const NoteFind:React.FC = () => {
    const [note, setNote] = useState<{text: string; tags: Array<string>}[]>(notes);
    const [noteList, setNoteList] = useState<{text: string; tags: Array<string>}[]>(note);
    const [text, setText] = useState('');
    const [sure, setSure] = useState(false);
    const [err, setErr] = useState(false)
    const [inputModal, setInputModal] = useState(false);
    const CreateNewNote = (addText: any, addTag: any, e: any, setAddTag: any,setAddText: any) => {
        // console.log(addTag.split(" ").fill("#" + addTag));
        const SplitText = addTag.split(" ").toString().replaceAll(',','');

        // Object.entries(SplitText).forEach(Element => {
        //     console.log(Element.fill("#" + addTag));
        // });
        // console.log(SplitText.fill("#",3))
        // console.log(SplitText);

        e.preventDefault();
        const newNote =({text: addText, tags: ["#" + SplitText]})
        if(addTag.trim().length > 0 && addText.trim().length > 0){
            setErr(false);
            setNote([...note, newNote])
            setNoteList([...noteList, newNote])
            setInputModal(false);
        }
        else{
            setErr(true);
        }
        setAddTag('')
        setAddText('')
    }
    const editNote = (notes: any, e: React.ChangeEvent<HTMLInputElement>,editedText: string, setEditedText: any, setEditModal: any) => {
        e.preventDefault();
        if(editedText.trim().length > 0){
            if(note[note.indexOf(notes)].text == notes.text){
                note[note.indexOf(notes)].text = editedText;
                setEditModal(false);
            }
        }else{
            return
        }
        setEditedText('');
    }
    const deleteTag = (i: any, thistags: string, notes: any) => {

        // const filterednotes = note.tags.filter(filtered => filtered !== note.tags[i]);
        // console.log(notes);
        // console.log(notes.indexOf(note))
        // console.log(notes[notes.indexOf(note)].tags);
        // // setNoteList([...notes], notes[notes.indexOf(note)].tags.filter(filtered => filtered !== noteList[notes.indexOf(note)].tags[i]));
        // console.log(notes[notes.indexOf(note)].tags[1])
        // console.log(notes);
        
       
            
        // setNote(
        //     note[note.indexOf(notes)].tags.map(edit => {
        //         if (edit.id === post.id) {
        //             edit.name = item
        //         }
        //         return edit
        //     }),
        // );
        //note[note.indexOf(notes)].tags.filter(filtered => filtered !== notes.tags[i])
        // console.log(noteList.indexOf(notes));
        // console.log(i);
        // console.log(note);
        // const filttag = note[note.indexOf(notes)].tags.filter(fil => fil !== notes.tags[i]);
        // console.log(filttag);
        // console.log([{tags: [...note[note.indexOf(notes)].tags, note[note.indexOf(notes)].tags.filter(a => a !== notes.tags[i]).toString()]}])

        // setNote([{text, tags: [...note[note.indexOf(notes)].tags, note[note.indexOf(notes)].tags.filter(a => a !== notes.tags[i]).toString()]}])

        // setNote(prevState => ({
        //     ...prevState,
        //         tags: [...prevState, 'nika'],
        //   }));
        const filtered = note[note.indexOf(notes)].tags.filter(fil => fil !== notes.tags[i])
        // console.log(filtered);
        note[note.indexOf(notes)].tags = filtered;
        noteList[noteList.indexOf(notes)].tags = filtered;
        setSure(true);
        setTimeout(() => {
            setSure(false); 
        }, 10);
        // setNoteList({...note, [note.tags: noteFilt })

        // console.log({tags: [filtNote]})
        //note.map(el => el.tags.filter(a => a !== notes.tags[i]))
        
        // setNote([...note, tags: [...note[0].tags, filtered]])
        // setNote(prevNote => ({
        //     ...prevNote, tags: [...prevNote[prevNote.indexOf(notes)].tags, [filtered]]
        // }))
        // setNoteList(prevNoteList => ({
        //     ...prevNoteList, tags: [...prevNoteList[0].tags, 'Nika']
        // }));
        // setNoteList({note[note.indexOf(notes)].tags.filter(fill => fill.tags !== notes.tags[i])});
        // setNote({...notes, tags: [...note, note.filter(fil => fil.tags[i] !== notes.tags[i])]})
        // console.log(filtered);
    }





    const handleSubmit = (e: any) => e.preventDefault();

    const handleSearchChange = (e: any) => {
            setText(e.target.value); //str.substr(str.indexOf("#"), str.lenght)
            if(!e.target.value) return setNoteList(note);  
            //some.includes(e.target.value.substring(0, e.target.value.indexOf('#'))
            const filterNote = note?.filter(post => post.text.includes(text) || post.tags.some(some => some.includes(text.substring(text.indexOf("#"), text.length))))
            setNoteList(filterNote);
    } 
    const DeleteNote = (index:any) => {
        setNoteList(note.filter(filtered => filtered !== noteList[index]));
        setNote(note.filter(filtered => filtered !== noteList[index]));
    }
    return (
        <div className="NoteFind">
            <Title title={'Notes'}/>
            <Input setErr={setErr} setInputModal={setInputModal} err={err} inputModal={inputModal} CreateNewNote={CreateNewNote} text={text} handleSubmit={handleSubmit} handleSearchChange={handleSearchChange}/>
            <div className="NewNote">
                <button onClick={() => {setInputModal(true)}} className="NewNote__button">Add New</button>
            </div>
            <Body sure={sure} setSure={setSure} editNote={editNote} setNote={setNote} error={err} deleteTag={deleteTag} notes={note} setNoteList={setNoteList} DeleteNote={DeleteNote} noteList={noteList}/>
        </div>
    )
}