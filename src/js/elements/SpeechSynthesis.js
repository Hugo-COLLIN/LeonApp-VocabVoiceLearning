/**
 * Class for speech synthesis.
 */
export class SpeechSynthesis {

  /**
   * Constructor.
   */
  constructor() {
    this.voices = window.speechSynthesis.getVoices();
  }

  /**
   * Create a new utterance for the specified text and add it to the queue.
   * @param text
   * @param volume
   * @param rate
   * @param pitch
   * @param voiceName
   */
  speak(text, volume = 1, rate = 1, pitch = 1, voiceName = '') {
    // Create a new instance of SpeechSynthesisUtterance.
    const msg = new SpeechSynthesisUtterance();

    // Set the text.
    msg.text = text;

    // Set the attributes.
    msg.volume = parseFloat(volume);
    msg.rate = parseFloat(rate);
    msg.pitch = parseFloat(pitch);

    // If a voice has been selected, find the voice and set the
    // utterance instance's voice attribute.
    if (voiceName) {
      msg.voice = this.voices.filter(function(voice) { return voice.name === voiceName; })[0];
    }

    // Queue this utterance.
    window.speechSynthesis.speak(msg);
  }
}
