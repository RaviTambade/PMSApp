

INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,image,userid) VALUES('Rushikesh','Chikane','1998-05-19','2023-02-01','7038548505','/assets/images/emp.jpeg',1);
INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,image,userid) VALUES('Akshay','Tanpure','1998-05-11','2023-02-02','7038548506','/assets/images/emp.jpeg',2);
INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,image,userid) VALUES('Rohit','Gore','1998-05-20','2023-02-11','7038548507','/assets/images/emp.jpeg',3);
INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,image,userid) VALUES('Shubham','Teli','1998-05-29','2023-02-21','7038548515','/assets/images/emp.jpeg',4);
INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,image,userid) VALUES('Abhay','Navale','1999-05-19','2021-02-01','7038548525','/assets/images/emp.jpeg',5);
INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,image,userid) VALUES('Sahil','Mankar','1996-05-19','2023-05-05','7038548513','/assets/images/emp.jpeg',6);
INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,image,userid) VALUES('Pragati','Bangar','1997-05-19','2023-02-01','7038548595','/assets/images/emp.jpeg',7);
INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,image,userid) VALUES('Akash','Ajab','1995-05-29','2021-05-01','7038548516','/assets/images/emp.jpeg',8);
INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,image,userid) VALUES('Vedant','Yadav','1996-05-14','2023-02-07','7038548515','/assets/images/emp.jpeg',9);
INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,image,userid) VALUES('Rohit','Mangavale','1998-05-19','2023-02-01','7038548505','/assets/images/emp.jpeg',10);
INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,image,userid) VALUES('Ravi','Tambade','1975-05-19','1994-02-01','7038548501','/assets/images/emp.jpeg',11);
INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,image,userid) VALUES('Shubham','Navale','1994-05-19','2020-02-01','7038548502','/assets/images/emp.jpeg',12);
INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,image,userid) VALUES('Vaibhav','More','1996-03-15','2021-02-05','7038548505','/assets/images/emp.jpeg',13);
INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,image,userid) VALUES('Rohit','Patil','1998-05-19','2023-02-01','7038548506','/assets/images/emp.jpeg',14);
INSERT INTO employees(firstname,lastname,birthdate,hiredate,contactnumber,image,userid) VALUES('Rahul','jain','1998-05-11','2023-02-02','7038548512','/assets/images/emp.jpeg',15);



INSERT INTO payrollCycles(payrollcycleyear,payrollcyclenumber,startdate,enddate,depositdate)VALUES('2022-05-19',12,'2022-05-19','2023-05-19','2022-05-25');
INSERT INTO payrollCycles(payrollcycleyear,payrollcyclenumber,startdate,enddate,depositdate)VALUES('2022-04-22',12,'2022-05-15','2023-05-22','2022-05-16');
INSERT INTO payrollCycles(payrollcycleyear,payrollcyclenumber,startdate,enddate,depositdate)VALUES('2022-05-19',12,'2022-05-19','2023-05-19','2022-05-25');         


INSERT INTO roles(rolename)VALUES('Developer');
INSERT INTO roles(rolename)VALUES('Consultant');
INSERT INTO roles(rolename)VALUES('Tester');
INSERT INTO roles(rolename)VALUES('Manager');


INSERT INTO userroles(userid,roleid) VALUES (1,1);
INSERT INTO userroles(userid,roleid) VALUES (2,1);
INSERT INTO userroles(userid,roleid) VALUES (3,1);
INSERT INTO userroles(userid,roleid) VALUES (4,2);
INSERT INTO userroles(userid,roleid) VALUES (5,2);
INSERT INTO userroles(userid,roleid) VALUES (6,2);
INSERT INTO userroles(userid,roleid) VALUES (7,3);
INSERT INTO userroles(userid,roleid) VALUES (8,3);
INSERT INTO userroles(userid,roleid) VALUES (9,3);
INSERT INTO userroles(userid,roleid) VALUES (10,4);
INSERT INTO userroles(userid,roleid) VALUES (11,4);
INSERT INTO userroles(userid,roleid) VALUES (12,4);


