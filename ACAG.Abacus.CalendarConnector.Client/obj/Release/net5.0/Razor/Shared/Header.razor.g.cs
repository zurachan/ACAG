#pragma checksum "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\Shared\Header.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "611dd548712c06b558ad6b50e1525d9e28eb76ca"
// <auto-generated/>
#pragma warning disable 1591
namespace ACAG.Abacus.CalendarConnector.Client.Shared
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Components;
#nullable restore
#line 1 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using System.Net.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using System.Net.Http.Json;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using Microsoft.AspNetCore.Components.Authorization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using Microsoft.AspNetCore.Components.Forms;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using Microsoft.AspNetCore.Components.Routing;

#line default
#line hidden
#nullable disable
#nullable restore
#line 6 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using Microsoft.AspNetCore.Components.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 7 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using Microsoft.AspNetCore.Components.Web.Virtualization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 8 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using Microsoft.AspNetCore.Components.WebAssembly.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 9 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using Microsoft.JSInterop;

#line default
#line hidden
#nullable disable
#nullable restore
#line 11 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using Blazored.LocalStorage;

#line default
#line hidden
#nullable disable
#nullable restore
#line 12 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using DevExpress.Blazor;

#line default
#line hidden
#nullable disable
#nullable restore
#line 13 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using Microsoft.AspNetCore.Authorization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 15 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using ACAG.Abacus.CalendarConnector.Wrappers;

#line default
#line hidden
#nullable disable
#nullable restore
#line 16 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using ACAG.Abacus.CalendarConnector.Client;

#line default
#line hidden
#nullable disable
#nullable restore
#line 17 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using ACAG.Abacus.CalendarConnector.Client.Shared;

#line default
#line hidden
#nullable disable
#nullable restore
#line 19 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using ACAG.Abacus.CalendarConnector.Client.Common;

#line default
#line hidden
#nullable disable
#nullable restore
#line 20 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using ACAG.Abacus.CalendarConnector.Models.Common.Toast;

#line default
#line hidden
#nullable disable
#nullable restore
#line 21 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using Microsoft.Extensions.Localization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 22 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using ACAG.Abacus.CalendarConnector.Language;

#line default
#line hidden
#nullable disable
#nullable restore
#line 23 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using ACAG.Abacus.CalendarConnector.Client.Shared.CustomToolTip;

#line default
#line hidden
#nullable disable
#nullable restore
#line 24 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using ACAG.Abacus.CalendarConnector.Client.Shared.LoadingIcon;

#line default
#line hidden
#nullable disable
#nullable restore
#line 25 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\_Imports.razor"
using ACAG.Abacus.CalendarConnector.Client.Shared.ColumnDisplayContentComponent;

#line default
#line hidden
#nullable disable
#nullable restore
#line 1 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\Shared\Header.razor"
using Microsoft.AspNetCore.Localization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\Shared\Header.razor"
using ACAG.Abacus.CalendarConnector.Models;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\Shared\Header.razor"
using ACAG.Abacus.CalendarConnector.Client.Services;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\Shared\Header.razor"
using ACAG.Abacus.CalendarConnector.Client.Shared.Theme;

