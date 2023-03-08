"use strict";
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.student = void 0;
const schema_1 = require("@feathersjs/schema");
const student_schema_1 = require("./student.schema");
const student_class_1 = require("./student.class");
const student_shared_1 = require("./student.shared");
__exportStar(require("./student.class"), exports);
__exportStar(require("./student.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const student = (app) => {
    // Register our service on the Feathers application
    app.use(student_shared_1.studentPath, new student_class_1.StudentService((0, student_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: student_shared_1.studentMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(student_shared_1.studentPath).hooks({
        around: {
            all: [schema_1.hooks.resolveExternal(student_schema_1.studentExternalResolver), schema_1.hooks.resolveResult(student_schema_1.studentResolver)]
        },
        before: {
            all: [schema_1.hooks.validateQuery(student_schema_1.studentQueryValidator), schema_1.hooks.resolveQuery(student_schema_1.studentQueryResolver)],
            find: [],
            get: [],
            create: [schema_1.hooks.validateData(student_schema_1.studentDataValidator), schema_1.hooks.resolveData(student_schema_1.studentDataResolver)],
            patch: [schema_1.hooks.validateData(student_schema_1.studentPatchValidator), schema_1.hooks.resolveData(student_schema_1.studentPatchResolver)],
            remove: []
        },
        after: {
            all: []
        },
        error: {
            all: []
        }
    });
};
exports.student = student;
