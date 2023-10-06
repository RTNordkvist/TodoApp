﻿using Microsoft.EntityFrameworkCore;
using TodoApp.Server.Data.Models;

namespace TodoApp.Server.Data
{
    public class TodoContext : DbContext
    {

        public TodoContext(DbContextOptions<TodoContext> options) : base(options)
        {

        }

        public DbSet<Todo> Todos { get; set; }
    }
}
