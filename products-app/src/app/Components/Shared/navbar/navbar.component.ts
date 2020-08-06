import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from "@angular/common";



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('btnBack', { static: true }) btnBack: ElementRef;
  @ViewChild('title', { static: true }) title: ElementRef;

  constructor(private location: Location) {}

  ngOnInit(): void {
    // this.location.onUrlChange((url: string) => {
    //   if (url != ('/')) {
    //     this.btnBack.nativeElement.classList.add('d-block');
    //   } else {
    //     this.btnBack.nativeElement.classList.remove('d-block');
    //   }
    // });
  }
}
