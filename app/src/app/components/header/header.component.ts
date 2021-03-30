import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/utils/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private theme: ThemeService) { }

  ngOnInit() {}

  enableDark(){
    this.theme.enableDark();
  }

  enableLight(){
    this.theme.enableLight();
  }

}
