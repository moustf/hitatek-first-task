import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Student, StudentData, StudentPatch, StudentQuery } from './student.schema';
export type { Student, StudentData, StudentPatch, StudentQuery };
export interface StudentParams extends KnexAdapterParams<StudentQuery> {
}
export declare class StudentService<ServiceParams extends Params = StudentParams> extends KnexService<Student, StudentData, StudentParams, StudentPatch> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
