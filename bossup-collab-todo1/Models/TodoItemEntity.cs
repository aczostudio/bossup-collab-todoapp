using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using bossup_collab_todo1.Data;

namespace bossup_collab_todo1.Models
{
    public class TodoItemEntity : IEntity
    {
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [StringLength(60, MinimumLength = 3)]
        public string TodoDesc { get; set; }

        [StringLength(60)]
        public string TodoDate { get; set; }

        [StringLength(60)]
        public string TodoTime { get; set; }
    }
}
