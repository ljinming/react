import React from 'react';
import {Modal} from 'antd'
class StaffDetail extends React.Component{
    state={visible:false}
    showModal = () => {
        this.setState({
          visible: true,
        });
      }
      handleOk = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
      handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
renter(){
    return(
        <div>
            <Modal 
            title='点击完成保存修改,点击关闭放弃未保存修改并退出.'
            visible={this.state.viaible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}>
           <p>Some contents...</p>
           <p>Some contents...</p>
           <p>Some contents...</p>
        </Modal>
        </div>
    )
}
}
export default StaffDetail;