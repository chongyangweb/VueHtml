<template>
	<div class="index_main">
		<div class="main_btn_left">
			<el-button class="main_del_right" icon="el-icon-back" @click="$router.go(-1)">返回</el-button>
			<div class="index_main_title">题目编辑</div>
		</div>
		<div class="unline"></div>

		<!-- 内容 -->
		<div class="main_content">
			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">标题</div></el-col>
				<el-col :span="10"><el-input size="small" v-model="title" placeholder="请输入内容"></el-input></el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">年级</div></el-col>
				<el-col :span="10">
					<el-select v-model="grade_id" size="small" placeholder="请选择">
						<el-option value="0" label="其他"></el-option>
						<el-option v-for="v in parent" :value="v.id" :label="v.name"></el-option>
					</el-select>
				 </el-col>
				 <el-col :span="11"><div class="input_notice"></div></el-col>
			 </el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">科目</div></el-col>
				<el-col :span="10">
					<el-select v-model="subject_id" size="small" placeholder="请选择">
						<el-option value="0" label="其他"></el-option>
						<el-option v-for="v in parent2" :value="v.id" :label="v.name"></el-option>
					</el-select>
				 </el-col>
				 <el-col :span="11"><div class="input_notice"></div></el-col>
			 </el-row>
			<div class="unline2"></div>

			<!-- <el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">图片材料</div></el-col>
				<el-col :span="10">
				<el-upload
				  class="upload-demo"
				  :action="ROOT_URL + 'Admin/article/thumb?token=' + getToken()"
				  :on-remove="handleRemove"
				  :file-list="fileList2"
				  :on-success="onSuccess"
				  limit:1
				  list-type="picture">
				  <el-button size="small" type="primary">点击上传</el-button>
				  <div slot="tip" class="el-upload__tip">只能上传jpg/png/gif文件，且不超过500kb</div>
				</el-upload>
				</el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div> -->

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">类型</div></el-col>
				<el-col :span="10"><el-radio-group v-model="radio" :change="type_change()" >
				    <el-radio :label="0">选择题</el-radio>
				    <el-radio :label="1" disabled>填空题</el-radio>
				    <el-radio :label="2" disabled>其他</el-radio>
				</el-radio-group></el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">选择材料</div></el-col>
				<el-col :span="3">
					<el-button type="success" @click="open_dialog()">选择材料</el-button>
				</el-col>
				<el-col :span="18"><div class="input_notice">{{material_title}}</div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">添加选项</div></el-col>
				<el-col :span="10">
					<el-button type="success" @click="dialogFormVisible = true">添加选项</el-button>
				</el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20" v-show="radio==0">
				<el-col :span="3"><div class="input_lable">答案</div></el-col>
				<el-col :span="18">
					<el-table
					    :data="tableData"
					    border
					    style="width: 100%">
					    <el-table-column
					      label="选项"
					      >
					      <template slot-scope="scope">
					      	<div v-show="scope.row.title != '' ">
					      		{{scope.row.title}}
					      	</div>
					      	<div v-show="scope.row.title == '' ">
					      		<img :src="scope.row.image" alt="" width="50px" height="50px">
					      	</div>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="答案"
					      width="180">
					      <template slot-scope="scope">
					      	<div v-show="scope.row.is_answer==1" @click="close_answer(scope.$index)">
					      		<el-tag type="success" effect="dark" >√ 正确答案</el-tag>
					      	</div>
					      	<div v-show="scope.row.is_answer==0" @click="close_answer(scope.$index)">
					      		<el-tag type="danger" effect="dark">选项</el-tag>
					      	</div>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="操作"
					      width="180">
					      <template slot-scope="scope">
					      	<div @click="del_answer(scope.$index)">
					      		删除
					      	</div>
					      </template>
					    </el-table-column>
					  </el-table>
				</el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20" v-show="radio==1">
				<el-col :span="3"><div class="input_lable">内容</div></el-col>
				<el-col :span="18">
				<div id="editor">
			    </div><textarea v-model="content" style="display:none;"></textarea></el-col>
				<el-col :span="13"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3">&nbsp;</el-col>
				<el-col :span="4"><el-button type="primary" @click="submit">提 交</el-button></el-col>
				<el-col :span="17"><div class="input_notice"></div></el-col>
			</el-row>
			
		</div>

		<!-- 嵌套表单 -->
		<el-dialog title="选项" :visible.sync="dialogFormVisible">
	      <div>

	      	<el-radio-group v-model="radio2" :change="type_change()" >
			    <el-radio :label="0">文字</el-radio>
			    <el-radio :label="1">图片</el-radio>
			</el-radio-group>
			<div class="unline2"></div>
	      	<el-input
			  type="textarea"
			  :rows="2"
			  placeholder="请输入内容"
			  v-model="textarea" v-show="radio2==0">
			 </el-input>

			 <el-upload
			  v-show="radio2==1"
			  class="upload-demo"
			  :action="ROOT_URL + 'Admin/article/thumb?token=' + getToken()"
			  :on-remove="handleRemove"
			  :file-list="fileList3"
			  :on-success="onSuccess2"
			  limit:1
			  list-type="picture">
			  <el-button size="small" type="primary">点击上传</el-button>
			  <div slot="tip" class="el-upload__tip">只能上传jpg/png/gif文件，且不超过500kb</div>
			</el-upload>
			<div class="unline2"></div>
			<el-switch
			  v-model="is_answer"
			  active-text="设置为答案"
			  active-color="#13ce66"
			  inactive-color="#999">
			</el-switch>
			<div class="unline2"></div>
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="add_answer()">确 定</el-button>
		  </div>
		</el-dialog>

		<!-- 材料 -->
		<el-dialog title="材料列表" :visible.sync="dialogTableVisible2">
		  <el-table :data="gridData">
		    <el-table-column property="id" label="ID" width="150"></el-table-column>
		    <el-table-column property="title" label="标题" width="200"></el-table-column>
		    <el-table-column
		      align="right" >
		      <template slot="header" slot-scope="scope">
		        <el-input
		          v-model="search"
		          @change="search_change"
		          size="mini"
		          placeholder="输入关键字搜索"/>
		      </template>
		      <template slot-scope="scope">
		        <el-button
		          size="mini"
		          type="primary"
		          @click="handleChose(scope.$index, scope.row)">选择</el-button>
		      </template>
		    </el-table-column>
		  </el-table>
		</el-dialog>
			
		</div>
		
	</div>
