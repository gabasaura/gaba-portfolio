import { Component } from 'react';
import PropTypes from 'prop-types';

class GridLayout extends Component {
    render() {
        const { color } = this.props;
        return (
            <div>
                Card - {color}
            </div>
        );
    }
}

GridLayout.propTypes = {
    color: PropTypes.string.isRequired,
};

export default GridLayout