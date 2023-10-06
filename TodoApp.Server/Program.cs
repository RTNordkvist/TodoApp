using Microsoft.EntityFrameworkCore;
using TodoApp.Server.Data;

namespace TodoApp.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var config = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json", optional: false)
                .Build();

            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddDbContext<TodoContext>(options =>
                options.UseSqlServer(config.GetConnectionString("DefaultConnection"),
                o => o.UseQuerySplittingBehavior(QuerySplittingBehavior.SingleQuery)));

            // Add services to the container.
            builder.Services.AddRazorPages();

            var app = builder.Build();

            using (var scope = app.Services.CreateScope())
            {
                var dxbuilder = new DbContextOptionsBuilder<TodoContext>();
                dxbuilder.UseSqlServer(config.GetConnectionString("DefaultConnection"));
                using (var context = new TodoContext(dxbuilder.Options))
                {
                    Console.Write("Applying migrations...");
                    context.Database.Migrate();
                    Console.WriteLine(" Done!");
                }
            }

            // Configure the HTTP request pipeline.
            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.MapRazorPages();
            app.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}/{id?}");

            app.Run();
        }
    }
}