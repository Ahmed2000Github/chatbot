using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Chatbot.Models
{
    public class Response
    {
        public string response { get; set; }
        public Response(string res)
        {
            response = res;
        }
    }
}
