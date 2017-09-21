import React from 'react';

export default class TitleBar extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: React.PropTypes.string
};

TitleBar.defaultProps = {
  title: 'Default Title'
};