INSERT INTO projects(title,startdate,enddate,description,status)VALUES('PMSAPP','2023-02-02','2024-02-02','Project Management System App','In-Progress');
INSERT INTO projects(title,startdate,enddate,description,status)VALUES('OTBMApp','2023-05-10','2024-05-10','Online Ticket Booking management System App','Completed');
INSERT INTO projects(title,startdate,enddate,description,status)VALUES('IMSApp','2023-02-02','2024-03-03','Inventry Management System App','Pending');
INSERT INTO projects(title,startdate,enddate,description,status)VALUES('EKSApp','2023-02-02','2024-03-03','E Krushi Seva App','Error');
INSERT INTO projects(title,startdate,enddate,description,status)VALUES('EAApp','2023-05-10','2024-05-13','E Auto App','Completed');
INSERT INTO projects(title,startdate,enddate,description,status)VALUES('BSApp','2023-02-02','2024-03-03',' Banking System App','Error');
INSERT INTO projects(title,startdate,enddate,description,status)VALUES('TAPApp','2023-02-02','2024-03-03','Transflower Acceleration Program App','In-Progress');
INSERT INTO projects(title,startdate,enddate,description,status)VALUES('NDApp','2023-05-10','2024-05-13','Naukari Details App','Completed');
INSERT INTO projects(title,startdate,enddate,description,status)VALUES('HCApp','2023-02-02','2024-03-03',' Health Care App','Error');
INSERT INTO projects(title,startdate,enddate,description,status)VALUES('EcommApp','2023-02-02','2024-03-03','ECommerce App','Completed');



INSERT INTO projectmembers(projectid,empid)VALUES(1,1);
INSERT INTO projectmembers(projectid,empid)VALUES(1,2);
INSERT INTO projectmembers(projectid,empid)VALUES(1,3);
INSERT INTO projectmembers(projectid,empid)VALUES(1,4);
INSERT INTO projectmembers(projectid,empid)VALUES(1,13);
INSERT INTO projectmembers(projectid,empid)VALUES(1,11);
INSERT INTO projectmembers(projectid,empid)VALUES(2,5);
INSERT INTO projectmembers(projectid,empid)VALUES(2,6);
INSERT INTO projectmembers(projectid,empid)VALUES(2,7);
INSERT INTO projectmembers(projectid,empid)VALUES(2,8);
INSERT INTO projectmembers(projectid,empid)VALUES(2,12);
INSERT INTO projectmembers(projectid,empid)VALUES(3,1);
INSERT INTO projectmembers(projectid,empid)VALUES(3,5);
INSERT INTO projectmembers(projectid,empid)VALUES(3,7);
INSERT INTO projectmembers(projectid,empid)VALUES(3,8);
INSERT INTO projectmembers(projectid,empid)VALUES(3,10);

INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Develop feature login for Project PMS App',1,'please arrange the meeting sheduling prosess quickly','2023-02-01','09:00:00', '11:00:00');
INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Troubleshoot and fix bugs in module timesheet',2,'please arrange the meeting sheduling prosess quickly','2023-02-01','11:00:00', '01:30:00');
INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Check data validation for Form adding timesheet',3,'please arrange the meeting sheduling prosess quickly','2023-02-01','09:00:00', '11:00:00');
INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Optimize performance of Database PMS',3,'please arrange the meeting sheduling prosess quickly','2023-02-02','11:00:00', '01:30:00');
INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Write unit tests for Module Timerecord',4,'please arrange the meeting sheduling prosess quickly','2023-02-02','09:00:00', '11:00:00');
INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Refactor code for better maintainability',2,'please arrange the meeting sheduling prosess quickly','2023-02-02','11:00:00', '01:30:00');
INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Create technical documentation for project PMSApp',5,'please arrange the meeting sheduling prosess quickly','2023-02-03','09:00:00', '11:00:00');
INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Develop RESTful API for EKSApp',1,'please arrange the meeting sheduling prosess quickly','2023-02-03','11:00:00', '01:30:00');
INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('Create technical documentation for EKSApp ',4,'please arrange the meeting sheduling prosess quickly','2023-02-03','09:00:00', '11:00:00');
INSERT INTO tasks(title,projectid,description,date,fromtime,totime)VALUES('SRS Document preparing',5,'please arrange the meeting sheduling prosess quickly','2023-02-04','11:00:00', '01:30:00');




INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,1,1,'2023-06-01 ','10:00:00', '11:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,2,1,'2023-06-01 ','11:00:00', '12:30:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,3,1,'2023-06-01 ','01:00:00', '02:30:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,4,1,'2023-06-01 ','10:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,5,2,'2023-06-02 ','10:00:00', '12:30:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,6,2,'2023-06-02 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,7,2,'2023-06-02','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,8,3,'2023-06-02','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,9,3,'2023-06-02 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,10,3,'2023-06-03 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,1,3,'2023-06-03 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,2,4,'2023-06-03 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,3,4,'2023-06-03 ','01:00:00', '12:30:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,4,4,'2023-06-04 ','11:30:00', '12:50:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,5,5,'2023-06-04 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,6,5,'2023-06-04 ','11:50:00', '12:30:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,7,5,'2023-06-04 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,6,5,'2023-05-04 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,5,1,'2023-06-05 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,4,2,'2023-06-05 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,1,3,'2023-06-05','10:00:00', '11:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,2,4,'2023-06-06 ','11:00:00', '12:30:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,3,5,'2023-06-06 ','01:00:00', '02:30:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,4,6,'2023-06-06 ','10:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,5,6,'2023-06-06 ','10:00:00', '12:30:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,6,6,'2023-06-06 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,7,7,'2023-06-07 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,8,7,'2023-06-07 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,9,7,'2023-06-07 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,10,8,'2023-06-08 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(6,1,8,'2023-06-08','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(6,2,8,'2023-06-08 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(6,3,9,'2023-06-09 ','01:00:00', '12:30:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(6,4,9,'2023-06-09 ','11:30:00', '12:50:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(6,5,9,'2023-06-09 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(6,6,10,'2023-06-10 ','11:50:00', '12:30:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,7,10,'2023-06-10 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,6,10,'2023-05-10 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,5,10,'2023-06-11 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,4,1,'2023-06-11 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,1,2,'2023-06-12 ','10:00:00', '11:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,2,2,'2023-06-13 ','11:00:00', '12:30:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,3,3,'2023-06-13 ','01:00:00', '02:30:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,4,3,'2023-06-14 ','10:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,5,3,'2023-06-14 ','10:00:00', '12:30:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,6,4,'2023-06-15 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,7,4,'2023-06-15 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,8,4,'2023-06-16 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,9,5,'2023-06-17 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,10,5,'2023-06-18 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,1,5,'2023-06-18','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,2,6,'2023-06-18','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,3,6,'2023-06-19 ','01:00:00', '12:30:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,4,6,'2023-06-20 ','11:30:00', '12:50:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,5,5,'2023-06-21 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,6,5,'2023-06-21 ','11:50:00', '12:30:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,7,4,'2023-06-22 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,6,4,'2023-05-22 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,5,4,'2023-06-23 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,4,4,'2023-06-23 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,6,3,'2023-05-24 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,5,3,'2023-06-24 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,4,3,'2023-06-25 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,1,3,'2023-06-25 ','10:00:00', '11:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,2,3,'2023-06-26 ','11:00:00', '12:30:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(2,3,3,'2023-06-26 ','01:00:00', '02:30:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,4,1,'2023-06-27 ','10:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,5,2,'2023-06-27 ','10:00:00', '12:30:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,6,2,'2023-06-28 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,7,1,'2023-06-28 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,8,2,'2023-06-28 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(4,9,2,'2023-06-29 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,10,2,'2023-06-29 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(5,1,2,'2023-06-29','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,2,2,'2023-06-29','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,3,2,'2023-06-29 ','01:00:00', '12:30:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,4,2,'2023-06-29 ','11:30:00', '12:50:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(1,5,3,'2023-06-30 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,6,3,'2023-06-30 ','11:50:00', '12:30:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,7,3,'2023-06-30 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,6,5,'2023-05-30 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,5,6,'2023-06-30 ','11:00:00', '12:00:00');
INSERT INTO timesheets(empid,projectid,taskid,date,fromtime,totime)VALUES(3,4,6,'2023-06-30 ','11:00:00', '12:00:00');







INSERT INTO timerecords(empid,date,totaltime)VALUES(1,'2023-06-01 ','3:00');
INSERT INTO timerecords(empid,date,totaltime)VALUES(1,'2023-06-02 ','14:55');
INSERT INTO timerecords(empid,date,totaltime)VALUES(1,'2023-06-03 ','10:00');
INSERT INTO timerecords(empid,date,totaltime)VALUES(1,'2023-06-04 ','10:00');
INSERT INTO timerecords(empid,date,totaltime)VALUES(1,'2023-06-05 ','08:00');
INSERT INTO timerecords(empid,date,totaltime)VALUES(2,'2023-06-06 ','18:00');
INSERT INTO timerecords(empid,date,totaltime)VALUES(2,'2023-06-07 ','04:10');
INSERT INTO timerecords(empid,date,totaltime)VALUES(2,'2023-06-08 ','3:00');
INSERT INTO timerecords(empid,date,totaltime)VALUES(2,'2023-06-09 ','14:55');
INSERT INTO timerecords(empid,date,totaltime)VALUES(2,'2023-06-10 ','10:00');
INSERT INTO timerecords(empid,date,totaltime)VALUES(2,'2023-06-11 ','10:00');
INSERT INTO timerecords(empid,date,totaltime)VALUES(3,'2023-06-12 ','08:00');
INSERT INTO timerecords(empid,date,totaltime)VALUES(3,'2023-06-13 ','18:00');
INSERT INTO timerecords(empid,date,totaltime)VALUES(3,'2023-06-14 ','04:10');
INSERT INTO timerecords(empid,date,totaltime)VALUES(3,'2023-06-15 ','04:10');
INSERT INTO timerecords(empid,date,totaltime)VALUES(3,'2023-06-16 ','3:00');
INSERT INTO timerecords(empid,date,totaltime)VALUES(4,'2023-06-17 ','14:55');
INSERT INTO timerecords(empid,date,totaltime)VALUES(4,'2023-06-18 ','10:00');
INSERT INTO timerecords(empid,date,totaltime)VALUES(4,'2023-06-19 ','10:00');
INSERT INTO timerecords(empid,date,totaltime)VALUES(4,'2023-06-20 ','08:00');
INSERT INTO timerecords(empid,date,totaltime)VALUES(4,'2023-06-21 ','18:00');
INSERT INTO timerecords(empid,date,totaltime)VALUES(4,'2023-06-22 ','04:10');
INSERT INTO timerecords(empid,date,totaltime)VALUES(5,'2023-06-23 ','3:00');
INSERT INTO timerecords(empid,date,totaltime)VALUES(5,'2023-06-24 ','14:55');
INSERT INTO timerecords(empid,date,totaltime)VALUES(5,'2023-06-25 ','10:00');
INSERT INTO timerecords(empid,date,totaltime)VALUES(5,'2023-06-26 ','10:00');
INSERT INTO timerecords(empid,date,totaltime)VALUES(5,'2023-06-27 ','08:00');
INSERT INTO timerecords(empid,date,totaltime)VALUES(6,'2023-06-28 ','18:00');
INSERT INTO timerecords(empid,date,totaltime)VALUES(6,'2023-06-29 ','04:10');
INSERT INTO timerecords(empid,date,totaltime)VALUES(6,'2023-06-30 ','04:10');


INSERT INTO clients(fullname,address,details)VALUES('Vishwambhar Kapare','Pune RajguruNagar','Client want to create online meeting portal for their compeny');
INSERT INTO clients(fullname,address,details)VALUES('Rajat Pisal','Kolhapur','Client want to create online Interview Sheduling Project');

INSERT INTO onproject(projectid,clientid)VALUES(1,2);

INSERT INTO assigned(taskid,empid,roleid)VALUES(1,1,1);