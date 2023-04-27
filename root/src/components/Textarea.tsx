import { ChangeEvent } from 'react';

interface TextareaProps {
  messageRef?: React.RefObject<HTMLTextAreaElement>;
  onMessageChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({ messageRef, onMessageChange }: TextareaProps) => {
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
        ref={messageRef}
        onChange={onMessageChange}
      ></textarea>
    </div>
  );
};

export default Textarea;
