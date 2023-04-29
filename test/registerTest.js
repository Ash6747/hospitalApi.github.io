//During the test the env variable is set to test
process.env.NODE_ENV="test";

let Patient=require("../models/patient");

//Require dev dependencies
let chai=require("chai");
let chaiHTTP=require("chai-http");
let server=require("../index");

let should=chai.should();

chai.use(chaiHTTP);
//Parent block
describe("Patients Register Testing :", () => {
    let Token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQzZWIzZTcwZjcxYWFhNjAwYzZlY2EiLCJuYW1lIjoiZG9jMiIsImVtYWlsIjoibWFkaHVyaUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjIiLCJjcmVhdGVkQXQiOiIyMDIyLTEwLTEwVDA5OjUxOjU4LjQyNVoiLCJ1cGRhdGVkQXQiOiIyMDIyLTEwLTEwVDA5OjUxOjU4LjQyNVoiLCJfX3YiOjAsImlhdCI6MTY2NTM5NTcwNywiZXhwIjoxNjc1Mzk1NzA3fQ.zpHUeuYNcn3Sp-mwlZy6p26Z8d7qjukzVcLSkJH3IGI";
    let auth = "Bearer "+Token;
  
    /*
        * Test the /POST route
    */
   //1.If Doctor is not authorized
    describe("POST /api/v1/patients/register", () => {
      it("Eror because Doctor is not Authorized:", (done) => {
        let patient = {
          name: "patient11",
          phone: 100000001,
        };
  
        chai
          .request(server)
          .post("/api/v1/patients/register")
          .set("Content-Type", "application/x-www-form-urlencoded")
          .send(patient)
          .end((err, res) => {
            res.should.have.status(401);
            done();
          });
      });
    });
  
  //2.If form data is incompleted or missing
    describe("POST /api/v1/patients/register", () => {
      it("Error because of Incomplete data provided :", (done) => {
        let patient = {
          name: "patient12",
         // phone: 100000002,
        };
  
        chai
          .request(server)
          .post("/api/v1/patients/register")
          .set("Content-Type", "application/x-www-form-urlencoded")
          .set("Authorization", auth)
          .send(patient)
          .end((err, res) => {
            res.should.have.status(206);
            res.body.should.have.property("message");
            res.body.should.have.property("message").eql("Incomplete data provided");
            done();
          });
      });
    });
  
    //3.If Patient is already exists in DB
    describe("POST /api/v1/patients/register", () => {
      it("Patient already Exist:", (done) => {
        let patient = {
          name: "patient2",
          phone: 2345678910,
        };
  
        chai
          .request(server)
          .post("/api/v1/patients/register")
          .set("Content-Type", "application/x-www-form-urlencoded")
          .set("Authorization", auth)
          .send(patient)
          .end((err, res) => {
            res.should.have.status(405);
            res.body.should.be.a("object");
            res.body.should.have.property("message");
            res.body.should.have.property("message").eql("Patient already Registered DB");
            done();
          });
      });
    });
  
   //4. If Patient is new then register the patient
    describe("POST /api/v1/patients/register", () => {
      it("Patient Successfully Registered:", (done) => {
        let patient = {
          name: "patient21",
          phone: 1000000004,
        };
  
        chai
          .request(server)
          .post("/api/v1/patients/register")
          .set("Content-Type", "application/x-www-form-urlencoded")
          .set("Authorization", auth)
          .send(patient)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("message");
            res.body.should.have.property("message").eql("Patient Successfully Registered");
            done();
          });
      });
    });
  });
  