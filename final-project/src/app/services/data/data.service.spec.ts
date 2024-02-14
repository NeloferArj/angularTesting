import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], // Provide HttpClientModule
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
