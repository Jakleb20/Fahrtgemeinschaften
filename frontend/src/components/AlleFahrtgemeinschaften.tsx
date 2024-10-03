// AlleFahrtstunden.tsx
import React, { useState, useEffect } from 'react';
import '../design/AlleFahrtstunden.css';
import { Fahrt } from '../interface/Fahrt.ts';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AlleFahrtstunden: React.FC = () => {
    const [savedFahrten, setSavedFahrten] = useState<number[]>([]);

    const fahrtstunden: Fahrt[] = [
        {
            id: 1,
            datum: '2023-10-01',
            uhrzeit: '07:15',
            fahrer: 'Leon',
            ort: 'Feldkirchen',
            dauer: 90,
        },
        {
            id: 2,
            datum: '2023-10-05',
            uhrzeit: '14:00',
            fahrer: 'Jonas',
            ort: 'Puntigam',
            dauer: 60,
        },
        {
            id: 3,
            datum: '2023-10-10',
            uhrzeit: '09:30',
            fahrer: 'Mia',
            ort: 'Graz',
            dauer: 120,
        },
        {
            id: 4,
            datum: '2023-10-12',
            uhrzeit: '16:45',
            fahrer: 'Lukas',
            ort: 'Wien',
            dauer: 75,
        },
        {
            id: 5,
            datum: '2023-10-15',
            uhrzeit: '08:00',
            fahrer: 'Emma',
            ort: 'Linz',
            dauer: 90,
        },
        {
            id: 6,
            datum: '2023-10-18',
            uhrzeit: '13:15',
            fahrer: 'Max',
            ort: 'Salzburg',
            dauer: 60,
        },
        {
            id: 7,
            datum: '2023-10-20',
            uhrzeit: '11:00',
            fahrer: 'Anna',
            ort: 'Innsbruck',
            dauer: 45,
        },
        {
            id: 8,
            datum: '2023-10-22',
            uhrzeit: '17:30',
            fahrer: 'Felix',
            ort: 'Klagenfurt',
            dauer: 80,
        },
        {
            id: 9,
            datum: '2023-10-25',
            uhrzeit: '10:00',
            fahrer: 'Sophia',
            ort: 'Villach',
            dauer: 100,
        },
        {
            id: 10,
            datum: '2023-10-28',
            uhrzeit: '15:00',
            fahrer: 'Paul',
            ort: 'St. Pölten',
            dauer: 70,
        },
    ];

    useEffect(() => {
        const saved = localStorage.getItem('savedFahrten');
        if (saved) {
            setSavedFahrten(JSON.parse(saved));
        }
    }, []);

    const handleSave = (id: number) => {
        let updatedSavedFahrten;
        if (savedFahrten.includes(id)) {
            updatedSavedFahrten = savedFahrten.filter(fahrtId => fahrtId !== id);
        } else {
            updatedSavedFahrten = [...savedFahrten, id];
        }
        setSavedFahrten(updatedSavedFahrten);
        localStorage.setItem('savedFahrten', JSON.stringify(updatedSavedFahrten));
    };

    return (
        <div className="alle-fahrtstunden-container">
            <h1>📅 Alle Fahrten</h1>
            <table className="styled-table">
                <thead>
                <tr>
                    <th><i className="fas fa-calendar-day"></i> Datum</th>
                    <th><i className="fas fa-clock"></i> Uhrzeit</th>
                    <th><i className="fas fa-user"></i> Fahrer</th>
                    <th><i className="fas fa-map-marker-alt"></i> Ort</th>
                    <th><i className="fas fa-hourglass-half"></i> Dauer (Min)</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {fahrtstunden.map((fahrtstunde) => (
                    <tr key={fahrtstunde.id}>
                        <td data-label="Datum">{fahrtstunde.datum}</td>
                        <td data-label="Uhrzeit">{fahrtstunde.uhrzeit}</td>
                        <td data-label="Fahrer">{fahrtstunde.fahrer}</td>
                        <td data-label="Ort">{fahrtstunde.ort}</td>
                        <td data-label="Dauer (Minuten)">{fahrtstunde.dauer}</td>
                        <td>
                            <button
                                className={`save-button ${savedFahrten.includes(fahrtstunde.id) ? 'saved' : ''}`}
                                onClick={() => handleSave(fahrtstunde.id)}
                            >
                                {savedFahrten.includes(fahrtstunde.id) ? 'Gespeichert' : 'Speichern'}
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AlleFahrtstunden;
