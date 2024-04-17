import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import drumsets, { drumsetnames, isValidKey } from "drummachine";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <DrumMachine />;
  }
}

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      volume: 0.5,
      drumset: 0,
      drumpad: ""
    };
  }

  async componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
    console.log("keydown listener added");
    this.setAudioVolume();
    this.setState((state) => ({
      drumpad: drumsetnames[this.state.drumset]
    }));
  }

  async componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.volume !== this.state.volume) {
      this.setAudioVolume();
    }
  }

  handleKeyDown = (evt) => {
    const key = evt.key.toUpperCase();
    console.log("key : " + key);
    if (isValidKey(key)) this.play(key);
  };

  handleDrumsetToggle = () => {
    this.state.drumset === 0
      ? this.setState((state) => ({
          drumset: state.drumset + 1,
          drumpad: drumsetnames[state.drumset + 1]
        }))
      : this.setState((state) => ({
          drumset: state.drumset - 1,
          drumpad: drumsetnames[state.drumset - 1]
        }));
  };

  handlePowerButton = () => {
    this.setState((state) => ({
      power: !state.power
    }));
  };

  handleVolumeChange = (evt) => {
    const source = event.target || event.srcElement;
    this.setState((state) => ({
      volume: source.value
    }));
  };

  setAudioVolume = () => {
    const collection = document.getElementsByTagName("audio");
    const volume = this.state.volume;
    Array.from(collection).forEach((element) => {
      element.volume = volume;
    });
  };

  handleDrumPad = (evt) => {
    const source = event.target || event.srcElement;
    this.play(source.firstElementChild.getAttribute("id"));
  };

  play = (id) => {
    const audio = document.getElementById(id);
    if (this.state.power) {
      this.setState((state) => ({
        drumpad: audio.title
      }));
      audio.play();
    }
  };

  render() {
    const currDrumSet = drumsets[drumsetnames[this.state.drumset]];
    const btnClass = this.state.power ? "btn-danger" : "btn-secondary";
    const drumpadClass = this.state.power ? "drum-pad": "drum-pad drum-pad-inactive";
    return (
      <Card id="drum-machine" className="drum-machine">
        <div className="drum-pads-container">
          {Object.entries(currDrumSet).map(([key, value]) => (
            <div
              key={key}
              className={drumpadClass}
              onClick={this.handleDrumPad}
              id={key}
            >
              <audio
                className="clip"
                src={value.url}
                controls={false}
                preload="auto"
                muted={!this.state.power}
                id={value.id}
                volume={this.state.volume}
                title={key}
              ></audio>
              {value.id}
            </div>
          ))}
        </div>
        <Card className="controls-container">
          <div className="btn-switch-container">
            <Form.Label className="mt-2 mx-1" id="display">
              {this.state.drumpad}
            </Form.Label>
            <div>
              <Form.Check
                className="mx-1"
                type="switch"
                id="switch-drumset"
                checked={this.state.drumset === 0}
                onChange={this.handleDrumsetToggle}
                label={drumsetnames[this.state.drumset]}
                title={drumsetnames[this.state.drumset]}
                reverse={true}
              />
            </div>
          </div>
          <div className="d-flex flex-column-reverse">
            <Form.Label htmlFor="volume" className="mx-auto">
              {"Volume: " + Math.ceil(this.state.volume * 100)}
            </Form.Label>
            <Form.Range
              className="form-range mx-auto"
              min="0"
              max="1"
              step="0.01"
              id="volume"
              onChange={this.handleVolumeChange}
            />
          </div>
          <Button onClick={this.handlePowerButton} className={btnClass + " mx-auto"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="currentColor"
              className="bi bi-power"
              viewBox="0 0 16 16"
            >
              <path d="M7.5 1v7h1V1z" />
              <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812" />
            </svg>
          </Button>
        </Card>
      </Card>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
