package com.skb.controller;

import com.skb.entity.Task;
import com.skb.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @GetMapping
    public void getAllTasks() {
        // TODO: Implement
    }

    @GetMapping("/{id}")
    public void getTaskById(@PathVariable Long id) {
        // TODO: Implement
    }

    @PostMapping
    public void createTask(@RequestBody Task task) {
        // TODO: Implement
    }

    @PutMapping("/{id}")
    public void updateTask(@PathVariable Long id, @RequestBody Task task) {
        // TODO: Implement
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        // TODO: Implement
    }
} 