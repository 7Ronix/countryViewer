import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  onGoto(){
    let link=document.createElement('a');
    link.href='https://www.linkedin.com/in/shubhranshu-das-b5422414a/';
    link.click();
  }

  onGithub(){
    let link=document.createElement('a');
    link.href='https://github.com/7Ronix';
    link.click();
  }

}
