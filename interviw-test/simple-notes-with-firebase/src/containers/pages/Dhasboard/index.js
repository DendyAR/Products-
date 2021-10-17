import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addDataToFirebase,
  deleteDataAPI,
  getDataToAPI,
  logoutAPI,
  updateDataAPI,
} from "../../../config/redux/action";
import "./Dhasboard.scss";
import { getAuth, onAuthStateChanged } from "firebase/auth";

class Dhasboard extends Component {
  state = {
    title: "",
    content: "",
    date: "",
    textButton: "SIMPAN",
  };

  componentDidMount() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user || window.localStorage.key === null) {
        this.props.history.push('/login')
      }
    });
    const userData = JSON.parse(localStorage.getItem("userData"));
    if(userData === null){
      return userData
    }else{
      JSON.parse(localStorage.getItem("userData"))
      this.props.getNotes(userData.uid)
    }
  }

  handleSaveNotes = () => {
    const { title, content, textButton, noteId } = this.state;
    const { saveNotes, updateNotes } = this.props;
    const userData = JSON.parse(localStorage.getItem("userData"));

    const data = {
      title: title,
      content: content,
      date: new Date().getDate(),
      userId: userData.uid,
    };
    if (textButton === "SIMPAN") {
      saveNotes(data);
    } else {
      data.noteId = noteId;
      updateNotes(data);
    }
    console.log(data);
  };

  onInputChange = (e, type) => {
    this.setState({
      [type]: e.target.value,
    });
  };

  updateNotes = (note) => {
    console.log(note);
    this.setState({
      title: note.data.title,
      content: note.data.content,
      textButton: "UPDATE",
      noteId: note.id,
    });
  };

  cancelUpdate = () => {
    console.log();
    this.setState({
      title: "",
      content: "",
      textButton: "SIMPAN",
    });
  };

  deleteNotes = (e, note) => {
    e.stopPropagation();
    const { deleteToNotes } = this.props;
    const userData = JSON.parse(localStorage.getItem("userData"));
    const data = {
      userId: userData.uid,
      noteId: note.id,
    };
    deleteToNotes(data);
    alert("Data terhapus");
  };

  handleLogout = () => {
    const { email, password } = this.state;
    const { history } = this.props;
    const res = this.props.logoutUser({ email, password }).catch((err) => err);
    if (res) {
      console.log("Logout Succsess", res);
      window.localStorage.clear();
      history.push("/login");
    } else {
      console.log("Logout failed");
    }
  };

  render() {
    const { title, content, textButton } = this.state;
    const { notes } = this.props;
    const { updateNotes, cancelUpdate } = this;
    console.log("Notes", notes);
    return (
      <div className="container">
        <div className="input-form">
          <input
            placeholder="title"
            className="input-title"
            value={title}
            onChange={(e) => this.onInputChange(e, "title")}
          />
          <textarea
            placeholder="content"
            className="input-content"
            value={content}
            onChange={(e) => this.onInputChange(e, "content")}
          ></textarea>
          <div className="action-wrraper">
            {textButton === "UPDATE" ? (
              <button
                className="save-btn cancel"
                onClick={this.handleSaveNotes}
                onClick={cancelUpdate}
              >
                Cancle
              </button>
            ) : (
              <div />
            )}
            <button className="save-btn" onClick={this.handleSaveNotes}>
              {textButton}
            </button>
            <button className="save-btn" onClick={this.handleLogout}>
              Logout
            </button>
          </div>
        </div>
        <hr />
        {notes.length > 0
          ? notes.map((note) => {
              return (
                <div
                  className="card-content"
                  key={note.id}
                  onClick={() => updateNotes(note)}
                >
                  <p className="title">{note.data.title}</p>
                  <p className="date">{note.data.date}</p>
                  <p className="content">{note.data.content}</p>
                  <div
                    className="delete-btn"
                    onClick={(e) => this.deleteNotes(e, note)}
                  >
                    X
                  </div>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

const reduxState = (state) => ({
  userData: state.user,
  notes: state.notes,
});

const reduxDispatch = (dispatch) => ({
  saveNotes: (data) => dispatch(addDataToFirebase(data)),
  getNotes: (data) => dispatch(getDataToAPI(data)),
  updateNotes: (data) => dispatch(updateDataAPI(data)),
  deleteToNotes: (data) => dispatch(deleteDataAPI(data)),
  logoutUser: (data) => dispatch(logoutAPI(data)),
});

export default connect(reduxState, reduxDispatch)(Dhasboard);
