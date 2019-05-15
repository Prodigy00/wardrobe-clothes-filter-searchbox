import React from "react";
export default class WardRobe extends React.Component {
  constructor(props) {
    super(props);
    this.attires = [
      "sweatshirt",
      "blue trousers",
      "chaps shirt",
      "Amani shirt"
    ];
  }

  render() {
    return (
      <div>
        <input onChange={e => console.log(e.target.value)} type="text" />
        <ul>
          {this.attires.map(attire => (
            <li>{attire}</li>
          ))}
        </ul>
      </div>
    );
  }
}
