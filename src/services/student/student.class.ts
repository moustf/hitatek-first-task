// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Student, StudentData, StudentPatch, StudentQuery } from './student.schema'

export type { Student, StudentData, StudentPatch, StudentQuery }

interface StudentInterface {
  id: number
  firstName: string
  surname: string
  midterm: number
  final: number
}

export interface StudentParams extends KnexAdapterParams<StudentQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class StudentService<ServiceParams extends Params = StudentParams> extends KnexService<
  Student,
  StudentData,
  StudentParams,
  StudentPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('postgresqlClient'),
    name: 'student'
  }
}
