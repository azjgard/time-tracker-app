import React from 'react';
import { DragSource } from 'react-dnd';

const ItemTypes = {
  TASK: 'task'
}

const taskSource = {
  beginDrag(props) {
    // const task = { id: props.id };
    // return task;
    console.log('dragging..');
    return {}
  },

  endDrag(props, monitor, component) {
    // if (!monitor.didDrop()) {
    //   return;
    // }

    // const task = monitor.getItem();
    // const dropResult = monitor.getDropResult();
    console.log('done dragging..');
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class TaskComponent extends React.Component {
  render() {
    return this.props.connectDragSource(
      <li>{this.props.name} -- {this.props.isDragging ? 'dragging' : 'NOT dragging'}</li>
    )
  }
}

export default DragSource(ItemTypes.TASK, taskSource, collect)(TaskComponent);


