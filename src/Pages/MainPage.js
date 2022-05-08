import React, { useEffect, useState } from "react";
import { TaskList } from "../Assets/Components/TaskList/TaskList";


export const MainPage = () => {
  const [TaskInput, setTaskInput] = useState("");
  const [Task, setTask] = useState([]);

  //ambil data dari local storage
  useEffect(() => {
    //cek ada data atau tidak
    if (localStorage.getItem("localTasks")) {
      //ambil data dari lcoal storage dan rubah data ke JSON
      const TaskStored = JSON.parse(localStorage.getItem("localTasks"));

      //data dari local storage dimasukan ke state Task
      setTask(TaskStored);
    }
  }, []);

  const addTask = (e) => {
    //cek apakah ada data dalam state TaskInput
    if (TaskInput) {
      //buat objek untuk tampung task
      const newTask = { id: new Date().getTime().toString(), title: TaskInput };
      //masukan objek kedalam state Task
      setTask([...Task, newTask]);
      //masukan state task ke dalam local storage dan di buat menjadi string
      localStorage.setItem("localTasks", JSON.stringify([...Task, newTask]));
      setTaskInput("");
    }
  };

  // handle delete
  const handleDelete = (task) => {
    const deleted = Task.filter((t) => t.id !== task);
    setTask(deleted);
    localStorage.setItem("localTasks", JSON.stringify(deleted));
  };

  // handle clear
  const handleClear = () => {
    setTask([]);
    localStorage.removeItem("localTasks");
  };

  const showTask = (data) => {
    let dataTask = data;
    //map data untuk menampilkan data 
    return dataTask.map((value, index) => {
      //render component
      //mengirim id ke fungsi handleDelete kalau button di click
      return <TaskList Text={value.title} Hapus={()=>{handleDelete(value.id)}}/>;
    });
  };

  return (
    <div>
      <h1> To Do App</h1>
      <input
        type="text"
        value={TaskInput}
        onChange={(e) => {
          setTaskInput(e.target.value);
        }}
      />
      {console.log(TaskInput)}
      <button
        onClick={() => {
          addTask();
        }}
      >
        Tambah
      </button>

      {showTask(Task)}

      {/* tombol clear */}

      <div className="tbl-clear">
        <button onClick={() => handleClear()}>Clear</button>
      </div>
    </div>
  );
};
