import React, { useState } from "react";


interface noteInterface {
    text: string,
    tags: Array<any>,
}


export const ItemButton:React.FC<{sure: boolean, setSure: any,setTagChanger:any, tagChanger:any ,note: noteInterface, tags: string,i:number,deleteTag: any}> = ({sure,setSure,note,tagChanger,setTagChanger,deleteTag,tags, i}) => {
    const [ChangeTagModal, setChangeTagModal] = React.useState(false);
    const [clickCountet, setClickCounter] = useState(0);
    return (
        <>
          <button key={i} onClick={() => 
             {
                setChangeTagModal(true);
                setClickCounter(clickCountet + 1);
                if(clickCountet / 2){
                    setChangeTagModal(false)
                    setClickCounter(0)
                }
            }
          }>{tags}{ChangeTagModal && 
            <button className="deleteTag" onClick={(e) => {
                deleteTag(i,tags,note);
                setSure(true);
            }}>Delete</button>
          }</button>
          
        </>
    )
}