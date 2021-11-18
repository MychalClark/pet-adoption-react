import {useParams} from 'react-router-dom'
function PetEditor(){

    const {petId} = useParams();
    return(
        <div> <h1>Pet Editor</h1>
        {petId}
        </div>
    )
}
export default PetEditor;