# MessageBoard 

Angular 5 with .NET Core backend using Azure Active Directory authentication.

# About this application

This application contains a web API running on ASP.NET Core 2.0 protected by Azure AD. The web API is accessed by an Angular 5 application on behalf of the signed-in user. The Angular 5 application uses the [Active Directory Authentication Library (ADAL) for JavaScript](https://github.com/AzureAD/azure-activedirectory-library-for-js) to obtain a JWT bearer token for the signed-in user using the OAuth 2.0 protocol. The bearer token is passed to the web API, which validates the token and authorizes the user using the JWT bearer authentication middleware.

For more information about how the OAuth 2.0 protocols work in this scenario, please see the Azure AD authentication scenario for [Web Application to Web API](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-authentication-scenarios#web-application-to-web-api).
