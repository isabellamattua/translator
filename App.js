import React, { Component } from 'react';
import Dothraki from "./components/Dothraki";
import './App.css';
import Form from "./components/Form"
import Title from './components/Title';

const api_key = "";

class App extends Component {
  state = {
    translated: undefined,
    text: undefined,
    translation: undefined,
    error: undefined,
  }

  doTranslation = async (e) => {

    const english = e.target.elements.englishText.value;
    e.preventDefault();
    const api_call = await fetch('https://api.funtranslations.com/translate/dothraki.json?text=dragon', {
      body: "",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Funtranslations-Api-Secret": api_key
      },
      method: "POST"
    })

    const data = await api_call.json();

    console.log(english);
    console.log(data);
    this.setState({
      translated: data.contents.translated,
      text: data.contents.text,
      translation: data.contents.translation,
      error: ""
    })


  }




  render() {
    return (
      <div className="App">
        <Title/>
        <Form doTranslation={this.doTranslation} />
        <Dothraki 
          translated={this.state.translated}
          text={this.state.text}
          translation={this.state.translation}
          error={this.state.error}
        />


      </div>
    );
  }
}

export default App;
