using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MessageBoardBackend.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        readonly ApiContext context;

        public UsersController(ApiContext context)
        {
            this.context = context;
        }
        [HttpGet("{id}")]
        public ActionResult Get(string id) {
            var user = context.Users.SingleOrDefault(u => u.Id == id);

            if (user == null)
            {
                return NotFound("User not found");
            }
            else
            {
                return Ok(user);
        }
    }
}