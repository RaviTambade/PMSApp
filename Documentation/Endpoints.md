Authentication Service:


1)
Url  : http:localhost:portnumber/api/users/getallusers
Mehtod : GET
Return : json object of all users
Body   : Null
Header : List of users
Authentication : Admin and Employee only

2)
Url  :http:localhost:portnumber/api/users/getuser/{id}
id   :User Id
Method :GET
Return :json object of user
Body   :Null
Header :User Details
Authentication : Admin and Employee only


3) 
Url  :http:localhost:portnumber/api/users/insertuser
Method :POST
Return :True or False
Body   :  {
            "email":"",
            "contactNumber":"",
            "password":""
          }

Header :Add new User
Authentication :

[ When new employee inserted his details that time user automatically inserted in user tables by trigger]

4) 
Url  :http:localhost:portnumber/api/users/updateuser/{id}
id   :User Id 
Method :PUT
Return :True or False
Body   :  { "id" :"",
            "email":"",
            "contactNumber":"",
            "password":""
          }

Header :Update User Details
Authentication :


5) 
Url  :http:localhost:portnumber/api/users/Deleteuser/{id}
id   :User Id 
Method :Delete
Return :True or False
Body   : Null
Header :Delete User
Authentication :

Accounts:
 
1)
Url  : http:localhost:portnumber/api/accounts/getallaccounts
Mehtod : GET
Return : json object of all users
Body   : Null
Header : List of Accounts
Authentication : Admin and Employee only

2)
Url  :http:localhost:portnumber/api/accounts/getaccount/{id}
id   :Account Id
Method :GET
Return :json object of user
Body   :Null
Header :Account Details
Authentication : Admin and Employee only


3) 
Url  :http:localhost:portnumber/api/accounts/insertaccount
Method :POST
Return :True or False
Body   :  {
            "account no":"",
            "ifsc code":"",
            "register date":"",
            "balance":"",
          }

Header :Add new account
Authentication :


4) 
Url  :http:localhost:portnumber/api/accounts/updateaccount/{id}
id   :Account Id 
Method :PUT
Return :True or False
Body   :  { 
           "id" :"",
           "account no":"",
            "ifsc code":"",
            "register date":"",
            "balance":"",
          }

Header :Update User Details
Authentication :


5) 
Url  :http:localhost:portnumber/api/accounts/Deletaccount/{id}
id   :Account Id 
Method :Delete
Return :True or False
Body   : Null
Header :Delete Account
Authentication :


[Employees Service ]

1)
Url  : http:localhost:portnumber/api/employees/getallemployees
Mehtod : GET
Return : json object of all employees
Body   : Null
Header : List of employees
Authentication : Admin and Employee only

2)
Url  :http:localhost:portnumber/api/employees/getemployee/{id}
id   :Employee Id
Method :GET
Return :Json object of employeee
Body   :Null
Header :Employee Details
Authentication : Admin and Employee only


3)
Url  :http:localhost:portnumber/api/employees/insertemployee
Method :POST
Return :True or False
Body   :  { "firstName":"",
            "lastName":"",
            "BirthDate":"",
            "HireDate":"",
            "contactNumber":"",
            "email":"",
            "password":""
          }

Header :Add new Employee
Authentication :


4)
Url  :http:localhost:portnumber/api/employees/updateemployee/{id}
id   :employee Id 
Method :PUT
Return :True or False
Body   :   { 
            "id":"",
            "firstName":"",
            "lastName":"",
            "BirthDate":"",
            "HireDate":"",
            "contactNumber":"",
            "email":"",
            "password":""
          }

Header :Update Employee Details
Authentication :


5) 
Url  :http:localhost:portnumber/api/employees/Deleteemployee/{id}
id   :Employee Id 
Method :Delete
Return :True or False
Body   : Null
Header :Delete employee
Authentication :


[Team]

1)
Url  : http:localhost:portnumber/api/teams/getallteams
Mehtod : GET
Return : json object of all teams
Body   : Null
Header : List of teams
Authentication : Admin and Employee only

