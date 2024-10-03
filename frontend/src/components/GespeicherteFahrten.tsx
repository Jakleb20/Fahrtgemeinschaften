// GespeicherteFahrten.tsx
import React, { useEffect, useState } from 'react';
import '../design/AlleFahrtstunden.css';
import { Fahrt } from '../interface/Fahrt.ts';
import '@fortawesome/fontawesome-free/css/all.min.css';

const GespeicherteFahrten: React.FC = () => {
    const [savedFahrten, setSavedFahrten] = useState<Fahrt[]>([]);

    const allFahrtstunden: Fahrt[] = [
        {
            id: 1,
            datum: '2023-10-01',
            uhrzeit: '07:15',
            fahrer: 'Leon',
            ort: 'Feldkirchen',
            dauer: 90,
        },
    ];

    useEffect(() => {
        const saved = localStorage.getItem('savedFahrten');
        if (saved) {
            const savedIds = JSON.parse(saved) as number[];
            const savedTrips = allFahrtstunden.filter(fahrt => savedIds.includes(fahrt.id));
            setSavedFahrten(savedTrips);
        }
    }, []);

    return (
        <div className="alle-fahrtstunden-container">
            <h1>🌟 Gespeicherte Fahrten</h1>
            {savedFahrten.length > 0 ? (
                <table className="styled-table">
                    <thead>
                    <tr>
                        <th><i className="fas fa-calendar-day"></i> Datum</th>
                        <th><i className="fas fa-clock"></i> Uhrzeit</th>
                        <th><i className="fas fa-user"></i> Fahrer</th>
                        <th><i className="fas fa-map-marker-alt"></i> Ort</th>
                        <th><i className="fas fa-hourglass-half"></i> Dauer (Min)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {savedFahrten.map((fahrtstunde) => (
                        <tr key={fahrtstunde.id}>
                            <td data-label="Datum">{fahrtstunde.datum}</td>
                            <td data-label="Uhrzeit">{fahrtstunde.uhrzeit}</td>
                            <td data-label="Fahrer">{fahrtstunde.fahrer}</td>
                            <td data-label="Ort">{fahrtstunde.ort}</td>
                            <td data-label="Dauer (Minuten)">{fahrtstunde.dauer}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p style={{ textAlign: 'center', fontSize: '1.5rem' }}>Keine Fahrten gespeichert.</p>
            )}
        </div>
    );
};

export default GespeicherteFahrten;
