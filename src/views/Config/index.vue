<template>
	<div class="index_main">
		<div class="main_btn_left">
			<el-button class="main_del_right" icon="el-icon-back" @click="$router.go(-1)">返回</el-button>
			<div class="index_main_title">其他设置</div>
		</div>
		<div class="unline"></div>

		<!-- 内容 -->
		<div class="main_content">

			<el-tabs v-model="activeName" tab-position="left" >
			    <el-tab-pane label="微信配置" name="wechat">
			    	<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">APP_ID</div></el-col>
						<el-col :span="10"><el-input v-model="wechat_app_id" size="small" placeholder="请输入内容"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">APP_SECRET</div></el-col>
						<el-col :span="10"><el-input v-model="wechat_app_secret" size="small" placeholder="请输入内容"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">Token</div></el-col>
						<el-col :span="10"><el-input v-model="wechat_token" size="small" placeholder="请输入内容"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">商户ID</div></el-col>
						<el-col :span="10"><el-input v-model="wechat_mch_id" size="small" placeholder="请输入内容"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">API 密钥</div></el-col>
						<el-col :span="10"><el-input v-model="wechat_app_key" size="small" placeholder="请输入内容"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

			    </el-tab-pane>
			    <el-tab-pane label="支付宝配置" name="alipay"></el-tab-pane>
			    <el-tab-pane label="阿里Oss" name="alioss"></el-tab-pane>
			    <el-tab-pane label="阿里Sms" name="alisms"></el-tab-pane>
			    <el-tab-pane label="七牛Oss" name="qiniuoss"></el-tab-pane>
			</el-tabs>
			<!-- <el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">上传设置：</div></el-col>
				<el-col :span="10" style="margin-top:6px;">
					<el-radio v-model="radio" label="1">本地</el-radio>
  					<el-radio v-model="radio" label="2">阿里云OSS</el-radio>
  					<el-radio v-model="radio" label="3">七牛云</el-radio>
				</el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">注册设置：</div></el-col>
				<el-col :span="10" style="margin-top:6px;">
					<el-radio v-model="radio2" label="1">邮箱</el-radio>
  					<el-radio v-model="radio2" label="2">手机</el-radio>
				</el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div> -->

			<el-row :gutter="20">
				<el-col :span="3">&nbsp;</el-col>
				<el-col :span="4"><el-button type="primary" @click="submit">提 交</el-button></el-col>
				<el-col :span="17"><div class="input_notice"></div></el-col>
			</el-row>

		</div>

		
	</div>
</template>

<script>
	export default {
	    data() {
	      return {
	      	activeName:'wechat',
	      	wechat_app_id:'',
	      	wechat_app_secret:'',
	      	wechat_mch_id:'',
	      	wechat_app_key:'',
	      	data:null,
	      };
	    },
	    methods: {
	      submit:function(){
	      	var _this = this;
	      	this.$post(this.ROOT_URL + 'Admin/setting/index',{web_name:this.web_name,keywords:this.keywords,description:this.description,phone:this.phone,icp:this.icp,logo:this.logo}).then(function(res){
	      		_this.$message({
		          message: '恭喜你，修改成功！',
		          type: 'success'
		        });
		        _this.$router.go(0);
	      	});
	      },
	      
	      getToken:function(){
	      	return localStorage.getItem('token');
	      }
	    },
	    created:function(){
	    	var _this = this;
	    	this.$post(this.ROOT_URL + "Admin/config/getConfig").then(function(res){
	    		// _this.data = res.data;
	    		_this.wechat_app_id = res.data.app_id.val;
	    		_this.wechat_app_secret = res.data.app_secret.val;
	    		_this.wechat_mch_id = res.data.mch_id.val;
	    		_this.wechat_app_key = res.data.app_key.val;
	    		_this.wechat_token = res.data.token.val;
	    		
	    	});
	    }
	  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>