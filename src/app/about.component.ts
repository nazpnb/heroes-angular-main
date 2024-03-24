import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="content-container">
      <div class="content-title-group not-found">
        <h2 class="title">Tour of Heroes</h2>
        <p>
          This project was created to help represent a fundamental app written
          with Angular. The heroes and villains theme is used throughout the
          app.
        </p>
        <br />
        <h2 class="title">Why</h2>
        <p>
          I love JavaScript and the Web! One of the most common questions I hear
          is "which framework is best?". I like to flip this around and ask you
          "which is best for you?". The best way to know this is to try it for
          yourself. I'll follow up with some articles on my experiences with
          these frameworks but in the meantime, please try it for yourself to
          gain your own experience with each.
        </p>
        <br />

      </div>
    </div>
  `
})
export class AboutComponent {}
