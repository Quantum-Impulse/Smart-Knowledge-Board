import axios from 'axios';

const API_URL = 'http://localhost:8080/api/notes';

export interface Note {
    id: number;
    title: string;
    content: string;
    status: string;
    createdAt: string;
    updatedAt: string;
}

export const getNotes = async (): Promise<Note[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getNote = async (id: number): Promise<Note> => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createNote = async (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>): Promise<Note> => {
    const response = await axios.post(API_URL, note);
    return response.data;
};

export const updateNote = async (id: number, note: Partial<Note>): Promise<Note> => {
    const response = await axios.put(`${API_URL}/${id}`, note);
    return response.data;
};

export const deleteNote = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
}; 