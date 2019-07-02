import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        time="Today at 4:45PM"
        content="asdasasdasdasdd"
      />
      <CommentDetail
        author="Alex"
        time="Today at 7:33PM"
        content="123adasdadsasdasdsads"
      />
      <CommentDetail
        author="Jane"
        time="Today at 6:12PM"
        content="fdhgtrhnndfgb"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
