import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { createNote, Note } from '../services/notes';

const NoteForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const queryClient = useQueryClient();

    const mutation = useMutation(createNote, {
        onSuccess: () => {
            queryClient.invalidateQueries('notes');
            setTitle('');
            setContent('');
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate({ title, content, status: 'ACTIVE' });
    };

    return (
        <form onSubmit={handleSubmit} className="note-form">
            <h2>Create New Note</h2>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="content">Content:</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </div>
            <button type="submit" disabled={mutation.isLoading}>
                {mutation.isLoading ? 'Creating...' : 'Create Note'}
            </button>
        </form>
    );
};

export default NoteForm; 