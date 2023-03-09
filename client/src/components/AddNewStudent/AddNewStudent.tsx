import { ChangeEvent, FC, FormEvent, SetStateAction, useState, Dispatch } from 'react';
import axios from 'axios';

import { NewStudentData } from '../../interfaces/NewStudentData';
import { GeneralForm } from '../GeneralForm/GeneralForm';
import '../AddNewStudent/AddNewStudent.css';

export const AddNewStudent: FC<{
  setShowAddForm: Dispatch<SetStateAction<boolean>>,
  setRefetch: Dispatch<SetStateAction<boolean>>,
}> = ({ setShowAddForm, setRefetch }) => {
  const [student, setStudent] = useState<NewStudentData>({
    firstName: '',
    surname: '',
    midterm: '',
    final: '',
  });

  const onFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await axios.post('/student', student);

    setRefetch((prevValue) => !prevValue);
    setShowAddForm(false);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStudent((prevValue) => ({ ...prevValue, [e.target.name]: e.target.value }));
  };

  return (
    <section className='form-cont'>
      <button className='close-btn' type='button' onClick={() => setShowAddForm(false)}>
        <img className='close-icon' src="./x.svg" alt="close icon" />
      </button>
      <form id="form" onSubmit={onFormSubmit}>
        <GeneralForm student={student} onInputChange={onInputChange} />
        <input id="submit" type="submit" value="Add" />
      </form>
    </section>
  );
};
