
        ///////////////导航条
        Vue.component('headshot', {
            data: function () {
                return {
                    title: '易学聘',
                    study: '让学习成为习惯',
                    name: '罗密欧'
                }
            },
            template: `<header>
                        <nav>
                        <div class="logo"><img src="./img/logo.png"><span class="header_title">{{ title }}</span><span>{{study}}</span></div>
                        <div class="user">
                        <img src="./img/head-1.png"><span>{{name}}</span><span class="ico">></span>
                        </div>
                        </nav>
                        <navigation></navigation>
                        </header>
                       
                        `
        })
        ///////页面头部
        Vue.component('navigation', {
            data: function () {
                return {
                    information: '基本信息',
                    course: '课程管理',
                    answer: '我的问答',
                    add: '+ 添加课程'
                }
            },
            template: `<div class="package">
                         <div class="nav_top">
                        <a class="caption"  href="./index.html">My Center</a>
                        <div class="tab"><a class="home" href="./information-warp.html">{{ information }}</a><a href="javascript:;">{{ course }}</a><a href="javascript:;">{{ answer }}</a></div>
                        <div class="add_btn"><a href="javascript:;">{{ add }}</a></div>
                          </div>
                        </div>`
        })
        /////编辑页面
        Vue.component('information-warp', {
            data: function () {
                return {
                }
            },
            template: `
                        <section class="basic_warp">
                           <div class="personal" >
                              <compile></compile>
                          
                              <preserve></preserve>
                                </div>
                              
                           </div>
                        </section>
                   `
        })

        ///////////左边区域
        Vue.component('compile', {
            data: function () {
                return {
                }
            },
            template: `
                         <div class="redact">
                            <img src="./img/head.png">
                            <div class="box">
                                <div class="user"><i class="fa fa-user-o"></i><span>我的信息</span></div>
                                <div class="approve"><img src="./img/ico.png"><span>认证信息</span></div>
                                <div><i class="fa fa-cog"></i><span>密码管理</span></div>
                            </div>
                         </div>
                   `
        })


        ////////右边表单不可编辑区域
        Vue.component('preserve', {
            data: function () {
                return {
                    cur:0
                }
            },
            template: `<div>
                    <section class="muns"v-show="cur==0">
                        <div class="users_name">
                         <div><span class="muns_left">&nbsp;姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名:</span><span class="muns_right">{{names}}</span></div>
                         <div class="muns_ico"v-on:click="cur=1" :class="{active:cur==1}"><i class="fa fa-edit"></i><span>编辑</span></div>
                        </div>
                        <div class="year">
                            <span class="muns_left">出生日期:</span><span class="muns_right">{{yearss}}</span>
		                </div>
                        <div class="sex">
                            <span class="muns_left">&nbsp;性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别:</span><span class="muns_right">{{sexs}}</span>
                        </div>
                        <div class="phone">
                            <span class="muns_left">联系电话:</span><span class="muns_right">{{phones}}</span>
		                </div>
                        <div class="mail">
                            <span class="muns_left">邮箱地址:</span><span class="muns_right">{{mails}}</span>
                        </div>
                        <div class="identity">
                            <span class="muns_left">&nbsp;身&nbsp;份&nbsp;证:</span><span class="muns_right">{{numb}}</span>
		                </div>
                        <div class="wechat">
                            <span class="muns_left">&nbsp;微&nbsp;信&nbsp;号:</span><span class="muns_right">{{vx}}</span>
		                </div>
                        <div class="tencents">
                            <span class="muns_left">&nbsp;Q&nbsp;Q&nbsp;&nbsp;号:</span><span class="muns_right">{{tenc}}</span>
		                </div>
                       
                    </section>
                    <form   v-show="cur==1">
                        <div class="users_name">
                            <label for="usersname">&nbsp;姓&nbsp;&nbsp;&nbsp;名：</label>
			                <input  v-model="names" type="text"  required="required" name="username" id="username" value=""  placeholder="请输入姓名"/>
                        </div>
                        <div class="year">
                            <label for="years">出生日期:</label>		
			                <input  v-model="yearss" type="text" required="required"name="years" id="years" value=""  readonly="readonly" placeholder="本项目不可输入填写完身份信息后自动同步出生日期" />
		                </div>
                        <div class="sex">
                            <span>&nbsp;性&nbsp;&nbsp;&nbsp;&nbsp;别:&nbsp;&nbsp;</span>
                            <select v-model="sexs">	
                                <option disabled value="">请选择</option>
                                <option>男</option>
                                <option>女</option>
                        
                            </select>
                        </div>
                        <div class="phone">
                            <label for="tel">联系电话:</label>		
			                <div>
                                <input v-model="phones" type="text"required="required" name="tel" id="tel" value="" />
                                <button class="save"value="">获取验证码</button>
                            </div>
		                </div>
                        <div class="mail">
                            <label for="email">邮箱地址:</label>
			                <input v-model="mails" type="text"required="required" name="email" id="email" value="" />
                        </div>
                        <div class="identity">
                            <label for="num">&nbsp;身&nbsp;份&nbsp;证:</label>		
			                <input v-model="numb"type="text"required="required" name="num" id="num" value="" />
		                </div>
                        <div class="wechat">
                            <label for="chat">&nbsp;微&nbsp;信&nbsp;号:</label>		
			                <input v-model="vx" type="text"required="required" name="chat" id="chat" value="" />
		                </div>
                        <div class="tencent">
                            <label for="number">&nbsp;Q&nbsp;Q&nbsp;&nbsp;号:</label>		
			                <input  v-model="tenc"type="text" required="required"name="number" id="number" value="" />
		                </div>
                        <div class="btn" >
                            <button class="save" type="button"value="" v-on:click="cur=0">保存信息</button> 
                   
                            <button class="cancel"  value="">取消修改</button>

                        </div>
                    </form>
                    </div>
                   `,
          
        })

        //个人信息
        Vue.component('cont-wrap', {
            data: function () {
                return {
                  
                }
            },
            template: `<main class="mycenter_warp">
                        <div class="content"> 
                             
                               <infor></infor>
                               <resume-box></resume-box>
                                
                        </div>
                        </main>`,

        })

        ////////个人信息左边
        Vue.component('infor', {
            data: function () {
                return {
                    name: '罗密欧',
                    text: '信息完整度',
                    highly: '高',
                    withdrawal: '申请提现',
                    sums: '账户余额',
                    nums: '248',
                    unit: '元',
                    names: '实名认证',
                    aptitude: '资质认证',
                    approve: '【未认证】'


                }
            },
            template: `<div class="information"> <div class="head_portrait">
                            <img src="./img/head-1.png">
                            <div class="head_right">
                                    <span>{{name}}</span>
                                    <img src="./img/head-ico.png">
                                    <div class="progress">
                                        <span>{{text}}</span>
                                        <div></div>
                                        <span class="text_bule">{{highly}}</span>
                                    </div>
                                    <div><i class="fa fa-mobile"></i><i class="fa fa-address-card-o"></i><i class="fa fa-envelope-o"></i></div>
                            </div>
                        </div> 
                        <div class="balance">
                            <div class="withdrawal"><a href="javascript:;">{{withdrawal}}</a></div>
                            <div class="sum">
                                    <span>{{sums}}</span></br><span class="digit">{{nums}}</span><span>{{unit}}</span>
                            </div>
                        </div>
                        <div class="certification">
                            <div class="left"><a href="javascript:;"><img src="./img/name.png"></a><span>{{names}}</span><span class="approve">{{approve}}</span></div>
                            <div class="right"><a href="javascript:;"><img src="./img/aptitude.png"></a><span>{{aptitude}}}}}}</span><span class="approve">{{approve}}</span></div>
                        </div> 
                    </div>
                            `
        })

        ////////个人信息右边

        Vue.component('resume-box', {
            data: function () {
                return {
                    number: '3',
                    Entries: '个',
                    view: '查看详情 >',
                    my: '我的问答',
                    stud: '最新学员',
                    news: '一周内新增20位学员',
                    pop: [
                        {
                            img: './img/head-2.png',
                            name: '杨志'

                        },
                        {
                            img: './img/head-3.png',
                            name: '杨静静'

                        },
                        {
                            img: './img/head-4.png',
                            name: '吕子秋'

                        },
                        {
                            img: './img/head-1.png',
                            name: '闫强'

                        },
                        {
                            img: './img/head-5.png',
                            name: '郭小宜'

                        },
                    ]
                }
            },
            template: ` <div class="resume">
                            <div class="question">
                                    <div class="left">
                                        <div><span class="number">{{ number }}</span> <span>{{ Entries }}</span></br>
                                        <span>{{view}}</span></div>
                                    </div>
                                    <div class="right">
                                        <div>   
                                        <p>{{my}}</p>
                                        <span class="number">{{ number }}</span> <span>{{ Entries }}</span></br>
                                        <span>{{view}}</span>
                                        </div>   
                                    </div>
                            </div>
                            <div class="students">
                                <div class="text">
                                    <p>{{stud}}</p><span>{{ news }}</span>
                                </div>
                                <div class="box">
                                        <ul class="stud_list">
                                    <li :key="index" v-for="(item, index) in pop">
                                            <img v-bind:src="item.img" alt=""></br>
                                        <span>{{item.name}}</span>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>`
        })
    
        ///////页脚
        Vue.component('page-footer', {
            data: function () {
                return {
                    title: '易学聘',
                    study: '让学习成为习惯',
                    name: '罗密欧'
                }
            },
            template: ` <footer>
                            <section>
                                <span>中国领先大学生成长平台 <i class="fa fa-copyright">2016</i> e学聘</span>
                            </br></br><span>ICP备16500007号|联系我们 exuepin@exuepin.comI 关于我们</span>
                            </section>
                        </footer>`
        })


        new Vue({
            el: '#app',
            data: function () {
                return {

                }
            }
        })
