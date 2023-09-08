import { Component } from '@angular/core';
import { Picture } from 'src/app/models/picture.model';
import { ToolboxService } from 'src/app/services/toolbox.service';


@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent {

  constructor(private toolboxService: ToolboxService) { }

  pictures: Picture[] = [];

  async ngOnInit() {
    this.loadImages();
  }

  async loadImages() {
    this.pictures = await this.toolboxService.getImages();
  }

}
