using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.IO;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MessageBoardAPI.Controllers
{
    [Route("api/[controller]")]
    public class TestController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get([FromQuery]string id)
        {
            //return id;
            return Test(id).Result.ToString();
                
        }

        protected async Task<String> Test(string id) {
            //var uri = new Uri("http://localhost:5000/api/test/1?id=" + id);
            var uri = new Uri(id);
            HttpClient client = new HttpClient();

            var response = await client.GetAsync(uri.ToString());

            if (response.StatusCode == System.Net.HttpStatusCode.OK) {
                var stream = await response.Content.ReadAsStreamAsync();
                string content;
                using (var readStream = new StreamReader(stream, System.Text.Encoding.UTF8)) {
                    content = readStream.ReadToEnd();
                }
                return content;
            }
            return null;
        }
    }
}
