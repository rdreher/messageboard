import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-bypass-security',
  templateUrl: './bypass-security.component.html',
  styleUrls: ['./bypass-security.component.css']
})
export class BypassSecurityComponent implements OnInit {
  name: SafeHtml;
  nameURL: SafeUrl;

  constructor(private sanitizer: DomSanitizer, private activatedRoute: ActivatedRoute) {
    this.name = sanitizer.bypassSecurityTrustHtml(this.activatedRoute.snapshot.queryParams['name']);
    this.nameURL = sanitizer.bypassSecurityTrustUrl('messages/' + this.activatedRoute.snapshot.queryParams['name']);
  }
  ngOnInit() {
  }
}
