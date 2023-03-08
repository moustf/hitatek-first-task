"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentQueryResolver = exports.studentQueryValidator = exports.studentQuerySchema = exports.studentQueryProperties = exports.studentPatchResolver = exports.studentPatchValidator = exports.studentPatchSchema = exports.studentDataResolver = exports.studentDataValidator = exports.studentDataSchema = exports.studentExternalResolver = exports.studentResolver = exports.studentValidator = exports.studentSchema = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.studentSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    firstName: typebox_1.Type.String(),
    surname: typebox_1.Type.String(),
    midterm: typebox_1.Type.String(),
    final: typebox_1.Type.String()
}, { $id: 'student', additionalProperties: false });
exports.studentValidator = (0, typebox_1.getValidator)(exports.studentSchema, validators_1.dataValidator);
exports.studentResolver = (0, schema_1.resolve)({});
exports.studentExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.studentDataSchema = typebox_1.Type.Pick(exports.studentSchema, ['firstName', 'surname', 'midterm', 'final'], {
    $id: 'StudentData'
});
exports.studentDataValidator = (0, typebox_1.getValidator)(exports.studentDataSchema, validators_1.dataValidator);
exports.studentDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.studentPatchSchema = typebox_1.Type.Partial(exports.studentSchema, {
    $id: 'StudentPatch'
});
exports.studentPatchValidator = (0, typebox_1.getValidator)(exports.studentPatchSchema, validators_1.dataValidator);
exports.studentPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.studentQueryProperties = typebox_1.Type.Pick(exports.studentSchema, ['id', 'firstName', 'surname', 'midterm', 'final']);
exports.studentQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.studentQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.studentQueryValidator = (0, typebox_1.getValidator)(exports.studentQuerySchema, validators_1.queryValidator);
exports.studentQueryResolver = (0, schema_1.resolve)({});
