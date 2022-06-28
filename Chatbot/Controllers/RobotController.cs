using Chatbot.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Chatbot.Controllers
{
    public class RobotController : Controller
    {
        [HttpPost]
        public  Response ResponseJson(string question)
        {
            //Load sample data
            var sampleData = new MLModel.ModelInput()
            {
                Col0 = @question,
            };

            //Load model and predict output
            var result = MLModel.Predict(sampleData);


            Response res = new Response(result.PredictedLabel);
            return res ;
        }
    }
}
