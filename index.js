import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import Approve from "./Approve";

const App = () => {
  return (
    <div className="ui container comments">
      <Approve>
        <div>
          <h4>Warning !!</h4>
          Are You sure want to do this?
        </div>
      </Approve>

      <Approve>
        <CommentDetail
          author="Hasan"
          timeago="Today At 6:00PM"
          blogs="Nice Post"
          avatar={faker.image.avatar()}
        />
      </Approve>

      <Approve>
        <CommentDetail
          author="Danyal"
          timeago="Today At 9:00PM"
          blogs="Nice Pic Deer"
          avatar={faker.image.avatar()}
        />
      </Approve>

      <Approve>
        <CommentDetail
          author="Affan"
          timeago="Today At 12:00PM"
          blogs="Hy There!"
          avatar={faker.image.avatar()}
        />
      </Approve>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
