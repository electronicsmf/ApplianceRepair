using Microsoft.EntityFrameworkCore;
using OrlandoRepair.API.Models;

namespace OrlandoRepair.API.Data
{
    public class DataContext :DbContext 
    {
        public DataContext(DbContextOptions<DataContext> options ) : base(options){}

        public DbSet<Value> Values { get; set; }
    }
}