import { useState, useEffect } from "react";
import { MsgFilter } from "../cmps/MsgFilter";
import { MsgList } from "../cmps/MsgList";
import { msgService } from "../services/msg.service";

export function MainApp(props) {
  const [msgs, setMsgs] = useState([]);
  const [filterBy, setFilterBy] = useState("");
  useEffect(() => {
    loadMsgs();
  }, [filterBy]);

  async function loadMsgs() {
    const msgs = await msgService.query(filterBy);
    setMsgs(msgs);
  }

  return (
    <div className="main-app center-flex">
      <MsgFilter setFilterBy={setFilterBy} filterBy={filterBy} />
      <div className="list-container">
        <MsgList msgs={msgs} />
      </div>
    </div>
  );
}
