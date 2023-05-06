# hospitalApi.github.io
## New Hosted Url:
https://hospital-api-25pg.onrender.com
## How to INSTALL and RUN?

1. Clone the project.
2. Navigate to the folder `cd Hospital-API ` where the project has been Stored.
3. Open Terminal and type `npm install` to install required files.
4. Run following command: `Nodemon .\index.js `

## How to USE?

URL: ` http://localhost:8000/api/v1`

#### End Points:
1. `/doctor/register`(POST): Register the new doctor using name,email and password(all requireds).
2. `/doctor/login`(POST): Doctor can Login using email and password.
3. `/patients/register`(POST): Doctor can Register the patient using name and Phone Number.
4. `/patients/:id/create_report`(POST): Doctor can create report of the Patients.
5. `/patients/:id/all_reports`(GET):Retrive all reports of a patient by ID.
6. `/reports/:status`(GET):Retrieve all reports from DB filter on the basis of Status sent in params.

## Unit Tesing 

1. Run following command: `npm test` for unit-tesing.
 
- Used `mocha` as a server and `chai` for assertion library.

1. Testing for `/patients/register`
2. Testing for `/patients/:id/create_report`
3. Testing for `/patients/:id/all_reports`
![](/images/doctors_register.jpg)
![](/images/doctors_login.jpg)
![](/images/patients_register.jpg)
![](/images/patients_authorization.jpg)
![](/images/patients_create_report.jpg)
![](/images/patients_all_report.jpg)
![](/images/reports.jpg)

