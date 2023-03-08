// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const studentSchema = Type.Object(
  {
    id: Type.Number(),
    firstName: Type.String(),
    surname: Type.String(),
    midterm: Type.String(),
    final: Type.String()
  },
  { $id: 'Student', additionalProperties: false }
)
export type Student = Static<typeof studentSchema>
export const studentValidator = getValidator(studentSchema, dataValidator)
export const studentResolver = resolve<Student, HookContext>({})

export const studentExternalResolver = resolve<Student, HookContext>({})

// Schema for creating new entries
export const studentDataSchema = Type.Pick(studentSchema, ['firstName', 'surname', 'midterm', 'final'], {
  $id: 'StudentData'
})
export type StudentData = Static<typeof studentDataSchema>
export const studentDataValidator = getValidator(studentDataSchema, dataValidator)
export const studentDataResolver = resolve<Student, HookContext>({})

// Schema for updating existing entries
export const studentPatchSchema = Type.Partial(studentSchema, {
  $id: 'StudentPatch'
})
export type StudentPatch = Static<typeof studentPatchSchema>
export const studentPatchValidator = getValidator(studentPatchSchema, dataValidator)
export const studentPatchResolver = resolve<Student, HookContext>({})

// Schema for allowed query properties
export const studentQueryProperties = Type.Pick(studentSchema, ['id', 'firstName', 'surname', 'midterm', 'final'])
export const studentQuerySchema = Type.Intersect(
  [
    querySyntax(studentQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type StudentQuery = Static<typeof studentQuerySchema>
export const studentQueryValidator = getValidator(studentQuerySchema, queryValidator)
export const studentQueryResolver = resolve<StudentQuery, HookContext>({})
