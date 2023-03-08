import { FC } from 'react';
import { UserData } from '../../interfaces/UserData';

export const TableRow: FC<UserData> = ({ id, firstName, surname, midterm, final }) => (
  <tr id={String(id)} className="row">
    <td className="first-name">{firstName}</td>
    <td className="surname">{surname}</td>
    <td className="midterm">{midterm}</td>
    <td className="final">{final}</td>
  </tr>
);
