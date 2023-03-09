import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

import { TableRow } from '../TableRow/TableRow';
import { UserData } from '../../interfaces/UserData';
import { NewStudentData } from '../../interfaces/NewStudentData';
import './Table.css';

export const Table: FC<{
  refetch: boolean,
  setRefetch: Dispatch<SetStateAction<boolean>>,
  studentToUpdate: NewStudentData,
  setShowUpdateForm: Dispatch<SetStateAction<boolean>>,
  setStudentToUpdate: Dispatch<SetStateAction<NewStudentData>>,
  setIdToUpdate: Dispatch<SetStateAction<number>>,
}> = ({ refetch, setRefetch, studentToUpdate, setShowUpdateForm, setStudentToUpdate, setIdToUpdate }) => {
  const [students, setStudents] = useState<UserData[] | []>([]);

  useEffect(() => {
    const fetchStudents = async () => await axios.get('/student');

    fetchStudents()
      .then((data) => setStudents(data.data.data));
  }, [refetch]);

  return (
    <table className="students-table">
      <thead className='head-row'>
        <tr>
          <th>First Name</th>
          <th>Surname</th>
          <th>Midterm</th>
          <th>Final</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          students.map(({ id, firstName, surname, midterm, final }) => (
            <TableRow
              key={uuid()}
              id={id}
              firstName={firstName}
              surname={surname}
              midterm={midterm}
              final={final}
              setRefetch={setRefetch}
              studentToUpdate={studentToUpdate}
              setShowUpdateForm={setShowUpdateForm}
              setStudentToUpdate={setStudentToUpdate}
              setIdToUpdate={setIdToUpdate}
            />
          ))
        }
      </tbody>
    </table>
  );
};