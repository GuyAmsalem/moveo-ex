import { MsgPreview } from "./MsgPreview";

export function MsgList({ msgs }) {
  return msgs.map((msg, idx) => {
    return <MsgPreview key={idx} msg={msg} />;
  });
}
