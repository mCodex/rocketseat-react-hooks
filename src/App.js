import React, { useState, useEffect, useMemo, useCallback } from 'react';

const App = () => {
    const [tech, setTech] = useState([]);
    const [newTech, setNewTech] = useState('');

    const techSize = useMemo(() => tech.length, [tech]);

    useEffect(() => {
        const techsFromLS = localStorage.getItem('tech');

        if (techsFromLS) {
            setTech(JSON.parse(techsFromLS));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tech', JSON.stringify(tech));
    }, [tech]);

    const handleAdd = useCallback(() => {
        setTech(prevState => [...prevState, newTech]);
    }, [newTech]);

    return (
        <>
            <ul>
                {tech.map(t => (
                    <li key={t}>{t}</li>
                ))}
            </ul>
            <strong>Você tem {techSize} tecnologias</strong>
            <br />
            <input type="text" onChange={e => setNewTech(e.target.value)} />
            <button type="button" onClick={handleAdd}>
                Adicionar
            </button>
        </>
    );
};

export default App;
