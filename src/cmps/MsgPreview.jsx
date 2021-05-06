export function MsgPreview({ msg }) {
  return (
    <li className="msg-preview">
      <h2>{msg.email}</h2>
      <p>{msg.text}</p>
    </li>
  );
}
