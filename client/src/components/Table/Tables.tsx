import { FC, useEffect, useState } from 'react';
import axios from 'axios';

import { TableRow } from '../TableRow/TableRow';
import { UserData } from '../../interfaces/UserData';

export const Table: FC = () => {
  const [students, setStudents] = useState<UserData[] | []>([]);

  useEffect(() => {
    const fetchStudents = async () => await axios.get('/student');

    fetchStudents()
      .then((data) => setStudents(data.data.data));
  }, []);

  return (
    <table className="students_table">
      <thead>
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
            <TableRow id={id} firstName={firstName} surname={surname} midterm={midterm} final={final} />
          ))
        }
      </tbody>
    </table>
  );
};