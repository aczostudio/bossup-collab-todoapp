using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using bossup_collab_todo1.Models;

namespace bossup_collab_todo1.Data
{
    public class TodoItemContext : DbContext
    {
        public TodoItemContext (DbContextOptions<TodoItemContext> options)
            : base(options)
        {
        }

        public DbSet<TodoItem> TodoItem { get; set; }
    }
}
