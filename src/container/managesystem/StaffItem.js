import React from 'react';
import '../themes/ManageSystem.css'
import StaffDetail from './StaffDetail'
//StaffItem 是每个人员具体信息，用于人员的详情及删除操作。该组件在StaffItemPanel中被引用。
class StaffItem  extends React.Component{
    handlerDetail=()=>{
        <StaffDetail />
    }
    render(){
        return(
            <tr style={{'cursor': 'pointer'}} className='item'>
            {/* 从父组件ManageSystem拿到item */}
                <td>{this.props.item.info.name}</td>
                <td>{this.props.item.info.age}</td>
                <td>{this.props.item.info.id}</td>
                <td>{this.props.item.info.sex}</td>
                <td >
                    <a style={{marginRight:10}} >删除</a>
                    <a onClick={this.handlerDetail}> 详情</a>
                </td>
            </tr>
        )
    }
}
export default StaffItem;