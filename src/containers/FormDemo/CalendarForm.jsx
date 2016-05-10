import React from 'react'
import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

function getListData(value) {
  let listData;
  switch (value.getDayOfMonth()) {
    case 8:
      listData = [
        { type: 'warn', content: '这里是警告事项.' },
        { type: 'normal', content: '这里是普通事项.' }
      ]; break;
    case 10:
      listData = [
        { type: 'warn', content: '这里是警告事项.' },
        { type: 'normal', content: '这里是普通事项.' },
        { type: 'error', content: '这里是错误事项.' }
      ]; break;
    case 15:
      listData = [
        { type: 'warn', content: '这里是警告事项.' },
        { type: 'normal', content: '这里是普通事项好长啊。。....' },
        { type: 'error', content: '这里是错误事项.' },
        { type: 'error', content: '这里是错误事项.' },
        { type: 'error', content: '这里是错误事项.' },
        { type: 'error', content: '这里是错误事项.' }
      ]; break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  let listData = getListData(value);
  
  return (
    <ul className="events" >
      {
        listData.map(function(item, index){
          return ( <li key={index}  >
            <span className={`event-${item.type}`}>●</span>
            {item.content}
          </li>);
        })
      }
    </ul>
  );
}


function getMonthData(value) {
  if (value.getMonth() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  let num = getMonthData(value);
  return num ? <div className="notes-month">
    <section>{num}</section>
    <span>待办事项数</span>
  </div> : null;
}

const CalendarForm = React.createClass({
	render(){
		return (
			 <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender}  onPanelChange={onPanelChange} />
		)
	}
});

export default CalendarForm
