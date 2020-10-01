import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-edux";

class UserList extends React.Component {
  createListItems() {
    return this.props.users.map(user => {
      return <li>{user.first}</li>;
    });
  }
  render() {
    return <ul>{this.createListItems()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(UserList);
