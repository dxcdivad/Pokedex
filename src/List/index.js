import { connect } from 'react-redux';
import List from './List';

function mapStateToProps(store) {
  return {
    data: store.list.data
  }
}

export default connect(mapStateToProps)(List);