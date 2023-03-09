import { useState } from 'react';

import { Table } from './components/Table/Tables';
import { AddNewStudent } from './components/AddNewStudent/AddNewStudent';
import { NewStudentData } from './interfaces/NewStudentData';
import { UpdateStudent } from './components/UpdateStudent/UpdateStudent';
import './App.css';

function App() {
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const [showUpdateForm, setShowUpdateForm] = useState<boolean>(false);
  const [refetch, setRefetch] = useState<boolean>(false);
  const [studentToUpdate, setStudentToUpdate] = useState<NewStudentData>({
    firstName: '',
    surname: '',
    midterm: '',
    final: '',
  });
  const [idToUpdate, setIdToUpdate] = useState<number>(0);

  return (
    <div className="App">
      {
        !showAddForm &&
        <section className='add-cont'>
          <button type='button' className='add-new-btn' onClick={() => setShowAddForm(true)}>
            Add New student
          </button>
        </section>
      }
      {showAddForm && <AddNewStudent setRefetch={setRefetch} setShowAddForm={setShowAddForm} />}
      {showUpdateForm && <UpdateStudent
        setRefetch={setRefetch}
        setShowUpdateForm={setShowUpdateForm}
        setStudentToUpdate={setStudentToUpdate}
        studentToUpdate={studentToUpdate}
        idToUpdate={idToUpdate}
      />}
      <Table
        refetch={refetch}
        setRefetch={setRefetch}
        studentToUpdate={studentToUpdate}
        setShowUpdateForm={setShowUpdateForm}
        setStudentToUpdate={setStudentToUpdate}
        setIdToUpdate={setIdToUpdate}
      />
    </div>
  );
}

export default App;
