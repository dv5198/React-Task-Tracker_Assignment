import React, { Component } from "react";
import { connect } from "react-redux";

class Tasks extends Component {
  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    const loader = () => {
      if (this.props.tasks) {
        return this.props.tasks.map((task, i) => <li key={i}>{task}</li>);
      } else {
        return <p>Loading...</p>;
      }
    };
    return (
      <div>
        <h2>Tasks</h2>
        <ul>{loader()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(mapStateToProps)(Tasks);
