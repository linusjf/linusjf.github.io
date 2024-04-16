class AudioElement {
  constructor(url, id) {
    this.url = url;
    this.id = id;
    this.muted = false;
  }
}

const newAudio = (url, id) => {
  const audio = new AudioElement(url, id);
  return audio;
};

const drumsets = {
  heater_kit: {
    heater_1: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      "Q",
    ),
    heater_2: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      "W",
    ),
    heater_3: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      "E",
    ),
    heater_4: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      "A",
    ),
    clap: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      "S",
    ),
    open_hh: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      "D",
    ),
    kick_n_hat: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      "Z",
    ),
    kick: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      "X",
    ),
    closed_hh: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      "C",
    ),
  },
  smooth_piano_kit: {
    chord_1: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
      "Q",
    ),
    chord_2: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
      "W",
    ),
    chord_3: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
      "E",
    ),
    give_us_a_light: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
      "A",
    ),
    dry_ohh: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
      "S",
    ),
    bid_h1: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
      "D",
    ),
    punchy_kick: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
      "Z",
    ),
    side_stick_1: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
      "X",
    ),
    snare: newAudio(
      "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
      "C",
    ),
  },
};

const drumsetnames = ["heater_kit", "smooth_piano_kit"];

const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

function isValidKey(key) {
  return keys.includes(key);
}

export default drumsets;

export { drumsetnames, isValidKey };
