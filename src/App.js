import React, { useState, useEffect } from 'react';

const App = () => {
    const [tech, setTech] = useState(['ReactJS', 'React Native']);

    const [newTech, setNewTech] = useState('');

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
