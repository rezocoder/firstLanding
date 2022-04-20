import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateConfigService } from '../services/translate-config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  language!: string;
  translateSubscription!: Subscription;
  constructor(private translateConfigService: TranslateConfigService) { }

  ngOnInit(): void {
    this.translateSubscription = this.translateConfigService.translateType$().subscribe((type) => {
      console.log(type)
      this.language = type;
    })


  }

  ngOnDestroy() {
    this.translateSubscription.unsubscribe();
  }

}
