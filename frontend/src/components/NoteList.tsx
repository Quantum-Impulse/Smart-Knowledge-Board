import React from 'react';
import { useQuery } from 'react-query';
import { getNotes } from '../services/notes';

const NoteList: React.FC = () => {
    const { data: notes, isLoading, error } = useQuery('notes', getNotes);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading notes</div>;

    return (
        <div className="note-list">
            <h2>Notes</h2>
            <ul>
                {notes?.map((note) => (
                    <li key={note.id}>
                        <h3>{note.title}</h3>
                        <p>{note.content}</p>
                        <span>Status: {note.status}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NoteList; 