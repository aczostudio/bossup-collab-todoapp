using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bossup_collab_todo1.Data
{
    public interface IEntity
    {
        int Id { get; set; }
        string TodoDesc { get; set; }
        string TodoDate { get; set; }
        string TodoTime { get; set; }

    }
}
