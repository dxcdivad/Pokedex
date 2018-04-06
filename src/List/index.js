import { connect } from 'react-redux';
import List from './List';


function mapStoreToProps(store) {
  return{
  data: store.list.data,
  image: store.list.image
  }
}

export default connect(mapStoreToProps)(List);