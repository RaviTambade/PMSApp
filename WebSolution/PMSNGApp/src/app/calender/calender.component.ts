import { Component } from '@angular/core';
import { CalendarDay } from './CalenderDay';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
})
export class CalenderComponent {
  public calendar: CalendarDay[] = [];
  public monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  public displayMonth!: string;
  private holidayDays: string[] = ['2023-11-02', '2023-11-17', '2023-11-15'];
  private monthIndex: number = 0;
  clickedDate:any;

  project:any={projectName:"PMS", startDate:'2023-11-02',endDate: '2023-11-17'};

  ngOnInit(): void {
    this.generateCalendarDays(this.monthIndex);
  }

  private generateCalendarDays(monthIndex: number): void {
    this.calendar = [];

    let day: Date = new Date(
      new Date().setMonth(new Date().getMonth() + monthIndex)
    );
    console.log("🚀 ~ generateCalendarDays ~ day:", day);
      console.log(new Date().getMonth());
    this.displayMonth = this.monthNames[day.getMonth()] + day.getFullYear();

    let startingDateOfCalendar = this.getStartDateForCalendar(day);

    let dateToAdd = startingDateOfCalendar;

    for (var i = 0; i < 35; i++) {
      this.calendar.push(new CalendarDay(new Date(dateToAdd)));
      dateToAdd = new Date(dateToAdd.setDate(dateToAdd.getDate() + 1));
    }
  }

  private getStartDateForCalendar(selectedDate: Date) {
    let lastDayOfPreviousMonth = new Date(selectedDate.setDate(0));

    // start by setting the starting date of the calendar same as the last day of previous month
    let startingDateOfCalendar: Date = lastDayOfPreviousMonth;

    // but since we actually want to find the last Monday of previous month
    // we will start going back in days intil we encounter our last Monday of previous month
    if (startingDateOfCalendar.getDay() != 1) {
      do {
        startingDateOfCalendar = new Date(
          startingDateOfCalendar.setDate(startingDateOfCalendar.getDate() - 1)
        );
      } while (startingDateOfCalendar.getDay() != 1);
    }

    return startingDateOfCalendar;
  }

  public increaseMonth() {
    this.monthIndex++;
    this.generateCalendarDays(this.monthIndex);
  }

  public decreaseMonth() {
    this.monthIndex--;
    this.generateCalendarDays(this.monthIndex);
  }

  public setCurrentMonth() {
    this.monthIndex = 0;
    this.generateCalendarDays(this.monthIndex);
  }

  onClick(date: Date) {
    this.clickedDate=date;
    console.log(this.ConvertDateYYYY_MM_DD(date));
  }

  isholiday(date: Date): boolean {
  
    let formatedDate = this.ConvertDateYYYY_MM_DD(date);
    return this.holidayDays.includes(formatedDate);
  }

  isDateClicked(date:Date):boolean{
   return this.clickedDate==date
  }

  isProjectOngoing(date:Date):boolean{
    let formatedDate = this.ConvertDateYYYY_MM_DD(date);
    return formatedDate >= this.project.startDate && formatedDate <= this.project.endDate;
  }


  ConvertDateYYYY_MM_DD(date: Date): string {
    // convert into yyyy-mm-dd
    const formattedDate = date
      .toLocaleDateString(undefined, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .split('/')
      .reverse()
      .join('-');
    return formattedDate;
  }
}
