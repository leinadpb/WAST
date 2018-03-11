using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace FirstWebApp.Hubs
{
    public class RealTimeComments : Hub
    {
        public async Task Send(string user, string comment)
        {
            await Clients.All.SendAsync("SendComment", user, comment);
        }

    }
}
