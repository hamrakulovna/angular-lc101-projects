import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0103064%2F&psig=AOvVaw3vbh-naKbnfH_1rJQv7wzi&ust=1629154132360000&source=images&cd=vfe&ved=2ahUKEwibuoKcjrTyAhUPpJ4KHar9C9EQr4kDegUIARDpAQ';
  image3 = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.allmovie.com%2Fmovie%2Fbraveheart-v134724&psig=AOvVaw3qKzluex9RQiwoKwJUZzlM&ust=1629154208140000&source=images&cd=vfe&ved=2ahUKEwjo2ZPAjrTyAhWVsp4KHTB_DEQQr4kDegUIARDAAQ';

  constructor() { }

  ngOnInit() {
  }

}