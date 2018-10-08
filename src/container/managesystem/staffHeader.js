import React from 'react';
import '../themes/ManageSystem.css'
 //头部搜索
 class StaffHeader extends React.Component{
   render(){
       return(
           <div className='header'>
            <h3 style={{textAlign:'center'}}>人员管理系统</h3>
            <table className='header-seach'>
                <tbody >
                    <tr>
                    <td className='header-seach-op'><input  type='text' placeholder='Serach...'/></td>
                    <td className='header-seach-op'>
                        <lable>人员筛选</lable>
                            <select>
                                <option>全部</option>
                                <option>主任</option>
                                <option>老师</option>
                                <option>学生</option>
                                <option>实习</option>
                            </select>
                    </td>
                    <td className='header-seach-op'>
                        <lable>排列方式</lable>
                            <select>
                                <option>身份</option>
                                <option>年龄升</option>
                                <option>年龄降</option>
                            </select>
                    </td>
                    </tr>
                </tbody>
            </table>
           </div>
       )
   }
 }
 export default StaffHeader;