import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CommissionersDetails = ({commissioners}) => {
    const {commissioners_slug } = useParams();
    const [commissioner, setCommissioner] = useState({});

        useEffect (() => {
            (async () => {
                const commissionerData = await fetch(`http://127.0.0.1:3001/commissioners/${commissioners_slug}`).then(response => response.json());
                console.log("commissionerData is", commissionerData);
                setCommissioner(commissionerData);
            })();
        },[setCommissioner, commissioners_slug]);
    
    
    return (
        <p>{commissioner.name} was Commissioner in {commissioner.year}</p>
)
}
    
export default CommissionersDetails;