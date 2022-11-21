import BodyItem from './BodyItem/BodyItem';
import { Modal } from './Modal';



interface noteInterface {
    text: any,
    tags: Array<any>,
}

export const Body:React.FC<{sure: boolean, setSure: any, error: boolean,editNote: any, notes:Array<noteInterface> ,setNoteList: any,setNote: any,deleteTag: any,noteList: Array<noteInterface>, DeleteNote: React.MouseEventHandler<HTMLButtonElement>}>  = ({sure,setSure,error,deleteTag,setNote,notes,setNoteList,noteList,editNote, DeleteNote}) => {
    return (
        <div className="body">
            {
                noteList && noteList.length > 0 && noteList?.map((note, index) => <BodyItem sure={sure} setSure={setSure} key={index} error={error} editNote={editNote} deleteTag={deleteTag} setNote={setNote} note={note} setNoteList={setNoteList} DeleteNote={DeleteNote} index={index} notes={notes} noteList={noteList}/>)
            }
        </div>
    )
}