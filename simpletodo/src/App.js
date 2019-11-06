import React,{Component} from 'react';
import './App.css';
import Note from './Components/Note'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      noteText :'',
      notes : [],
    }
  }

  notuGuncelle (not) {

    this.setState ({
      noteText : not.target.value
    })
    console.log(not.target.value);
    

  }

  tusaBasilinca = e => {
    if (e.key === 'Enter') {  
      let txtAlani = this.state.noteText;
      let guncelNotlar = this.state.notes;
      guncelNotlar.push(txtAlani);
      this.setState({
        noteText : ''
      })
    }
   


  }

  notuSil (index) {
    let notesArray = this.state.notes;
    notesArray.splice(index,1);
    this.setState({
      notes : notesArray
    })
  }

  notEkle() {

    if (this.state.noteText === '') {
      this.textInput.focus();
      return
    }

    let noteTextNow = this.state.noteText;
    let notesNow = this.state.notes;
    notesNow.push(noteTextNow);
    this.setState({
      noteText : ''
    })
    this.textInput.focus();
    
  }

  render () {

    let notlar = this.state.notes.map((val,key) => {
      return <Note
      key={key}
      text={val}
      silMetodu = {() => (this.notuSil(key))}
      />
    })

    return (
      <div className="container">
        <header className="header">Basit ToDo List</header>
        {notlar}
        <button className="btn" onClick={this.notEkle.bind(this)}>+</button>
        <input type = "text"
          ref = {((input) => {this.textInput = input})}
          className = "textInput"
          value = {this.state.noteText}
          onChange = {noteText => {
            return this.notuGuncelle(noteText);
          }}
          onKeyPress = {this.tusaBasilinca.bind(this)}
        />
      </div>
    );
  } 
}
export default App;
