import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimeSheet } from 'src/app/time-sheet/models/timesheet';
import { TimesheetEmployee } from 'src/app/time-sheet/models/timesheet-employee';
import { TimeSheetEntry } from 'src/app/time-sheet/models/timesheetentry';

import { TimeSheetService } from 'src/app/time-sheet/services/time-sheet.service';

@Component({
  selector: 'app-insert-time-sheet',
  templateUrl: './insert-time-sheet.component.html',
  styleUrls: ['./insert-time-sheet.component.css'],
})
export class InsertTimeSheetComponent implements OnInit {
  timeSheetId!: number;
  timeSheetEntries: TimeSheetEntry[] = [];
  totalminutes: any = 0;
  showaddTimesheetEntry: boolean = false;
  showupdateTimesheetEntry: boolean = false;
  todaysDate: string = new Date().toISOString().slice(0, 10);
  employeeId = 10;
  timeSheet: TimesheetEmployee | undefined;
  selectedTimeSheetEntrytoUpdate: TimeSheetEntry | undefined;

  constructor(private timeSheetSvc: TimeSheetService) {}
  ngOnInit(): void {
    this.fetchTimeSheetEntries(this.employeeId, this.todaysDate);
  }

  onRemoveTimeSheetEntry(timeSheetEntryId: number) {
    this.timeSheetSvc
      .removeTimeSheetEntry(timeSheetEntryId)
      .subscribe((res) => {
        if (res) {
          this.fetchTimeSheetEntries(this.employeeId, this.todaysDate);
          console.log('record deleted');
        }
      });
  }

  onRemoveAllTimeSheetEntries(timeSheetId: number) {
    this.timeSheetSvc
      .removeAllTimeSheetEntries(timeSheetId)
      .subscribe((res) => {
        if (res) {
          this.timeSheetEntries = [];
        }
      });
  }

  onSubmit() {
    let timesheet: TimeSheet = {
      id: this.timeSheetId,
      timeSheetDate: this.timeSheet?.timeSheetDate || '',
      status: 'Submitted',
      employeeId: 10,
      timeSheetEntries: this.timeSheetEntries,
      statusChangedDate: this.todaysDate,
    };

    this.timeSheetSvc
      .changeTimeSheetStatus(this.timeSheetId, timesheet)
      .subscribe((res) => {
        alert('timesheet added');
      });
  }

  onClickAddTimesheetEntry() {
    this.showaddTimesheetEntry = true;
  }
  onCloseAddPopup() {
    this.showaddTimesheetEntry = false;
  }

  onClickUpdateTimesheetEntry(timeSheetEntry: TimeSheetEntry) {
    let newentry = { ...timeSheetEntry };
    this.selectedTimeSheetEntrytoUpdate = newentry;
    this.showupdateTimesheetEntry = true;
  }

  onCloseUpdatePopup() {
    this.showupdateTimesheetEntry = false;
    this.selectedTimeSheetEntrytoUpdate = undefined;
  }

  fetchTimeSheetEntries(employeeId: number, date: string) {
    this.timeSheetSvc.getTimeSheet(employeeId, date).subscribe((res) => {
      if (res.id == 0) {
        this.timeSheetSvc.insertTimeSheet(employeeId, date).subscribe((res) => {
          if (res) {
            this.fetchTimeSheetEntries(employeeId, date);
          }
        });
        return;
      }

      this.totalminutes = 0;
      this.timeSheet = res;
      this.timeSheetEntries = res.timeSheetEntries;
      this.timeSheetId = res.id;

      this.timeSheetEntries.forEach((entry) => {
        this.getDuration(entry);
        this.totalminutes += entry.durationInMinutes;
      });
      this.totalminutes = this.convertMinutesintoHours(this.totalminutes);

      console.log(res);
    });
  }

  onAddStateChange(isupdated: boolean) {
    if (isupdated) {
      this.fetchTimeSheetEntries(this.employeeId, this.todaysDate);
    }
    this.showaddTimesheetEntry = false;
  }

  onUpdateStateChange(isupdated: boolean) {
    if (isupdated) {
      this.fetchTimeSheetEntries(this.employeeId, this.todaysDate);
    }
    this.showupdateTimesheetEntry = false;
    this.selectedTimeSheetEntrytoUpdate = undefined;
  }

  getDuration(timeSheetEntry: TimeSheetEntry) {
    let startTime = timeSheetEntry.fromTime;
    let endTime = timeSheetEntry.toTime;
    if (startTime != '' && endTime != '') {
      const startDate = new Date(`1970-01-01T${startTime}`);
      const endDate = new Date(`1970-01-01T${endTime}`);

      const durationMilliseconds = endDate.getTime() - startDate.getTime();
      timeSheetEntry.durationInMinutes = durationMilliseconds / (1000 * 60);
      timeSheetEntry.durationInHours = this.convertMinutesintoHours(
        timeSheetEntry.durationInMinutes
      );
    }
  }
  convertMinutesintoHours(minutes: number) {
    let str = `${Math.floor(minutes / 60)}h: ${minutes % 60}m`;
    return str;
  }
}