#line default
#line hidden
#nullable disable
    public partial class Header : LayoutComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.OpenElement(0, "nav");
            __builder.AddAttribute(1, "class", "navbar navbar-expand-md justify-content-start header-navbar navbar-light");
            __builder.OpenElement(2, "div");
            __builder.AddAttribute(3, "class", "ml-1 app-header-flex-container");
            __builder.OpenComponent<Microsoft.AspNetCore.Components.Authorization.AuthorizeView>(4);
            __builder.AddAttribute(5, "Authorized", (Microsoft.AspNetCore.Components.RenderFragment<Microsoft.AspNetCore.Components.Authorization.AuthenticationState>)((context) => (__builder2) => {
                __builder2.OpenElement(6, "button");
                __builder2.AddAttribute(7, "id", "navbarToggler");
                __builder2.AddAttribute(8, "class", "navbar-brand navbar-toggler bg-primary d-block ml-0");
                __builder2.AddAttribute(9, "onclick", Microsoft.AspNetCore.Components.EventCallback.Factory.Create<Microsoft.AspNetCore.Components.Web.MouseEventArgs>(this, 
#nullable restore
#line 18 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\Shared\Header.razor"
                                                                                                                 OnToggleClick

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddMarkupContent(10, "<span class=\"navbar-toggler-icon\"></span>");
                __builder2.CloseElement();
                __builder2.AddMarkupContent(11, "\r\n\r\n                ");
                __builder2.OpenElement(12, "div");
                __builder2.AddAttribute(13, "class", "app-header-navitem mr-0 font-weight-bold title pr-4");
                __builder2.AddAttribute(14, "onclick", Microsoft.AspNetCore.Components.EventCallback.Factory.Create<Microsoft.AspNetCore.Components.Web.MouseEventArgs>(this, 
#nullable restore
#line 22 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\Shared\Header.razor"
                                                                                            OnLogoTittleClick

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(15, "style", "cursor: pointer;");
                __builder2.AddMarkupContent(16, "<img src=\"images/AbacusCalendarConnector.png\" style=\"width: 200px\">");
                __builder2.CloseElement();
                __builder2.AddMarkupContent(17, "\r\n                ");
                __builder2.AddMarkupContent(18, "<button id=\"navbarSettingToggler\" class=\"navbar-toggler app-header-navitem\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"><span class=\"navbar-toggler-icon\"></span></button>");
            }
            ));
            __builder.CloseComponent();
            __builder.CloseElement();
            __builder.AddMarkupContent(19, "\r\n\r\n    ");
            __builder.OpenElement(20, "div");
            __builder.AddAttribute(21, "class", "navbar-collapse collapse flex-grow-0 mr-1 ml-auto");
            __builder.AddAttribute(22, "id", "navbarSupportedContent");
            __builder.OpenComponent<Microsoft.AspNetCore.Components.Authorization.AuthorizeView>(23);
            __builder.AddAttribute(24, "Authorized", (Microsoft.AspNetCore.Components.RenderFragment<Microsoft.AspNetCore.Components.Authorization.AuthenticationState>)((context) => (__builder2) => {
                __builder2.OpenElement(25, "ul");
                __builder2.AddAttribute(26, "class", "navbar-nav text-right");
                __builder2.OpenElement(27, "li");
                __builder2.AddAttribute(28, "class", "nav-item");
                __builder2.OpenElement(29, "div");
                __builder2.AddAttribute(30, "class", "app-header-navitem ml-auto mr-md-1");
                __builder2.OpenElement(31, "div");
                __builder2.AddAttribute(32, "align", "right");
                __builder2.AddAttribute(33, "class", 
#nullable restore
#line 38 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\Shared\Header.razor"
                                                        $"theme-settings { ThemeSwitcherShown }"

#line default
#line hidden
#nullable disable
                );
                __builder2.AddAttribute(34, "style", "padding-top: 2px;");
                __builder2.OpenElement(35, "a");
                __builder2.AddAttribute(36, "onclick", Microsoft.AspNetCore.Components.EventCallback.Factory.Create<Microsoft.AspNetCore.Components.Web.MouseEventArgs>(this, 
#nullable restore
#line 39 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\Shared\Header.razor"
                                              ToggleThemeSwitcherPanel

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(37, "href", "javascript:void(0);");
                __builder2.AddMarkupContent(38, "<span class=\"oi oi-cog\"></span>");
                __builder2.CloseElement();
                __builder2.CloseElement();
                __builder2.CloseElement();
                __builder2.CloseElement();
                __builder2.AddMarkupContent(39, "\r\n                    ");
                __builder2.OpenElement(40, "li");
                __builder2.AddAttribute(41, "class", "nav-item");
                __builder2.OpenElement(42, "div");
                __builder2.AddAttribute(43, "class", "app-header-navitem mr-0 ");
                __builder2.OpenElement(44, "div");
                __builder2.AddAttribute(45, "class", "form-check-inline mr-lg-3 mr-0");
#nullable restore
#line 48 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\Shared\Header.razor"
                                 if (Cultures != null && CurrentCulture != null)
                                {


#line default
#line hidden
#nullable disable
                __Blazor.ACAG.Abacus.CalendarConnector.Client.Shared.Header.TypeInference.CreateDxComboBox_0(__builder2, 46, 47, 
#nullable restore
#line 51 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\Shared\Header.razor"
                                                      Cultures

#line default
#line hidden
#nullable disable
                , 48, "DisplayName", 49, 
#nullable restore
#line 53 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\Shared\Header.razor"
                                                       CurrentCulture

#line default
#line hidden
#nullable disable
                , 50, Microsoft.AspNetCore.Components.EventCallback.Factory.Create(this, 
#nullable restore
#line 54 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\Shared\Header.razor"
                                                                (LanguageModel lang) => RequestCultureChange(lang)

#line default
#line hidden
#nullable disable
                ));
#nullable restore
#line 56 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\Shared\Header.razor"
                                }
                                else
                                {

#line default
#line hidden
#nullable disable
                __builder2.OpenElement(51, "p");
                __builder2.OpenElement(52, "em");
                __builder2.AddContent(53, 
#nullable restore
#line 59 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\Shared\Header.razor"
                                            _localizer[LangKey.MSG_LOADING]

#line default
#line hidden
#nullable disable
                );
                __builder2.CloseElement();
                __builder2.CloseElement();
#nullable restore
#line 60 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\Shared\Header.razor"
                                }

#line default
#line hidden
#nullable disable
                __builder2.CloseElement();
                __builder2.CloseElement();
                __builder2.CloseElement();
                __builder2.AddMarkupContent(54, "\r\n                    ");
                __builder2.OpenElement(55, "li");
                __builder2.AddAttribute(56, "class", "nav-item");
                __builder2.OpenElement(57, "a");
                __builder2.AddAttribute(58, "class", "nav-link text-nowrap");
                __builder2.AddAttribute(59, "style", "cursor: pointer");
                __builder2.AddContent(60, 
#nullable restore
#line 65 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\Shared\Header.razor"
                                                                                 _localizer[LangKey.MSG_HELLO]

#line default
#line hidden
#nullable disable
                );
                __builder2.AddContent(61, ", ");
                __builder2.AddContent(62, 
#nullable restore
#line 65 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\Shared\Header.razor"
                                                                                                                 FullName

#line default
#line hidden
#nullable disable
                );
                __builder2.AddContent(63, "!");
                __builder2.CloseElement();
                __builder2.CloseElement();
                __builder2.AddMarkupContent(64, "\r\n                    ");
                __builder2.OpenElement(65, "li");
                __builder2.AddAttribute(66, "class", "nav-item");
                __builder2.OpenElement(67, "a");
                __builder2.AddAttribute(68, "class", "nav-link text-nowrap");
                __builder2.AddAttribute(69, "style", "cursor: pointer");
                __builder2.AddAttribute(70, "onclick", Microsoft.AspNetCore.Components.EventCallback.Factory.Create<Microsoft.AspNetCore.Components.Web.MouseEventArgs>(this, 
#nullable restore
#line 68 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\Shared\Header.razor"
                                                                                           HandleLogout

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddContent(71, 
#nullable restore
#line 68 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\Shared\Header.razor"
                                                                                                          _localizer[LangKey.LOGOUT]

#line default
#line hidden
#nullable disable
                );
                __builder2.CloseElement();
                __builder2.CloseElement();
                __builder2.CloseElement();
            }
            ));
            __builder.CloseComponent();
            __builder.CloseElement();
            __builder.CloseElement();
            __builder.AddMarkupContent(72, "\r\n");
            __builder.OpenComponent<ACAG.Abacus.CalendarConnector.Client.Shared.Theme.ThemeSwitcher>(73);
            __builder.AddAttribute(74, "Shown", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.Boolean>(
#nullable restore
#line 75 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\Shared\Header.razor"
                             ThemeSwitcherShown

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(75, "ShownChanged", new System.Action<System.Boolean>(__value => ThemeSwitcherShown = __value));
            __builder.CloseComponent();
            __builder.AddMarkupContent(76, "\r\n\r\n\r\n");
            __builder.OpenElement(77, "div");
            __builder.AddAttribute(78, "class", "modal fade");
            __builder.AddAttribute(79, "id", "exampleModal");
            __builder.AddAttribute(80, "tabindex", "-1");
            __builder.AddAttribute(81, "role", "dialog");
            __builder.AddAttribute(82, "aria-labelledby", "exampleModalLabel");
            __builder.AddAttribute(83, "aria-hidden", "true");
            __builder.OpenElement(84, "div");
            __builder.AddAttribute(85, "class", "modal-dialog");
            __builder.AddAttribute(86, "role", "document");
            __builder.OpenElement(87, "div");
            __builder.AddAttribute(88, "class", "modal-content");
            __builder.OpenElement(89, "div");
            __builder.AddAttribute(90, "class", "modal-header");
            __builder.OpenElement(91, "h5");
            __builder.AddAttribute(92, "class", "modal-title");
            __builder.AddAttribute(93, "id", "exampleModalLabel");
            __builder.AddContent(94, 
#nullable restore
#line 82 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\Shared\Header.razor"
                                                          _localizer[LangKey.ERROR]

#line default
#line hidden
#nullable disable
            );
            __builder.CloseElement();
            __builder.AddMarkupContent(95, "\r\n        ");
            __builder.AddMarkupContent(96, "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>");
            __builder.CloseElement();
            __builder.AddMarkupContent(97, "\r\n      ");
            __builder.OpenElement(98, "div");
            __builder.AddAttribute(99, "class", "modal-body");
            __builder.AddContent(100, 
#nullable restore
#line 88 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\Shared\Header.razor"
            (MarkupString)_unauthorizedError

#line default
#line hidden
#nullable disable
            );
            __builder.CloseElement();
            __builder.AddMarkupContent(101, "\r\n      ");
            __builder.OpenElement(102, "div");
            __builder.AddAttribute(103, "class", "modal-footer");
            __builder.OpenElement(104, "button");
            __builder.AddAttribute(105, "type", "button");
            __builder.AddAttribute(106, "class", "btn btn-danger");
            __builder.AddAttribute(107, "onclick", "location.reload();");
            __builder.AddContent(108, 
#nullable restore
#line 91 "E:\ACG-Dev\Projects\ACAG.Abacus.CalendarConnector\V2-BlazorWebAssemblyApp\ACAG.Abacus.CalendarConnector.Client\Shared\Header.razor"
                                                                                     _localizer[LangKey.LOGOUT]

#line default
#line hidden
#nullable disable
            );
            __builder.CloseElement();
            __builder.CloseElement();
            __builder.CloseElement();
            __builder.CloseElement();
            __builder.CloseElement();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private ILocalStorageService _localStorage { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private IAuthService _authService { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private IApiWrapper _apiWrapper { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private IToastAppService _toastAppService { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private IStringLocalizer<Resource> _localizer { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private NavigationManager _navigationManager { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private IJSRuntime _jsRuntime { get; set; }
    }
}
namespace __Blazor.ACAG.Abacus.CalendarConnector.Client.Shared.Header
{
    #line hidden
    internal static class TypeInference
    {
        public static void CreateDxComboBox_0<TData, TValue>(global::Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder, int seq, int __seq0, global::System.Collections.Generic.IEnumerable<TData> __arg0, int __seq1, global::System.String __arg1, int __seq2, TValue __arg2, int __seq3, global::Microsoft.AspNetCore.Components.EventCallback<TValue> __arg3)
        {
        __builder.OpenComponent<global::DevExpress.Blazor.DxComboBox<TData, TValue>>(seq);
        __builder.AddAttribute(__seq0, "Data", __arg0);
        __builder.AddAttribute(__seq1, "TextFieldName", __arg1);
        __builder.AddAttribute(__seq2, "Value", __arg2);
        __builder.AddAttribute(__seq3, "ValueChanged", __arg3);
        __builder.CloseComponent();
        }
    }
}
#pragma warning restore 1591
