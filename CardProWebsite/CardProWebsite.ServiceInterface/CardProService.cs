using ServiceStack;
using ServiceStack.DataAnnotations;

namespace CardProWebsite.ServiceInterface
{
    [Exclude(Feature.Metadata)]
    [FallbackRoute("/{PathInfo*}")]
    public class FallbackForClientRoutes
    {
        public string PathInfo { get; set; }
    }

    public class CardProService : Service
    {
        //Return default.html for unmatched requests so routing is handled on client
        public object Any(FallbackForClientRoutes request) =>
            new HttpResult(VirtualFileSources.GetFile("index.html"));
    }
}