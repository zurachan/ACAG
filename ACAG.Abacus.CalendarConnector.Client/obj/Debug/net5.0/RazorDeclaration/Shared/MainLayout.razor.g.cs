// <auto-generated/>
#pragma warning disable 1591
#pragma warning disable 0414
#pragma warning disable 0649
#pragma warning disable 0169

namespace ACAG.Abacus.CalendarConnector.Client.Shared
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Components;
#nullable restore
#line 1 "C:\Users\hoang.thai.duong\Desktop\New folder (2)\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using System.Net.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\hoang.thai.duong\Desktop\New folder (2)\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using System.Net.Http.Json;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "C:\Users\hoang.thai.duong\Desktop\New folder (2)\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using Microsoft.AspNetCore.Components.Authorization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "C:\Users\hoang.thai.duong\Desktop\New folder (2)\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using Microsoft.AspNetCore.Components.Forms;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "C:\Users\hoang.thai.duong\Desktop\New folder (2)\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using Microsoft.AspNetCore.Components.Routing;

#line default
#line hidden
#nullable disable
#nullable restore
#line 6 "C:\Users\hoang.thai.duong\Desktop\New folder (2)\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using Microsoft.AspNetCore.Components.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 7 "C:\Users\hoang.thai.duong\Desktop\New folder (2)\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using Microsoft.AspNetCore.Components.Web.Virtualization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 8 "C:\Users\hoang.thai.duong\Desktop\New folder (2)\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using Microsoft.AspNetCore.Components.WebAssembly.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 9 "C:\Users\hoang.thai.duong\Desktop\New folder (2)\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using Microsoft.JSInterop;

#line default
#line hidden
#nullable disable
#nullable restore
#line 11 "C:\Users\hoang.thai.duong\Desktop\New folder (2)\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using Blazored.LocalStorage;

#line default
#line hidden
#nullable disable
#nullable restore
#line 12 "C:\Users\hoang.thai.duong\Desktop\New folder (2)\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using DevExpress.Blazor;

#line default
#line hidden
#nullable disable
#nullable restore
#line 13 "C:\Users\hoang.thai.duong\Desktop\New folder (2)\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using Microsoft.AspNetCore.Authorization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 14 "C:\Users\hoang.thai.duong\Desktop\New folder (2)\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using ACAG.Abacus.CalendarConnector.Models;

#line default
#line hidden
#nullable disable
#nullable restore
#line 15 "C:\Users\hoang.thai.duong\Desktop\New folder (2)\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using ACAG.Abacus.CalendarConnector.Wrappers;

#line default
#line hidden
#nullable disable
#nullable restore
#line 16 "C:\Users\hoang.thai.duong\Desktop\New folder (2)\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using ACAG.Abacus.CalendarConnector.Client;

#line default
#line hidden
#nullable disable
#nullable restore
#line 17 "C:\Users\hoang.thai.duong\Desktop\New folder (2)\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using ACAG.Abacus.CalendarConnector.Client.Shared;

#line default
#line hidden
#nullable disable
#nullable restore
#line 18 "C:\Users\hoang.thai.duong\Desktop\New folder (2)\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using ACAG.Abacus.CalendarConnector.Client.Services;

#line default
#line hidden
#nullable disable
#nullable restore
#line 19 "C:\Users\hoang.thai.duong\Desktop\New folder (2)\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using ACAG.Abacus.CalendarConnector.Client.Common;

#line default
#line hidden
#nullable disable
#nullable restore
#line 20 "C:\Users\hoang.thai.duong\Desktop\New folder (2)\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using ACAG.Abacus.CalendarConnector.Models.Common.Toast;

#line default
#line hidden
#nullable disable
#nullable restore
#line 21 "C:\Users\hoang.thai.duong\Desktop\New folder (2)\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using Microsoft.Extensions.Localization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 22 "C:\Users\hoang.thai.duong\Desktop\New folder (2)\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using ACAG.Abacus.CalendarConnector.Language;

#line default
#line hidden
#nullable disable
#nullable restore
#line 23 "C:\Users\hoang.thai.duong\Desktop\New folder (2)\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using ACAG.Abacus.CalendarConnector.Client.Shared.CustomToolTip;

#line default
#line hidden
#nullable disable
#nullable restore
#line 24 "C:\Users\hoang.thai.duong\Desktop\New folder (2)\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using ACAG.Abacus.CalendarConnector.Client.Shared.LoadingIcon;

#line default
#line hidden
#nullable disable
#nullable restore
#line 25 "C:\Users\hoang.thai.duong\Desktop\New folder (2)\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using ACAG.Abacus.CalendarConnector.Client.Shared.ColumnDisplayContentComponent;

#line default
#line hidden
#nullable disable
    public partial class MainLayout : LayoutComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
        }
        #pragma warning restore 1998
    }
}
#pragma warning restore 1591
