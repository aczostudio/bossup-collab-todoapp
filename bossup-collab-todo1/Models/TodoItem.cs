using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using bossup_collab_todo1.Data;

namespace bossup_collab_todo1.Models
{
    public class TodoItem : IEntity
    {
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [StringLength(60, MinimumLength = 3)]
        public string TodoDesc { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime TodoDate { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime TodoTime { get; set; }
    }
}
