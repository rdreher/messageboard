using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MessageBoardBackend
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class MessagesController : Controller
    {
        static List<Models.Message> messages = new
            List<Models.Message>{
                new Models.Message {
                    Owner = "Rafael",
                    Text = "Hello there"
                },
                new Models.Message {
                    Owner = "Dani",
                    Text = "Hello Maluco"
                }
            };
        
        [HttpGet]
        public IEnumerable<Models.Message> Get() {
            return messages;
        }

        [HttpPost]
        public Models.Message Post([FromBody] Models.Message message)
        {
            messages.Add(message);
            return message;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
