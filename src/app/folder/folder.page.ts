import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  name = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    
    // en utilisant un observable, une propriete d'angular
    // on utilise pas le .then mais le .subscribe pour l'observable
    this.activatedRoute.params.subscribe((params) => {
      console.log('params', params);
      this.folder = params.id;
      this.name = params.name;
    })
  }

}
