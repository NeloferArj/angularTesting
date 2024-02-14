import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DataService } from './services/data/data.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let dataService: jasmine.SpyObj<DataService>;
  let dataServiceSpy: jasmine.SpyObj<DataService>;
  // Mock data to be displayed in the UI
  const mockData = {
    time: '03:53:25 AM',
    milliseconds_since_epoch: 1362196405309,
    date: '03-02-2013'
  };

  beforeEach(async () => {
    // Create a spy object for the DataService
    dataService = jasmine.createSpyObj('DataService', ['getData']);
    
    // Provide the mock data when getData() is called
    dataService.getData.and.returnValue(of(mockData));

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: DataService, useValue: dataService }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  // it('should load data on initialization', () => {
  //   const testData = { time: '03:53:25 AM', milliseconds_since_epoch: 1362196405309, date: '03-02-2013' };
  //   dataServiceSpy.getData.and.returnValue(of(testData));

  //   component.ngOnInit();

  //   expect(dataServiceSpy.getData).toHaveBeenCalled();
  //   expect(component.data).toEqual(testData);
  // });


it('should display the correct data in the UI', waitForAsync(() => {
    // Get the native element of the component
    const compiled = fixture.nativeElement;

    // Wait for asynchronous data retrieval and rendering
    fixture.whenStable().then(() => {
      // Assert that the UI displays the correct data
      expect(compiled.querySelector('.time').textContent).toContain(mockData.time);
      expect(compiled.querySelector('.date').textContent).toContain(mockData.date);
    });
  }));



  // it('should handle error when loading data', () => {
  //   const errorMessage = 'Error fetching data';
  //   dataServiceSpy.getData.and.throwError(errorMessage);

  //   component.ngOnInit();

  //   expect(dataServiceSpy.getData).toHaveBeenCalled();
  //   expect(component.data).toBeUndefined();
  //   // You can add further expectations for error handling if needed
  // });
});