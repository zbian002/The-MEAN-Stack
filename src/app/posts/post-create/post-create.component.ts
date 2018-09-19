import { Component } from "@angular/core";
import { sharedStylesheetJitUrl } from "@angular/compiler";

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
    newPost = 'NO CONTENT';
    enteredValue = '';
    onAddPost() {
        this.newPost = this.enteredValue;
    }
}