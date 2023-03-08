"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const student_1 = require("./student/student");
const services = (app) => {
    app.configure(student_1.student);
    // All services will be registered here
};
exports.services = services;
