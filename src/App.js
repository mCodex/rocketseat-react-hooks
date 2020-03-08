import React, { useState, useEffect } from 'react';

const App = () => {
    const [tech, setTech] = useState([]);
    const [newTech, setNewTech] = useState('');

    useEffect(() => {
        const techsFromLS = localStorage.getItem('tech');

        if (techsFromLS) {
            setTech(JSON.parse(techsFromLS));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tech', JSON.stringify(tech));
    }, [tech]);

    const handleAdd = () => setTech(prevState => [...prevState, newTech]);

    return (
        <>
            <ul>
                {tech.map(t => (
                    <li key={t}>{t}</li>
                ))}
            </ul>
            <input type="text" onChange={e => setNewTech(e.target.value)} />
            <button type="button" onClick={handleAdd}>
                Adicionar
            </button>
        </>
    );
};

export default App;
