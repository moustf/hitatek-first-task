import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { Student, StudentData, StudentPatch, StudentQuery, StudentService } from './student.class';
export type { Student, StudentData, StudentPatch, StudentQuery };
export type StudentClientService = Pick<StudentService<Params<StudentQuery>>, (typeof studentMethods)[number]>;
export declare const studentPath = "student";
export declare const studentMethods: readonly ["find", "get", "create", "patch", "remove"];
export declare const studentClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [studentPath]: StudentClientService;
    }
}
