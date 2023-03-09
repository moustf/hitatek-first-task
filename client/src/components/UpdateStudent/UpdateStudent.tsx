import { ChangeEvent, FC, FormEvent, SetStateAction, Dispatch } from 'react';
import axios from 'axios';

import { NewStudentData } from '../../interfaces/NewStudentData';
import { GeneralForm } from '../GeneralForm/GeneralForm';
import './UpdateStudent.css';

export const UpdateStudent: FC<{
  setShowUpdateForm: Dispatch<SetStateAction<boolean>>,
  setRefetch: Dispatch<SetStateAction<boolean>>,
  studentToUpdate: NewStudentData,
  setStudentToUpdate: Dispatch<SetStateAction<NewStudentData>>,
  idToUpdate: number,
}> = ({ setShowUpdateForm, setRefetch, studentToUpdate, setStudentToUpdate, idToUpdate }) => {
  const onFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await axios.patch(`/student/${idToUpdate}`, studentToUpdate);

    setRefetch((prevValue) => !prevValue);
    setShowUpdateForm(false);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStudentToUpdate((prevValue) => ({ ...prevValue, [e.target.name]: e.target.value }));
  };

  return (
    <section className='form-cont'>
      <button className='close-btn' type='button' onClick={() => setShowUpdateForm(false)}>
        <img className='close-icon' src="./x.svg" alt="close icon" />
      </button>
      <form id="form" onSubmit={onFormSubmit}>
        <GeneralForm student={studentToUpdate} onInputChange={onInputChange} />
        <input id="submit" type="submit" value="Update" />
      </form>
    </section>
  );
};
