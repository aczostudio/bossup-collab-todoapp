using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bossup_collab_todo1.Models;
using Microsoft.EntityFrameworkCore;

namespace bossup_collab_todo1.Repositories
{
    public class TodoItemContext: DbContext
    {
        public TodoItemContext(DbContextOptions<TodoItemContext> options) : base(options)
        { }
    
        public DbSet<TodoItemEntity> TodoItem { get; set; }
    }

}
