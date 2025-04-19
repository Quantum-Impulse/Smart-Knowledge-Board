package com.skb.controller;

import com.skb.entity.Note;
import com.skb.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/notes")
public class NoteController {

    @Autowired
    private NoteRepository noteRepository;

    @GetMapping
    public void getAllNotes() {
        // TODO: Implement
    }

    @GetMapping("/{id}")
    public void getNoteById(@PathVariable Long id) {
        // TODO: Implement
    }

    @PostMapping
    public void createNote(@RequestBody Note note) {
        // TODO: Implement
    }

    @PutMapping("/{id}")
    public void updateNote(@PathVariable Long id, @RequestBody Note note) {
        // TODO: Implement
    }

    @DeleteMapping("/{id}")
    public void deleteNote(@PathVariable Long id) {
        // TODO: Implement
    }
} 