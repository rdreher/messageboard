using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;

namespace MessageBoardBackend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApiContext>(opt => 
              opt.UseInMemoryDatabase("Messages"));
            
            services.AddCors(options => options.AddPolicy("Cors", builder =>
            {
                builder
                    .AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
            }));
            services.AddMvc();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, IServiceProvider serviceProvider)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors("Cors");
            app.UseMvc();

            var context = serviceProvider.GetService<ApiContext>();
            SeedData(context);
        }

        public void SeedData(ApiContext context) {
            context.Messages.Add(new Models.Message
            {
                Owner = "Rafael",
                Text = "Hello there"
            });

            context.Messages.Add(new Models.Message
            {
                Owner = "Dani",
                Text = "Hello Maluco"
            });

            context.Users.Add(new Models.User
            {
                Email = "rafael@gmail.com",
                FirstName = "Rafael",
                Password = "a"
            });

            context.SaveChanges();
        }
    }
}
