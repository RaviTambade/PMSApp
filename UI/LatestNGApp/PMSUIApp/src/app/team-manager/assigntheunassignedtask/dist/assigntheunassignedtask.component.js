"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AssigntheunassignedtaskComponent = void 0;
var core_1 = require("@angular/core");
var AssigntheunassignedtaskComponent = /** @class */ (function () {
    function AssigntheunassignedtaskComponent(route, taskService, projectService, userService) {
        this.route = route;
        this.taskService = taskService;
        this.projectService = projectService;
        this.userService = userService;
        this.employeeIdWithUserIds = [];
        this.projectTitle = '';
        this.assignedTask = {
            taskId: 0,
            teamMemberId: 0
        };
    }
    AssigntheunassignedtaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.taskId = params['taskId'];
        });
        if (this.taskId !== undefined) {
            this.taskService.getTaskDetail(this.taskId).subscribe(function (res) {
                console.log(res);
                _this.task = res;
                _this.projectId = res.projectId;
                console.log(_this.projectId);
                _this.projectService.getProjectTitle(_this.projectId).subscribe(function (res) {
                    _this.projectTitle = res;
                    console.log(res);
                });
            });
            if (this.projectId !== undefined) {
                this.projectService
                    .getEmployeeIdWithUserId(this.projectId)
                    .subscribe(function (res) {
                    _this.employeeIdWithUserIds = res;
                    var userIds = _this.employeeIdWithUserIds.map(function (e) { return e.userId; });
                    var employeeIdWithUserIdsString = userIds.join(',');
                    _this.userService
                        .getUserNamesWithId(employeeIdWithUserIdsString)
                        .subscribe(function (res) {
                        var teamMemberName = res;
                        console.log(teamMemberName);
                        _this.employeeIdWithUserIds.forEach(function (item) {
                            var matchingItem = teamMemberName.find(function (element) { return element.id === item.employeeId; });
                            if (matchingItem != undefined)
                                item.employeeName = matchingItem.name;
                            console.log(matchingItem);
                        });
                    });
                });
            }
        }
    };
    AssigntheunassignedtaskComponent = __decorate([
        core_1.Component({
            selector: 'app-assigntheunassignedtask',
            templateUrl: './assigntheunassignedtask.component.html',
            styleUrls: ['./assigntheunassignedtask.component.css']
        })
    ], AssigntheunassignedtaskComponent);
    return AssigntheunassignedtaskComponent;
}());
exports.AssigntheunassignedtaskComponent = AssigntheunassignedtaskComponent;
