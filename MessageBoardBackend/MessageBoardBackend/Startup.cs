using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;

namespace MessageBoardAPI
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
            // Adds inMemory database called Messages
            services.AddDbContext<ApiContext>(opt => 
              opt.UseInMemoryDatabase("Messages"));
            
            // CORS Configuration.
            // TODO: Needs to review the policy for prod
            services.AddCors(options => options.AddPolicy("Cors", builder =>
            {
                builder
                    .AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
            }));

            // Setup AAD Authentication
            services.AddAuthentication(sharedOptions =>
            {
                sharedOptions.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddAzureAdBearer(options => Configuration.Bind("AzureAd", options));

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, IServiceProvider serviceProvider)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            // Set the application to use authentication
            app.UseAuthentication();

            // Set the application to use CORS
            app.UseCors("Cors");
            app.UseMvc();

            var context = serviceProvider.GetService<ApiContext>();
            SeedData(context);
        }

        public void SeedData(ApiContext context) {
            context.Messages.Add(new Models.Message
            {
                Owner = "Rafael Dreher",
                Text = "Hello there"
            });

            context.Messages.Add(new Models.Message
            {
                Owner = "Dani",
                Text = "Hello Maluco"
            });
            context.SaveChanges();
        }
    }
}
