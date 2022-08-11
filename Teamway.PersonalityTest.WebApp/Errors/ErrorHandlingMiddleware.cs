using System;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Teamway.PersonalityTest.WebApp.Errors
{
    public class ErrorHandlerMiddleware
    {
        private readonly RequestDelegate _next;

        public ErrorHandlerMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch(InvalidOperationException error)
            {
                await WriteError(context, error, HttpStatusCode.BadRequest);
            }
            catch (Exception error)
            {
                await WriteError(context, error, HttpStatusCode.InternalServerError);
            }
        }

        private async Task WriteError(HttpContext context, Exception error, HttpStatusCode httpStatusCode)
        {
            var response = context.Response;
            response.ContentType = "application/json";
            response.StatusCode = (int)httpStatusCode;

            var result = JsonSerializer.Serialize(new { message = error?.Message });
            await response.WriteAsync(result);
        }
    }
}
