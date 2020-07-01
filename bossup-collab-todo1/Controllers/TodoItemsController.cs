using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using bossup_collab_todo1.Models;
using bossup_collab_todo1.Data.EFCore;

namespace bossup_collab_todo1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoItemsController : MyTDBController<TodoItem, EfCoreTodoRepository>
    {
        public TodoItemsController(EfCoreTodoRepository repository): base(repository)
        {

        }
    }
}
