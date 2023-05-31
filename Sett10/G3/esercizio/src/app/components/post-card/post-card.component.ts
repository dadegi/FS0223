import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
    selector: 'app-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {

    @Input() post!: Post;

    constructor() {}

    ngOnInit(): void {}
}