2)
Url  :http:localhost:portnumber/api/teams/getteam/{id}
id   :Team Id
Method :GET
Return :Json object of team
Body   :Null
Header :Team Details
Authentication : Admin and Employee only


3) 
Url  :http:localhost:portnumber/api/teams/insertteam
Method :POST
Return :True or False
Body   :  { 
           "TeamName":"",            
          }

Header :Add new Team
Authentication :


4) 
Url  :http:localhost:portnumber/api/teams/updateteam/{id}
id   :Team Id 
Method :PUT
Return :True or False
Body   :   { 
            "Team id":"",
            "TeamName":"",
          }

Header :Update Team Details
Authentication :


5) 
Url  :http:localhost:portnumber/api/teams/Deleteteam/{id}
id   :Team Id 
Method :Delete
Return :True or False
Body   : Null
Header :Delete team
Authentication :

[Role]

1)
Url  : http:localhost:portnumber/api/roles/getallroles
Mehtod : GET
Return : json object of all roles
Body   : Null
Header : List of roles
Authentication : Admin and Employee only

2)
Url  :http:localhost:portnumber/api/roles/getroles/{id}
id   :Role Id
Method :GET
Return :Json object of role
Body   :Null
Header :Role Details
Authentication : Admin and Employee only

3)
Url  :http:localhost:portnumber/api/roles/insertrole
Method :POST
Return :True or False
Body   :  { 
           "RoleName":""          
          }

Header :Add new Role
Authentication :


4) 
Url  :http:localhost:portnumber/api/roles/updaterole/{id}
id   :role Id 
Method :PUT
Return :True or False
Body   :   { 
            "Role id":"",
            "RoleName":"",
          }

Header :Update role Details
Authentication :


5) 
Url  :http:localhost:portnumber/api/roles/Deleterole/{id}
id   :Role Id 
Method :Delete
Return :True or False
Body   : Null
Header :Delete role
Authentication :

[Team_member]

1)
Url  : http:localhost:portnumber/api/teammembers/getallteammembers
Mehtod : GET
Return : json object of all team members
Body   : Null
Header : List of team members
Authentication : Admin and Employee only

2)
Url  :http:localhost:portnumber/api/teammembers/getteammember/{id}
id   :team member Id
Method :GET
Return :Json object of team member
Body   :Null
Header :Team Member Details
Authentication : Admin and Employee only


3)
Url  :http:localhost:portnumber/api/teammembers/insertteammember
Method :POST
Return :True or False
Body   :  {
           "team_id":""
           "emp_id":"" 
           "role_id":""          
          }
Header :Add new Team Members
Authentication :


4) 
Url  :http:localhost:portnumber/api/teammembers/updatteammember/{id}
id   :Team Member Id 
Method :PUT
Return :True or False
Body   :   { 
              "team_member_id":"",
              "team_id":"",
              "emp_id":"" ,
              "role_id":"" 
          }

Header :Update Team Members Details
Authentication :


5) 
Url  :http:localhost:portnumber/api/teammembers/Deleteteammember/{id}
id   :Team Member Id 
Method :Delete
Return :True or False
Body   : Null
Header :Delete Team Member
Authentication :


[Project]

1)
Url  : http:localhost:portnumber/api/projects/getallprojects
Mehtod : GET
Return : json object of all Projects
Body   : Null
Header : List of Projects
Authentication : Admin and Employee only

2)
Url  :http:localhost:portnumber/api/projects/getproject/{id}
id   : Project Id
Method :GET
Return :Json object of Project
Body   :Null
Header :Project Details
Authentication : Admin and Employee only


3)
Url  :http:localhost:portnumber/api/projects/insertproject
Method :POST
Return :True or False
Body   :  {
           "project_name":"",
           "planed_startDate":"", 
           "planed_endDate":"", 
           "actual_startDate":"",
           "actual_endDate":"",
           "Description":""            
          }
Header :Add new Project
Authentication :


4) 
Url  :http:localhost:portnumber/api/projects/updatproject/{id}
id   :Project Id 
Method :PUT
Return :True or False
Body   :   {
           "Proj_id":" ",
           "project_name":"",
           "planed_startDate":"", 
           "planed_endDate":"", 
           "actual_startDate":"",
           "actual_endDate":"",
           "Description":""
          }

