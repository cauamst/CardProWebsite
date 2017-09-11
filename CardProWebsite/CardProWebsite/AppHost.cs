using System.IO;
using Funq;
using CardProWebsite.ServiceInterface;
using ServiceStack;
using ServiceStack.Configuration;

namespace CardProWebsite {
    public class AppHost : AppHostBase {

        public AppHost()
            : base("CardProWebsite", typeof(CardProService).Assembly) {
            var customSettings = new FileInfo(@"~/appsettings.txt".MapHostAbsolutePath());
            AppSettings = customSettings.Exists
                ? (IAppSettings)new TextFileSettings(customSettings.FullName)
                : new AppSettings();
        }

        public override void Configure(Container container) {
            SetConfig(new HostConfig {
                DebugMode = AppSettings.Get("DebugMode", false),
                AddRedirectParamsToQueryString = true
            });

        }
    }
}