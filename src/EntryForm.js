import React, { useState } from 'react'
import { STUDENTS } from './data';

const EntryForm = (props) => {
    
    const [name, setName] = useState('');
    const [joiningDate, setJoiningDate] = useState('');

    const checkValidity = (actual, submitted) => {
        return new Date(actual) >= new Date(submitted);
    }

    const handleAdd = (e) => {
        e.preventDefault();
        if (name.length === 0 || joiningDate.length === 0) return;

        let found = STUDENTS.filter(nameFromList => nameFromList.name.toLowerCase() === name.toLowerCase());
        if (found.length === 0) { 
            props.setError('Name not found!');
            return;
        }

        if (!checkValidity(found[0].validityDate, joiningDate)) {
            props.setError('Validity has expired!');
            return;
        }

        props.setError('');
        
        props.setNames([...props.names, found[0].name]);
        setName('');
        setJoiningDate('');

    }

    return (
        <div>
            <form>
                <input type={'text'} value={name} onChange={(e) => setName(e.target.value)} />
                <input type={'date'} value={joiningDate} onChange={(e) => setJoiningDate(e.target.value)} />
                <button type='submit' onClick={(e) => handleAdd(e)}>Add</button>
            </form>
        </div>
    )
}

export default EntryForm