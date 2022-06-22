import React, { Component, useEffect, useState } from "react";
// import AddTask from "./components/AddTask";
// import Search from "./components/Search";
// import Task from "./components/Task";

export default function Todolist() {
  const [tasks, setTasks] = useState([]);

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     tasks: [],
  //     id: 3,
  //     modify: false,
  //     taskWeShouldUpdate: {},
  //     tasksTotal: "",
  //     search: "",
  //     isSearching: false,
  //     isAllChecked: false,
  //   };
  // }

  // useEffect(() => {

  // }, [])

  // componentDidMount() {
  //   this.setState({
  //     ["tasks"]: [
  //       {
  //         id: 1,
  //         text: "Think in React",
  //         priority: "Elevé",
  //         done: false,
  //         check: false,
  //       },
  //       {
  //         id: 2,
  //         text: "Apprendre Redux",
  //         priority: "Bas",
  //         done: false,
  //         check: false,
  //       },
  //       {
  //         id: 3,
  //         text: "Apprendre les Hooks",
  //         priority: "Moyen",
  //         done: false,
  //         check: false,
  //       },
  //     ],
  //   });
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   // QUAND UPDATE SEARCH ********************************************************************************************************
  //   if (prevState.search !== this.state.search || prevState.tasksTotal !== this.state.tasksTotal) {
  //     // REMISE A ZERO DE LA LISTE quand la barre de recherche est vide
  //     if (this.state.search === "" && this.state.tasksTotal !== "") {
  //       this.setState((prevState) => {
  //         return { ...prevState, ["tasks"]: this.state.tasksTotal };
  //       });
  //     }

  //     // COPIE DONNEES DE DEPART (tasks vers tasksTotal)
  //     else if (this.state.search !== "" && this.state.tasksTotal === "") {
  //       this.setState((prevState) => {
  //         return { ...prevState, ["tasksTotal"]: this.state.tasks };
  //       });
  //     }

  //     // REACTUALISATION DE LA LISTE DE TASKS
  //     if (this.state.search !== "" && this.state.tasksTotal !== "") {
  //       const newTasks = this.state.tasksTotal.filter((task) => {
  //         return task.text.toLowerCase().includes(this.state.search) || task.priority.toLowerCase().includes(this.state.search);
  //       });
  //       this.setState((prevState) => {
  //         return { ...prevState, ["tasks"]: newTasks };
  //       });
  //     }
  //   }
  // }

  // // AJOUT ------------------------------------------------------------------------------------------------------------------------
  // addTask = (newTask) => {
  //   const newTasks = [...this.state.tasks, newTask];
  //   this.setState((prevState) => {
  //     return { ...prevState, ["tasks"]: newTasks, ["id"]: prevState.id + 1 };
  //   });
  // };
  // // SUPRESSION --------------------------------------------------------------------------------------------------------------------
  // deleteTask = (taskId) => {
  //   const newTasks = this.state.tasks.filter((task) => task.id !== taskId);
  //   this.setState((prevState) => {
  //     return { ...prevState, ["tasks"]: newTasks };
  //   });
  // };

  // //SUPPRESSION DES CHECKED --------------------------------------------------------------------------------------------------------
  // deleteAllChecked = () => {
  //   const newTasks = this.state.tasks.filter((task) => !task.check);
  //   this.setState((prevState) => {
  //     return { ...prevState, ["tasks"]: newTasks, ["isAllChecked"]: false };
  //   });
  // };

  // //MODIFICATION --------------------------------------------------------------------------------------------------------------------
  // isModify = (taskId) => {
  //   const task = this.state.tasks.find((task) => task.id === taskId);
  //   this.setState((prevState) => {
  //     return { ...prevState, ["modify"]: true, ["taskWeShouldUpdate"]: task };
  //   });
  // };
  // updateTask = (newTask) => {
  //   const task = this.state.tasks.find((task) => task.id === newTask.id);
  //   const updatedTasks = this.state.tasks.map((task) => {
  //     if (task.id === newTask.id) {
  //       return newTask;
  //     }
  //     return task;
  //   });
  //   this.setState((prevState) => {
  //     return { ...prevState, ["tasks"]: updatedTasks, ["modify"]: false, ["taskWeShouldUpdate"]: {} };
  //   });
  // };

  // // DONE ---------------------------------------------------------------------------------------------------------------------------
  // toogleTask = (taskId) => {
  //   const doneTask = this.state.tasks.map((task) => {
  //     if (task.id === taskId) {
  //       return { ...task, ["done"]: !task.done };
  //     }
  //     return task;
  //   });
  //   this.setState((prevState) => {
  //     return { ...prevState, ["tasks"]: doneTask };
  //   });
  // };

  // //SEARCH ---------------------------------------------------------------------------------------------------------------------------
  // handleSearch = (e) => {
  //   this.setState((prevState) => {
  //     return { ...prevState, ["search"]: e.target.value.toLowerCase() };
  //   });
  // };

  // // Checkbox -----------------------------------------------------------------------------------------------------------------------
  // handleCheck = (taskIndex) => {
  //   const newTasks = this.state.tasks.map((task, index) => {
  //     if (index === taskIndex) {
  //       return { ...task, ["check"]: !task.check };
  //     } else {
  //       return task;
  //     }
  //   });
  //   this.setState((prevState) => {
  //     return { ...prevState, ["tasks"]: newTasks };
  //   });
  // };
  // handleAllCheck = () => {
  //   const newTasks = this.state.tasks.map((task) => {
  //     if (this.state.isAllChecked) {
  //       return { ...task, ["check"]: false };
  //     } else {
  //       return { ...task, ["check"]: true };
  //     }
  //   });
  //   this.setState((prevState) => {
  //     return { ...prevState, ["tasks"]: newTasks, ["isAllChecked"]: !this.state.isAllChecked };
  //   });
  // };

  return (
    <div>
      {/* {this.state.modify ? <AddTask func={this.updateTask} id={this.state.id} taskWeShouldUpdate={this.state.taskWeShouldUpdate} /> : <AddTask func={this.addTask} id={this.state.id} taskWeShouldUpdate={this.state.taskWeShouldUpdate} />}
        <Search handleSearch={this.handleSearch} />
        <Task tasks={this.state.tasks} deleteTask={this.deleteTask} isModify={this.isModify} toogleTask={this.toogleTask} isAllChecked={this.state.isAllChecked} handleCheck={this.handleCheck} handleAllCheck={this.handleAllCheck} deleteAllChecked={this.deleteAllChecked} /> */}
    </div>
  );
}
