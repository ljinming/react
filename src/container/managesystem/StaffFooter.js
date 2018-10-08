import React from 'react';
import { Modal,Button } from 'antd';
import '../themes/ManageSystem.css'
//人员新增
class StaffFooter extends React.Component{
    state={show:false}
    showModal = () => {
        console.log('000000000000000000')
        this.setState({
          show: true,
        });
      }
      handleOk = (e) => {
        this.setState({
            show: false,
        });
      }
    handleCancel = (e) => {
        this.setState({
            show: false,
        });
      }
    render(){
        return(
            <div style={{background:'blue'}}>
                <Button onClick={this.showModal}>人员新增</Button>
                <Modal
                style={{ background:'gray',margin:'auto'}}
                    width={600}
                    visible={this.state.show}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                   <form style={{textAlign:'right'}}>
                       <div className='form-label'>
                           <lable>姓名</lable>
                           <input  placeholder='your name'/>
                       </div>
                       <div className='form-label'>
                           <lable>年龄</lable>
                           <input  placeholder='your age'/>
                       </div>
                       <div className='form-label'>
                           <lable>性别</lable>
                           <input  placeholder='your sex'/>
                       </div>
                       <div className='form-label'>
                           <lable>身份</lable>
                            <select style={{width:'60%',}} >
                            <option value='主任'>主任</option>
                            <option value='老师'>老师</option>
                            <option value='学生'>学生</option>
                            <option value='实习'>实习</option>
                           </select>
                       </div>
                       <div className='form-label'>
                           <lable>描述</lable>
                           <textarea  style={{width:'60%',height:40}}></textarea>
                       </div>
                   </form>
                </Modal>
            </div>
        )

}
}
export default StaffFooter;