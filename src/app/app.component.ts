import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'punjab-university-affiliated-colleges-study-material';
  databaseResources = [
    {
      title:
        'Testbank for Database Systems Design, Implementation, & Management',
      href: '/Assets/Database Systems/- Testbank for Database Systems Design, Implementation, & Management.pdf',
    },
    // ... other items
  ];
  getStarted() {
    // Implement your logic here
  }
}
