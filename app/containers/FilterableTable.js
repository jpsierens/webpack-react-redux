import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { filterTable } from '../actions';
import ProductTable from '../components/ProductTable';

const FilterableTable = ({ filter, onFilter }) => {
    let input;

    return (
        <div className="filterable-table">
            <input
                value={filter}
                ref={node => {input = node;}}
                onChange={() => onFilter(input.value)} />

            <ProductTable filter={filter} />
        </div>
    );
};

FilterableTable.propTypes = {
    filter: PropTypes.string,
    onFilter: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilter: filterText => dispatch(filterTable(filterText))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterableTable);
