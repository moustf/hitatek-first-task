"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentClient = exports.studentMethods = exports.studentPath = void 0;
exports.studentPath = 'student';
exports.studentMethods = ['find', 'get', 'create', 'patch', 'remove'];
const studentClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.studentPath, connection.service(exports.studentPath), {
        methods: exports.studentMethods
    });
};
exports.studentClient = studentClient;
