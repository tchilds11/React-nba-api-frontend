import { useEffect, useState } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import CommissionersDetails from './CommissionersDetails';

const CommissionersList = () => {
    const [commissioners, setCommissioners] = useState([])
    const history = useHistory();

    useEffect (() => {
        (async () => {
            const commissionerData = await fetch('http://127.0.0.1:3001/commissioners').then(response => response.json());
            console.log("commissionerData is", commissionerData);
            setCommissioners(commissionerData);
        })();
    },[setCommissioners]);
    
    return (
        <>
            {!!commissioners.length ? (
                <>
                <Route exact path='/'>
                    <ul>
                        {commissioners.map((commissioner, index) => {
                            return (
                                 <li key={index}>
                                    <Link to={`/commissioner/${commissioner.slug}`}>{commissioner.name}</Link>
                                    </li>
                        )})}
                    </ul>
                </Route>
                <Route path='/commissioner/:commissioner_slug'>
                    <CommissionersDetails commissioners={commissioners} />
                    <button type="button" onClick={() => history.goBack()}>GO Back</button>
                </Route>
                </>
             ) : (
                 <p>Loading Commissioners</p>
             )}
        </>
    );
};

export default CommissionersList;