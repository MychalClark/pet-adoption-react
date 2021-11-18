
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';

function PetEditor({ auth, showError }) {
  const { petId } = useParams();
  const [pet,setPet] = useState(null);
  const [error,setError]=useState('');

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_URL}/api/pet/${petId}`, {
      method: 'get',
      headers: {
        authorization: `Bearer ${auth?.token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        setPet(res.data);
      })
      .catch((err) => {
        console.error(err);
        showError(err.message)
      });
  }, [auth, petId]);
  return (
    <div>
      {' '}
      <h1>Pet Editor</h1>
      {petId}
    </div>
  );
}
export default PetEditor;
