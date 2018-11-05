import React, {Component} from 'react';
import {
    Text,
    ScrollView,
    Image,
    View
    } from 'react-native';

import MineMenuItem from '../components/MineMenuItem';
import LineHorizontal from '../components/LineHorizontal';
import MineJobInfoContent from '../components/MineJobInfoContent';

import MineStyle from './../../styles/Mine';

class Mine extends React.Component{
    render(){
        return(
            <View style={MineStyle.container}>
                {/* titlebar */}
                <View style={MineStyle.titlebar}>
                    <Image source={
                        require('../../images/mine/ic_action_pc.png')
                        }
                        resizeMode='center'
                        style={MineStyle.titlebarImg}
                    />
                    <Image source={
                        require('../../images/mine/ic_general_settings.png')
                        }
                    resizeMode='center'
                    style={MineStyle.titlebarImg}
                    />
                </View>
                {/* scrollView */}
                <ScrollView style={MineStyle.scrollView}>
                    {/* 头部 */}
                    <View style={MineStyle.header}>
                       <View style={MineStyle.headerContainer}>
                            <Text style={MineStyle.headerName}>姓名</Text>
                            <View style={MineStyle.headerUserIndex}>
                                <Text style={MineStyle.headerUserIndexTxt}>我的个人主页</Text>
                                <Image source={
                                    require('../../images/arrow/ic_arrow_white.png')
                                }
                                resizeMode='center'
                                style={MineStyle.headerUserIndexImg}/>
                            </View>
                       </View>

                       <Image source={
                           require('../../images/avatar/avatar_14.png')
                        }
                          
                            style={MineStyle.headerUserAvatar}/>
                    </View>
                    {/* 用户信息*/}
                    <View style={MineStyle.jobInfoBar}>
                        <MineJobInfoContent 
                            num="0"
                            content="沟通过"
                        />
                        <Image source={
                                require('../../images/common/ic_dot_section_divider.png')}
                            style={MineStyle.jobInfoDivider}
                        />

                        <MineJobInfoContent 
                            num="0"
                            content="面试"
                        />
                        <Image source={
                                require('../../images/common/ic_dot_section_divider.png')}
                            style={MineStyle.jobInfoDivider}
                        />
                        <MineJobInfoContent 
                            num="0"
                            content="已投递"
                        />
                        <Image source={
                                require('../../images/common/ic_dot_section_divider.png')}
                            style={MineStyle.jobInfoDivider}
                        />
                        <MineJobInfoContent 
                            num="0"
                            content="感兴趣"
                        />
                    </View>
                    <View style={[MineStyle.bottomLine,{marginBottom:16}]}/>

                    {/* 工具 */}
                    <View style={MineStyle.toolBar}>
                        <View style={MineStyle.toolBarContainer}>
                                <Text style={MineStyle.toolBarTitle}>求职助手</Text>
                                <Text style={MineStyle.toolBarContent}>多种道具助你提升求职成功率</Text>
                            </View>
                            <Text style={MineStyle.toolBarHint}>荐</Text>
                            <Image source={
                            require('../../images/arrow/ic_arrow_gray.png')
                            }
                            resizeMode='center'
                            style={MineStyle.toolBarImg}
                        />
                    </View>

                    {/* 菜单 */}
                    <View style={MineStyle.menuContainer}>
                        <MineMenuItem 
                            title="我的微简历"
                        />
                        <LineHorizontal style={MineStyle.menuBottomLine}/>    
                        <MineMenuItem 
                            title="简历附件"
                            content="已上传1份"
                        /> 
                        <LineHorizontal style={MineStyle.menuBottomLine}/>    
                        <MineMenuItem 
                            title="管理求证意向"
                        /> 
                        <LineHorizontal style={MineStyle.menuBottomLine}/>    
                        <MineMenuItem 
                            title="牛人问答"
                        />    
                    </View>

                </ScrollView>
            </View>
        );
    }
}

export default Mine;