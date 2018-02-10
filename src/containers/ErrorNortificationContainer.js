import { connect } from 'react-redux';

import ErrorNotification from '../components/ErrorNotification';
import { handleError } from '../actions';

function mapStateToProps(state) {
    return {
        isError: state.isError
    }
}

function mapDispatchToProps(dispatch) {
    return {
        closeNotification: () => dispatch(handleError())
    }
}

const ErrorNotificationContainer = connect(mapStateToProps, mapDispatchToProps)(ErrorNotification);

export default ErrorNotificationContainer