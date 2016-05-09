import React from 'react'
import { connect } from 'react-redux'
import { filterTable } from '../actions';
import ProductTable from '../components/ProductTable';

const FilterableTable = ({ filter, onFilter }) => {
    let input;

    return (
        <div>
            <input 
                ref={node => input = node} 
                onChange={() => onFilter(input.value)} />

            <ProductTable filter={filter} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilter: filterText => dispatch(filterTable(filterText)) 
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterableTable);