</template>

<script>
	export default {
	    data() {
	      return {
	      	title:'',
	      	content:'',
	      	content2:'',
	      	images:'',
	      	image:'',
	      	parent:null,
	      	parent1:null,
	      	parent2:null,
	      	grade_id:'0',
	      	subject_id:'0',
	      	material_id:'0',
	        fileList2: [],
	        fileList3: [],
	        radio:0,
	        tableData:[],
	        dialogFormVisible:false,
	        dialogTableVisible2:false,
	        textarea:'',
	        radio2:0,
	        is_answer:false,
	        search:'',
	        gridData:[],
	        material_id:0,
	        material_title:'无材料',
	      };
	    },
	    methods: {
	      submit:function(){
	      	var _this = this;
	      	this.$post(this.ROOT_URL + 'Admin/teacher_question/edit/' + this.$route.params.id ,{title:this.title,answer:this.tableData,grade_id:this.grade_id,subject_id:this.subject_id,is_type:this.radio}).then(function(res){
	      		_this.$message({
		          message: '恭喜你，修改成功！',
		          type: 'success'
		        });
		        _this.$router.go(-1);
	      	});
	      },
	      handleRemove(file, fileList) {
	        console.log(file, fileList);
	      },
	      onSuccess:function(e){
	      	this.thumb = e.thumb_path;
	      },
	      onSuccess2:function(e){
	      	console.log(e);
	      	this.image = e.thumb_path;
	      },
	      checked:function(id){
	      	for(var i=0;i<this.perssion.length;i++){
	      		if(this.perssion[i] == id){
	      			return true;
	      		}
	      	}
	      },
	      getToken:function(){
	      	return localStorage.getItem('token');
	      },
	      type_change:function(){
	      	
	      },
	      add_answer:function(){
	      	var title = '';
	      	var is_answer = '0';
	      	var image = '';
	      	if(this.radio2 == 0){
	      		title = this.textarea;
	      		image = '';
	      	}else if(this.radio2==1){
	      		title = '';
	      		image = this.image;
	      	}
	      	is_answer = this.is_answer?'1':'0';
	      	if(title == '' && image==''){
	      		this.$message.error('请填好选项！');
	      		return;
	      	}
	      	this.tableData.push({title:title,is_answer:is_answer,image:image});
	      },
	      close_answer:function(e){
	      	console.log(this.tableData[e]);
	      	this.tableData[e].is_answer = this.tableData[e].is_answer=='0'?'1':'0'; 
	      },
	      del_answer:function(e){
	      	this.tableData.splice(e,1);
	      },
	      get_material:function(){
	      	
	      	var _this = this;
	      	this.$post(_this.ROOT_URL + "Admin/teacher_material/bind_question",{search:this.search}).then(function(res){
	      		_this.dialogTableVisible2 = true;
	      		_this.gridData = res.data;
	      		// console.log(res.data);
	      	});
	      	
	      },
	      handleChose:function(a,b){
	      	// console.log(a,b);
	      	this.material_id = b.id;
	      	this.material_title = b.title;
	      	this.dialogTableVisible2 = false;
	      },
	      open_dialog:function(){
	      	this.get_material();
	      },
	      search_change:function(e){
	      	// console.log(e);
	      	this.search = e;
	      	this.get_material();
	      },
	    },
	    created:function(){
	    	
	    },
	    mounted:function(){

	    	var E = require('wangeditor')  // 使用 npm 安装
	    	E = new E('#editor')
	    	var _this = this;
		    E.customConfig.onchange = function (html) {
            	_this.content = html;
        	}
        	E.customConfig.uploadImgServer = this.ROOT_URL + 'Admin/Auto/content_upload?token=' + this.getToken();
        	E.customConfig.uploadFileName = 'file';
        	E.customConfig.uploadImgMaxSize = 3 * 1024 * 1024;
		    E.create();
		    

	    	var _this = this;
	    	this.$get(this.ROOT_URL + "Admin/teacher_question/edit/"+this.$route.params.id).then(function(res){
	    		_this.parent = res.grade;
	    		_this.parent2 = res.subject;
	    		_this.title = res.info.title;
	    		_this.is_type = res.info.radio;
	    		if(res.info.material_id != 0){
	    			_this.material_id = res.info.material_id;
	    			_this.material_title = res.material.title;
	    		}
	    		

	    		_this.tableData = res.answer;
	    		if(res.info.subject_id != 0){
	    			_this.subject_id = res.info.subject_id;
	    		}
	    		if(res.info.grade_id != 0){
	    			_this.grade_id = res.info.grade_id;
	    		}
	    		
	    		_this.fileList2.push({name:'',url:res.info.thumb});
	    		_this.parent = res.columns;
	    		E.txt.html(_this.content);
	    		
	    	});

	    	
		
	    },
	  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-select-dropdown__wrap{margin-bottom: 0px;}
.el-select-dropdown{padding-bottom: 15px;}
</style>