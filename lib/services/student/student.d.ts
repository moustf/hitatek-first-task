import type { Application } from '../../declarations';
import { StudentService } from './student.class';
import { studentPath } from './student.shared';
export * from './student.class';
export * from './student.schema';
export declare const student: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [studentPath]: StudentService;
    }
}