Header :Update Project Details
Authentication :


5) 
Url  :http:localhost:portnumber/api/projects/deleteprojects/{id}
id   :Projects Id 
Method :Delete
Return :True or False
Body   : Null
Header :Delete Project
Authentication :


[Project Manager]


1)
Url  : http:localhost:portnumber/api/projectmanagers/getallprojectmanager
Mehtod : GET
Return : json object of all Projects
Body   : Null
Header : List of Project Managers
Authentication : Admin and Employee only

2)
Url  :http:localhost:portnumber/api/projectmanagers/getprojectmanager/{id}
id   : Project Manager Id
Method :GET
Return :Json object of Project Managers
Body   :Null
Header :Project Manager Details
Authentication : Admin and Employee only


3)
Url  :http:localhost:portnumber/api/projectmanagers/insertprojectmanager
Method :POST
Return :True or False
Body   :  {
           "project_id":"",
           "user_id":""          
          }
Header :Add new Project
Authentication :


4) 
Url  :http:localhost:portnumber/api/projectmanagers/updatprojectmanagers/{id}
id   :Project Manager Id 
Method :PUT
Return :True or False
Body   :   {
          "project_id":"",
           "user_id":""  
          }

Header :Update Project Managers Details
Authentication :


5) 
Url  :http:localhost:portnumber/api/projectmanagers/deleteprojectmanager/{id}
id   :Project Manager Id 
Method :Delete
Return :True or False
Body   : Null
Header :Delete Project Manager
Authentication :

[Client]

1)
Url  : http:localhost:portnumber/api/clients/getallclients
Mehtod : GET
Return : json object of all Clients
Body   : Null
Header : List of Clients
Authentication : Admin and Employee only

2)
Url  :http:localhost:portnumber/api/Clients/getclient/{id}
id   : Client Id
Method :GET
Return :Json object of Client
Body   :Null
Header :Client Details
Authentication : Admin and Employee only


3)
Url  :http:localhost:portnumber/api/clients/insertclient
Method :POST
Return :True or False
Body   :  {
           "name":"",
           "address":"",
           "details":""          
          }
Header :Add new Client
Authentication :


4) 
Url  :http:localhost:portnumber/api/clients/updatclient/{id}
id   :Client Id 
Method :PUT
Return :True or False
Body   :   {
            "client_id":"",
            "name":"",
            "address":"",
            "details":"" 
          }

Header :Update Client Details
Authentication :


5) 
Url  :http:localhost:portnumber/api/clients/deleteclient/{id}
id   :Client Id 
Method :Delete
Return :True or False
Body   : Null
Header :Delete Client
Authentication :


[On Project]

1)
Url  : http:localhost:portnumber/api/Onprojects/getalloprojects
Mehtod : GET
Return : json object of all OnProjects
Body   : Null
Header : List of OnProjects
Authentication : Admin and Employee only

2)
Url  :http:localhost:portnumber/api/onprojects/getonproject/{id}
id   : On Project Id
Method :GET
Return :Json object of On Project
Body   :Null
Header :On Projects Details
Authentication : Admin and Employee only


3)
Url  :http:localhost:portnumber/api/OnProjects/insertOnProject
Method :POST
Return :True or False
Body   :  {
           "proj_id":"",
           "client_id":""          
          }
Header :Add new On Project
Authentication :


4) 
Url  :http:localhost:portnumber/api/onprojects/updateonproject/{id}
id   :On Project Id 
Method :PUT
Return :True or False
Body   :   {
            "on_project_id":"",
            "proj_id":"",
           "client_id":""
          }

Header :Update On-Projects Details
Authentication :


5) 
Url  :http:localhost:portnumber/api/onprojects/deleteonproject/{id}
id   :On-project Id 
Method :Delete
Return :True or False
Body   : Null
Header :Delete On-Project
Authentication :

[Task]

1)
Url  : http:localhost:portnumber/api/tasks/getalltasks
Mehtod : GET
Return : json object of all Tasks
Body   : Null
Header : List of Tasks
Authentication : Admin and Employee only

