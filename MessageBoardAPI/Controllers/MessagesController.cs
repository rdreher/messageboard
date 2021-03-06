﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Claims;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MessageBoardAPI
{
    [Authorize]
    [RequireHttps]
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class MessagesController : Controller
    {
        readonly ApiContext context;

        public MessagesController(ApiContext context) {
            this.context = context;
        }

        [HttpDelete]
        public IEnumerable<Models.Message> Delete(string Id)
        {
            var dbMessage = context.Messages;
            var message = dbMessage.Where(msg => msg.Id == "Id").First();
            dbMessage.Remove(message);
            return context.Messages;
        }

        [HttpGet]
        public IEnumerable<Models.Message> Get()
        {
            Request.HttpContext.Response.Headers.Add("X-Frame-Options", "sameorigin");
            Request.HttpContext.Response.Headers.Add("Cache-Control", "public");
            return context.Messages;
        }

        [HttpGet("{name}")]
        public IEnumerable<Models.Message> Get(string name)
        {
            Request.HttpContext.Response.Headers.Add("X-Frame-Options", "sameorigin");
            Request.HttpContext.Response.Headers.Add("Cache-Control", "public");
            return context.Messages.Where(message => message.Owner == name);
        }

        [HttpPost]
        public Models.Message Post([FromBody] Models.Message message)
        {
            var dbMessage = context.Messages.Add(message).Entity;
            context.SaveChanges();
            return dbMessage;
        }
    }
}
