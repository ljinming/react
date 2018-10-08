import React from 'react';
import StaffItem from './StaffItem'
//该组件展示由父组件传入的各个人员条目
class StaffItemPanel extends React.Component{
    render(){
        let items=[];
        if(this.props.items.length===0){
            items.push(<tr><th style={{background:'gray'}}>暂无用户</th></tr>)
        }else{
            // 遍历父组件ManageSystem中的items
            this.props.items.forEach(item => {
                console.log(item)
                items.push(<StaffItem key={items.key} item={item} />)
            });
        }
        return(
            <table>
                <thead  className='item'>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>身份</th>
                    <th>性别</th>
                    <th style={{width:80}}>操作</th>
                </thead>
                <tbody>{items}</tbody>
            </table>
        )
    }
};
export default StaffItemPanel;