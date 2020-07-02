using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using bossup_collab_todo1.Models;
using bossup_collab_todo1.Repositories;
using bossup_collab_todo1.Data;

namespace bossup_collab_todo1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoItemsController : ControllerBase
    {
        private IRepository<TodoItemEntity> todoRepository;
        public TodoItemsController(IRepository<TodoItemEntity> todoRepository)
        {
            this.todoRepository = todoRepository;
        }

        [HttpGet]
        [Route("/api/TodoItems")]
        public IEnumerable<TodoItemEntity> GetAllTodo() => todoRepository.GetAll();

        [HttpGet]
        [Route("/api/TodoItems/{todoId}")]
        public TodoItemEntity GetTodoById(int todoId) => todoRepository.GetById(todoId);

        [HttpPost]
        [Route("/api/TodoItems")]
        [AllowAnonymous]
        public void AddTodo([FromBody] TodoItemEntity todos) => todoRepository.Add(todos);

        [HttpPut]
        [Route("/api/TodoItems")]
        [AllowAnonymous]
        public void UpdateTodo([FromBody] TodoItemEntity todos) => todoRepository.Update(todos);

        [HttpDelete]
        [Route("/api/TodoItems/{todoId}")]
        [AllowAnonymous]
        public void DeleteTodo(int todoId) => todoRepository.Delete(todoId);
    }
}
