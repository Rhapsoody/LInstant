import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToolboxService } from 'src/app/services/toolbox.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private http: HttpClient, private toolboxService: ToolboxService) {}


  tempUrl: string = '';
  data: any;

  async fetchData() {
    this.http.get(this.tempUrl, { responseType: 'text' }).subscribe((response) => {
      this.data = response;
    });

    try {
      await this.toolboxService.addImage(this.tempUrl);
      this.tempUrl = '';
      window.location.reload();
    } catch (error) {
      console.error('BRUH PROBLEME CHELOU SUR LA REQUETE', error);
    }

  }



}
