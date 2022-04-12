import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../../Store/Customer/CustomerAction";

const Customers = props => {
    const dispatch = useDispatch()
    const customers = useSelector((state) => state.customers)
    const {loading, details, error} = customers
    

    useEffect(() => dispatch(getCustomers()), [dispatch])
    console.log(customers.getCustomers)
    return (
        <React.Fragment>
            <h2>Customers will be here</h2>
        </React.Fragment>
    );
};
export default Customers;