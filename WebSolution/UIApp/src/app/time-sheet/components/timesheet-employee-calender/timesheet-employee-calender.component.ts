import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarDay } from 'src/app/calender/CalenderDay';

@Component({
  selector: 'app-timesheet-employee-calender',
  templateUrl: './timesheet-employee-calender.component.html',
  styleUrls: ['./timesheet-employee-calender.component.css'],
})
export class TimesheetEmployeeCalenderComponent {
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
  displayMonth: any;
  private holidayDays: string[] = [
    // '2023-12-02', '2023-12-17', '2023-12-15'
  ];
  private monthIndex: number = 0;
  clickedDate: Date | undefined;
  @Output() DateClick = new EventEmitter<string>();

  projects: any[] = [
    // {
    //   projectName: 'Ekrushi',
    //   startDate: '2023-12-02',
    //   endDate: '2023-12-17',
    // },
    // {
    //   projectName: 'TFLPortal',
    //   startDate: '2023-12-02',
    //   endDate: '2023-12-29',
    // },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.projects.forEach((project) => {
      project.color = this.randomColorPicker();
    });
    this.generateCalendarDays(this.monthIndex);
    this.clickedDate = this.calendar.find((d) => d.isToday == true)?.date;
    if (this.clickedDate) {
      this.onClickDate(this.clickedDate);
    }
  }

  private generateCalendarDays(monthIndex: number): void {
    this.calendar = [];

    let day: Date = new Date(
      new Date().setMonth(new Date().getMonth() + monthIndex)
    );

    let month: string = (day.getMonth() + 1).toString();
    if (month.length == 1) {
      month = '0' + month;
    }
    this.displayMonth = day.getFullYear() + '-' + month;

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

  randomColorPicker(): string {
    let result = '';
    for (let i = 0; i < 6; ++i) {
      const value = Math.floor(16 * Math.random());
      result += value.toString(16);
    }
    return '#' + result;
  }

  onClickDate(date: Date) {
    this.clickedDate = date;
    let convertedDate = this.ConvertDateYYYY_MM_DD(date);
    this.router.navigate(['add', convertedDate], { relativeTo: this.route });
    // this.DateClick.emit(convertedDate);
  }

  isholiday(date: Date): boolean {
    let formatedDate = this.ConvertDateYYYY_MM_DD(date);
    return this.holidayDays.includes(formatedDate);
  }
  isSunday(date: Date) {
    return date.getDay() == 0;
  }

  isDateClicked(date: Date): boolean {
    return this.clickedDate == date;
  }

  isProjectOngoing(date: Date, projectName: string): boolean {
    let formatedDate = this.ConvertDateYYYY_MM_DD(date);
    let project = this.projects.find((p) => p.projectName == projectName);
    return formatedDate >= project.startDate && formatedDate <= project.endDate;
  }

  goToSpecificDate(e: any) {
    let date: Date = new Date(e.target.value + '-01');
    if (date) {
      let startingDateOfCalendar = this.getStartDateForCalendar(date);

      let dateToAdd = startingDateOfCalendar;
      this.calendar = [];

      for (var i = 0; i < 35; i++) {
        this.calendar.push(new CalendarDay(new Date(dateToAdd)));
        dateToAdd = new Date(dateToAdd.setDate(dateToAdd.getDate() + 1));
      }
    }
  }

  ConvertDateYYYY_MM_DD(date: Date): string {
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