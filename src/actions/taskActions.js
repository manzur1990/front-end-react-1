import axios from 'axios'
import moment from 'moment'
export const FETCH_DATA = "FETCH_DATA";
export const POST_DATA = "POST_DATA";
export const DELETE_DATA = "DELETE_DATA";
export const SET_ERROR = "SET_ERROR";
export const SET_ALL_TASKS = "SET_ALL_TASKS";
export const TOGGLE_COMPLETION = "TOGGLE_COMPLETION";

// sort dates
const compare = (a, b) => {
    const dateA = moment(a.due);
    const dateB = moment(b.due);
  
    let comparison = 0;
    if (dateA.diff(dateB) > 0) {
      comparison = 1;
    }
    else {
      comparison = -1;
    }
    return comparison
  }

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios.get("https://quarantine-productivity.herokuapp.com/api/tasks").then(response => {
        console.log(response);
        let data = response.data;
        dispatch({ type: SET_ALL_TASKS, payload: data.sort(compare)})
    })
    .catch(error => {
        console.log(error);
        dispatch({ type: SET_ERROR, payload: {
            key: "isFetching",
            error: error
        } })
    })
}

export const toggleCompletion = (tasks, id) => dispatch => {
    dispatch({ type: TOGGLE_COMPLETION, payload: tasks.map(task => {
        return ((task.id === id) ? {
            ...task,
            completed: !task.completed
        } : task)
    })})
}

export const addTask = (tasks, values) => dispatch => {
    dispatch({ type: POST_DATA })
    const newTask = {
        ...values,
        tags: values.tags.replace(" ", ""),
        completed: false
    }
    axios.post("https://quarantine-productivity.herokuapp.com/api/tasks", newTask).then(response => {
        console.log(response);
        let data = [...tasks, {
            ...newTask,
            id: response.data[0]
        }]
        dispatch({ type: SET_ALL_TASKS, payload: data.sort(compare)});
    })
    .catch(error => {
        console.log(error);
        dispatch({ type: SET_ERROR, payload: {
            key: "isPosting",
            error: error
        } })
    })
}

export const deleteTask = (tasks, ID) => dispatch => {
    dispatch({ type: DELETE_DATA })
    axios.delete(`https://quarantine-productivity.herokuapp.com/api/tasks/${ID}`).then(response => {
        console.log(response);
        dispatch({ type: SET_ALL_TASKS, payload: tasks.filter(task => (task.id !== ID)) })
    })
    .catch(error => {
        console.log(error);
        dispatch({ type: SET_ERROR, payload: {
            key: "isDeleting",
            error: error
        } })
    })
}