import { Dispatch, FC, SetStateAction } from 'react';
import axios from 'axios';

import { UserData } from '../../interfaces/UserData';
import { NewStudentData } from '../../interfaces/NewStudentData';
import './TableRow.css';

export const TableRow: FC<
  UserData & {
    setRefetch: Dispatch<SetStateAction<boolean>>,
    studentToUpdate: NewStudentData,
    setStudentToUpdate: Dispatch<SetStateAction<NewStudentData>>,
    setShowUpdateForm: Dispatch<SetStateAction<boolean>>,
    setIdToUpdate: Dispatch<SetStateAction<number>>,
  }
> = ({
  id,
  firstName,
  surname,
  midterm,
  final,
  setRefetch,
  studentToUpdate,
  setStudentToUpdate,
  setShowUpdateForm,
  setIdToUpdate,
}) => {
    const deleteRecord = async (id: string) => {
      await axios.delete(`student/${id}`);
    };

    return (
      <tr id={String(id)} className="row">
        <td className="first-name">{firstName}</td>
        <td className="surname">{surname}</td>
        <td className="midterm">{midterm}</td>
        <td className="final">{final}</td>
        <td className='actions'>
          <button className='icon-btn' type='button' onClick={() => {
            setStudentToUpdate(studentToUpdate);
            setShowUpdateForm(true);
            setIdToUpdate(Number(id))
          }}>
            <img className="icon edit-icon" src="./edit.svg" alt="edit icon" />
          </button>
          <button className='icon-btn' type='button' onClick={() => {
            setRefetch(true);
            deleteRecord(id)
          }}>
            <img className="icon trash-icon" src="./trash-2.svg" alt="trash icon" />
          </button>
        </td>
  </tr>
    );
}