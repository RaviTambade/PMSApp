"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UnassignedtasksbymanagerComponent = void 0;
var core_1 = require("@angular/core");
var UnassignedtasksbymanagerComponent = /** @class */ (function () {
    function UnassignedtasksbymanagerComponent(employeeService, taskService, projectService, router) {
        this.employeeService = employeeService;
        this.taskService = taskService;
        this.projectService = projectService;
        this.router = router;
        this.unAssignedTasks = [];
        this.selectedTimePeriod = "today";
        this.projectId = 0;
        this.teamManagerId = 0;
        this.projectName = '';
        this.selectedTaskId = null;
        this.selectedTaskId2 = null;
    }
    UnassignedtasksbymanagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = localStorage.getItem('userId');
        this.employeeService.getEmployeeId(Number(userId)).subscribe(function (res) {
            _this.teamManagerId = res;
            _this.getFilteredUnAssignedTasks(_this.selectedTimePeriod);
        });
    };
    UnassignedtasksbymanagerComponent.prototype.getFilteredUnAssignedTasks = function (timePeriod) {
        var _this = this;
        this.selectedTimePeriod = timePeriod;
        this.projectService.unAssignedTasksByManager(this.teamManagerId, timePeriod).subscribe(function (res) {
            _this.unAssignedTasks = res;
        });
    };
    UnassignedtasksbymanagerComponent.prototype.selectTask = function (id) {
        {
            if (this.selectedTaskId === id) {
                this.selectedTaskId = null;
            }
            else {
                this.selectedTaskId = id;
            }
            this.taskService.setSelectedTaskId(id);
        }
    };
    UnassignedtasksbymanagerComponent.prototype.selectTask2 = function (id) {
        {
            if (this.selectedTaskId2 === id) {
                this.selectedTaskId2 = null;
            }
            else {
                this.selectedTaskId2 = id;
            }
            this.taskService.setSelectedTaskId(id);
        }
    };
    UnassignedtasksbymanagerComponent.prototype.assignTask = function (taskId) {
        this.router.navigate(['teammanager/assigntask/', taskId]);
    };
    UnassignedtasksbymanagerComponent = __decorate([
        core_1.Component({
            selector: 'app-unassignedtasksbymanager',
            templateUrl: './unassignedtasksbymanager.component.html',
            styleUrls: ['./unassignedtasksbymanager.component.css']
        })
    ], UnassignedtasksbymanagerComponent);
    return UnassignedtasksbymanagerComponent;
}());
exports.UnassignedtasksbymanagerComponent = UnassignedtasksbymanagerComponent;