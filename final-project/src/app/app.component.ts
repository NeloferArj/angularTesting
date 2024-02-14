import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tableData = []

  data: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dataService.getData().subscribe({
      next: (data) => {
          this.data = data
          console.log('Data loaded:', this.data);
          },
      error: (e) => console.error(e)

    })
}
}



