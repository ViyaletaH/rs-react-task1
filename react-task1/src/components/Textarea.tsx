function Textarea() {
  return (
    <div className="textarea">
      <label htmlFor="message">Your message</label>
      <textarea
        className="message-form"
        name="message"
        rows={10}
        cols={30}
        maxLength={250}
        placeholder=" Enter a message (250 letters max)"
      ></textarea>
    </div>
  );
}

export default Textarea;
