/**
 * Class for speech synthesis.
 */
export class SpeechSynthesis {

  /**
   * Constructor.
   */
  constructor() {
    this.voices = window.speechSynthesis.getVoices();
    this.msg = new SpeechSynthesisUtterance();
  }

  /**
   * Create a new utterance for the specified text and add it to the queue.
   * @param text
   * @param volume
   * @param rate
   * @param pitch
   * @param voiceName
   */
  speak(text, volume = 1, rate = 1, pitch = 1, voiceName) {
    // Create a new instance of SpeechSynthesisUtterance.

    // Set the text.
    this.msg.text = text;

    // Set the attributes.
    this.msg.volume = parseFloat(volume);
    this.msg.rate = parseFloat(rate);
    this.msg.pitch = parseFloat(pitch);

    // If a voice has been selected, find the voice and set the
    // utterance instance's voice attribute.
    if (voiceName) {
      this.msg.voice = this.voices.filter(function(voice) { return voice.name === voiceName; })[0];
    }

    this.msg.onend = function(event) {
      // Custom event to notify that the speech has ended.
      const speechEndedEvent = new Event('speechEnded');
      window.dispatchEvent(speechEndedEvent);
      console.log('Finished in ' + event.elapsedTime + ' seconds.')
    }

    // Queue this utterance.
    window.speechSynthesis.speak(this.msg);
  }
}
