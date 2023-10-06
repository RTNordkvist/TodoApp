namespace TodoApp.Server.Data.Models
{
    public class Todo
    {
        public int Id { get; set; }

        public string Text { get; set; }

        public DateTime? CreatedDate { get; set; }

        public DateTime? CompletedDate { get; set; }
    }
}
