import { useState } from "react"


export const Input:React.FC<{setErr: any,setInputModal: any,inputModal: boolean,err: any,CreateNewNote: any, text:any, handleSubmit:any, handleSearchChange:any}> = ({setErr,CreateNewNote, text, handleSubmit, inputModal,handleSearchChange,err,setInputModal}) => {
    const [addText, setAddText] = useState('');
    const [addTag, setAddTag] = useState('');
    return(
        <div className="input__wrapper">
            <form action="" onSubmit={(e) => {handleSubmit(e)}}>
                <input 
                    type="text"
                    placeholder="Search Notes" 
                    value={text} 
                    onChange={(e) => {handleSearchChange(e)}}
                />
            </form>
            {inputModal &&
            <div className="modal__bg">
                <div className="modal">
                    <button onClick={() => {setInputModal(false); setErr(false)}}>X</button>
                    <form onSubmit={(e) => CreateNewNote(addText, addTag, e, setAddText, setAddTag)}>
                        <h2>Add New Note</h2>
                        {err && <p>Please Input Text</p>}
                        <input type="text" placeholder="Please input text" value={addText} onChange={(e) => setAddText(e?.target.value)} />
                        <input type="text" placeholder="Please input tag" value={addTag} onChange={(e) => setAddTag(e?.target.value)}/>
                        <button className="Createbtn">Create</button>
                    </form>
                </div>
             </div>
            }
        </div>
    )
}