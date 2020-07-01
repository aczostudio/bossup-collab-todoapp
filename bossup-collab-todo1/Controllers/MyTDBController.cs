using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using bossup_collab_todo1.Data;
using bossup_collab_todo1.Models;

namespace bossup_collab_todo1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MyTDBController<TEntity, TRepository> :  ControllerBase
        where TEntity : class, IEntity
        where TRepository : IRepository<TEntity>
    {
        private readonly TRepository repository;

        public MyTDBController(TRepository repositoy)
        {
            this.repository = repositoy;
        }

        // GET: api/TodoItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TEntity>>> GetTodoItem()
        {
            return await repository.GetAll();
        }

        // GET: api/TodoItems/?id=1
        [HttpGet("{id}")]
        public async Task<ActionResult<TEntity>> GetTodoItem([FromQuery]int id)
        {
            var todoItem = await repository.Get(id);

            if (todoItem == null)
            {
                return NotFound();
            }

            return todoItem;
        }

        // PUT: api/TodoItems/?id=1
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTodoItem([FromQuery] int id, [FromQuery] TEntity todoItem)
        {
            if (id != todoItem.Id)
            {
                return BadRequest();
            }

            await repository.Update(todoItem);
            return NoContent();
        }

        // POST: api/TodoItems
        
        [HttpPost]
        public async Task<ActionResult<TEntity>> Post([FromQuery] TEntity todoItem)
        {
            await repository.Add(todoItem);
            
            return CreatedAtAction("Get", new { id = todoItem.Id }, todoItem);
        }

        // DELETE: api/TodoItems/?id=1
        [HttpDelete("{id}")]
        public async Task<ActionResult<TEntity>> Delete([FromQuery] int id)
        {
            var todoItem = await repository.Delete(id);
            if (todoItem == null)
            {
                return NotFound();
            }

            return todoItem;
        }
    }
}
