import { FC, ChangeEvent } from 'react';

import { NewStudentData } from '../../interfaces/NewStudentData';

export const GeneralForm: FC<{
  student: NewStudentData,
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
}> = ({ student, onInputChange }) => {
  return (
    <>
      <input
        type="text"
        value={student?.firstName}
        name="firstName"
        id="firstName"
        className="input-field"
        onChange={onInputChange}
        placeholder="First Name"
      />
      <input
        type="text"
        value={student?.surname}
        name="surname"
        id="surname"
        className="input-field"
        onChange={onInputChange}
        placeholder="Second Holder"
      />
      <input
        type="number"
        value={student?.midterm}
        name="midterm"
        id="midterm"
        className="input-field"
        onChange={onInputChange}
        placeholder="Midterm Score"
      />
      <input
        type="number"
        value={student?.final}
        name="final"
        id="final"
        className="input-field"
        onChange={onInputChange}
        placeholder="Final Score"
      />
    </>
  );
}
