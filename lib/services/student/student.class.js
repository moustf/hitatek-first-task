"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.StudentService = void 0;
const knex_1 = require("@feathersjs/knex");
// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
class StudentService extends knex_1.KnexService {
}
exports.StudentService = StudentService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('postgresqlClient'),
        name: 'student'
    };
};
exports.getOptions = getOptions;
