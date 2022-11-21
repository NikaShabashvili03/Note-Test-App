import BodyItemTags from "./BodyItem/BodyItemTags/BodyItemTags"


export const Modal:React.FC<{tags: string}> = ({tags}) => {
    return(
        <div className='Modal'>
            <h2>{tags}</h2>
        </div>
    )
}