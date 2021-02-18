import React from 'react';

export default class Dropdown extends React.Component {
  render() {
    return (
      <>
        <select
          currentValue={this.props.value}
          onChange={this.props.handleChange}
        >
          {this.props.options.map((dropList) => (
            <option value={dropList}>{dropList}</option>
          ))}
        </select>
      </>
    );
  }
}
