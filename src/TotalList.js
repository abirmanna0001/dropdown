import React from 'react';
import List from './List';

class TotalList extends React.Component 
{

    render()
    {
        return (
            <div>
                <select>
                    <option selected disabled="true">Select Country</option>
                    {
                    List.Countrynames.map((result)=>(<option title={"State : "+result.State}>{result.Cname}</option>))
                    }
                </select>
            </div>
        );
    }
}

export default TotalList;