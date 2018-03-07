using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MessageBoardBackend.Controllers
{
    public class JwtPacket {
        public string Token { get; set; }
        public string FirstName { get; set; }
    }

    public class LoginData {
        public string Email { get; set; }
        public string Password { set; get; }
    }

    [Produces("application/json")]
    [Route("auth")]
    public class AuthController : Controller
    {
        readonly ApiContext context;

        public AuthController(ApiContext context)
        {
            this.context = context;
        }

        [HttpPost("login")]
        public ActionResult Login([FromBody] LoginData loginData) {
            var user = context.Users.SingleOrDefault(u => 
                                                     u.Email == loginData.Email && 
                                                     u.Password == loginData.Password);
            if (user == null) {
                return NotFound("Email or Password incorrect");
            } else {
                return Ok(CreateJwtPacket(user));
            }
        }

        [HttpPost("register")]
        public JwtPacket Register([FromBody]Models.User user) {
            
            context.Users.Add(user);
            context.SaveChanges();

            return CreateJwtPacket(user);
        }

        JwtPacket CreateJwtPacket(Models.User user) {
            var jwt = new JwtSecurityToken();
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            return new JwtPacket() { Token = encodedJwt, FirstName = user.FirstName };            
        }
    }
}
