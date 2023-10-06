using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApp.Server.Data;
using TodoApp.Server.Data.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TodoApp.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly TodoContext _todoContext;

        public TodoController(TodoContext todoContext)
        {
            _todoContext = todoContext;
        }

        // GET: api/<TodoController>
        [HttpGet]
        public IActionResult Get()
        {
            var result = _todoContext.Todos
                .AsNoTracking()
                .Where(x => x.CompletedDate == null)
                .ToList();
            return Ok(result);
        }

        // GET api/<TodoController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var result = _todoContext.Todos
                .AsNoTracking()
                .Where(x => x.Id == id)
                .FirstOrDefault();
            return Ok(result);
        }

        // POST api/<TodoController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Todo model)
        {
            model.Id = 0;
            model.CompletedDate = null;
            model.CreatedDate = DateTime.UtcNow;
            _todoContext.Todos.Add(model);
            await _todoContext.SaveChangesAsync();
            return Ok(model.Id);
        }

        // PUT api/<TodoController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Todo model)
        {
            var result = _todoContext.Todos
                .Where(x => x.Id == id)
                .FirstOrDefault();

            result.CompletedDate = DateTime.UtcNow;
            await _todoContext.SaveChangesAsync();
            return Ok();
        }

        // DELETE api/<TodoController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var rows = await _todoContext.Todos
                .Where(x => x.Id == id)
                .ExecuteDeleteAsync();
            return Ok(rows == 1);
        }
    }
}
