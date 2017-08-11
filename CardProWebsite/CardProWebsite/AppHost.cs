﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Reflection;
using System.Web;
using Funq;
using CardProWebsite.ServiceInterface;
using ServiceStack;
using ServiceStack.Configuration;

namespace CardProWebsite {
    public class AppHost : AppHostBase {
        /// <summary>
        /// Base constructor requires a Name and Assembly where web service implementation is located
        /// </summary>
        public AppHost()
            : base("CardProWebsite", typeof(MyServices).Assembly) {
            var customSettings = new FileInfo(@"~/appsettings.txt".MapHostAbsolutePath());
            AppSettings = customSettings.Exists
                ? (IAppSettings)new TextFileSettings(customSettings.FullName)
                : new AppSettings();
        }

        /// <summary>
        /// Application specific configuration
        /// This method should initialize any Plugins or IoC dependencies used by your web services
        /// </summary>
        public override void Configure(Container container) {
            SetConfig(new HostConfig {
                DebugMode = AppSettings.Get("DebugMode", false),
                AddRedirectParamsToQueryString = true
            });

            //Other Plugin Examples
            //Plugins.Add(new CorsFeature());
            //Plugins.Add(new PostmanFeature());
        }
    }
}