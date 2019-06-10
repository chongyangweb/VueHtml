<template>
	<div class="index_main">
		<div class="main_btn_left">
			<el-button class="main_del_right" icon="el-icon-back" @click="$router.go(-1)">返回</el-button>
			<div class="index_main_title">科目添加</div>
		</div>
		<div class="unline"></div>

		<!-- 内容 -->
		<div class="main_content">

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">科目名</div></el-col>
				<el-col :span="10"><el-input size="small" v-model="name" placeholder="如：生物"></el-input></el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

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
	      	name:'',
	      	parent:null,
	        grade_id:"0",
	      };
	    },
	    methods: {
	      submit:function(){
	      	var _this = this;
	      	this.$post(this.ROOT_URL + 'Admin/teacher_subject/add',{name:this.name}).then(function(res){
	      		_this.$message({
		          message: '恭喜你，添加成功！',
		          type: 'success'
		        });
		        _this.$router.go(-1);
	      	});
	      }
	    },
	    created:function(){
	    	var _this = this;
	    	// _this.$get(_this.ROOT_URL + "Admin/teacher_subject/add").then(function(res){
	    	// 	_this.parent = res.parent;
	    	// });
	    }
	  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-select-dropdown__wrap{margin-bottom: 0px;}
.el-select-dropdown{padding-bottom: 15px;}
</style>