2)
Url  :http:localhost:portnumber/api/tasks/gettask/{id}
id   : Task Id
Method :GET
Return :Json object of Task
Body   :Null
Header :Tasks Details
Authentication : Admin and Employee only


3)
Url  :http:localhost:portnumber/api/tasks/inserttask
Method :POST
Return :True or False
Body   :  {
           "taskName":"",
           "proj_id":"",
           "description":"",
           "start_Date":"",
           "end_Date":""          
          }
Header :Add new Task
Authentication :


4) 
Url  :http:localhost:portnumber/api/tasks/updatetasks/{id}
id   :Task Id 
Method :PUT
Return :True or False
Body   :   {
           "task_id" :" ",
           "taskName":"",
           "proj_id":"",
           "description":"",
           "start_Date":"",
           "end_Date":""  
          }

Header :Update Task Details
Authentication :


5) 
Url  :http:localhost:portnumber/api/tasks/deletetask/{id}
id   :Task Id 
Method :Delete
Return :True or False
Body   : Null
Header :Delete Task
Authentication :




[Assigned]

1)
Url  : http:localhost:portnumber/api/assigns/getallassignes
Mehtod : GET
Return : json object of all assigns
Body   : Null
Header : List of assigns
Authentication : Admin and Employee only

2)
Url  :http:localhost:portnumber/api/assigns/getassign/{id}
id   : Assign Id
Method :GET
Return :Json object of Assign
Body   :Null
Header :Assign Details
Authentication : Admin and Employee only


3)
Url  :http:localhost:portnumber/api/assigns/insertassign
Method :POST
Return :True or False
Body   :  {
           "taskId":"",
           "emp_id":"",
           "role_id":"",
          }
Header :Add new Assign
Authentication :


4) 
Url  :http:localhost:portnumber/api/assigns/updateassign/{id}
id   :Assign Id 
Method :PUT
Return :True or False
Body   :   { 
           "assignId":"',
           "taskId":"",
           "emp_id":"",
           "role_id":""
          }

Header :Update Assign Details
Authentication :


5) 
Url  :http:localhost:portnumber/api/assigns/deleteassign/{id}
id   :Assign Id 
Method :Delete
Return :True or False
Body   : Null
Header :Delete assign
Authentication :



[Pay Role Cycle]

1)
Url  : http:localhost:portnumber/api/payrolecycles/getall
Mehtod : GET
Return : json object of all payrole cycles
Body   : Null
Header : List of payrole cycles
Authentication : Admin and Employee only

2)
Url  :http:localhost:portnumber/api/payrolecycles/getpayrolecycles/{id}
id   : Payrolecycle  Id
Method :GET
Return :Json object of Payrole cycles
Body   :Null
Header :Payrole cycles  Details
Authentication : Admin and Employee only


3)
Url  :http:localhost:portnumber/api/payrolecycles/insertpayrolecycle
Method :POST
Return :True or False
Body   :  {
           "payroll_cycle_year":"",
           "payroll_cycle_number":"",
           "start_date":"",
           "end_date":"",
           "deposit_date":""
          }
Header :Add new PayRoleCycle
Authentication :


4) 
Url  :http:localhost:portnumber/api/payrolecycles/updatepayrolecycle/{id}
id   :payrolecycle Id 
Method :PUT
Return :True or False
Body   :   { 
           "payrolecycleId":"',
           "payroll_cycle_year":"",
           "payroll_cycle_number":"",
           "start_date":"",
           "end_date":"",
           "deposit_date":""
          }

Header :Update Payrole cycles Details
Authentication :


5) 
Url  :http:localhost:portnumber/api/payrolecycles/deletepayrolecycle/{id}
id   :Payrole cycle Id 
Method :Delete
Return :True or False
Body   : Null
Header :Delete payrole cycle
Authentication :


6) 
Url  :http:localhost:portnumber/api/payrolecycles/deletepayrolecycle/{id}
id   :Payrole cycle Id 
Method :Delete
Return :True or False
Body   : Null
Header :Delete payrole cycle
Authentication
