<template>
	<div class="index_main">
		<div class="main_btn_left">
			<!-- <router-link class="admin_fff_btn" :to="{name:'user_add'}"><el-button type="primary" icon="el-icon-plus" disabled>添加</el-button></router-link> -->

			<!-- <input class="index_search_input" type="text" placeholder="输入搜索内容"> -->
			<el-input  class="search_input" size="small" v-model="username" placeholder="请输入用户名"></el-input>
			<el-button icon="el-icon-search" @click="search" plain>搜索</el-button>

			<el-button class="main_del_right" icon="el-icon-delete" type="danger" @click="del">批量删除</el-button>
			<el-button class="main_del_right" icon="el-icon-message" type="primary" @click="get_paper">发布试卷</el-button>
		</div>
		<input type="hidden" v-model="ids" value="">
		<div class="unline"></div>

			<el-table ref="multipleTable" :data="lists" tooltip-effect="dark" size="medium" style="width: 100%" @selection-change="changeFun">‘

				<el-table-column type="selection" width="55"></el-table-column>

				<el-table-column label="#" width="120">
				<template slot-scope="scope">{{ scope.row.id }}</template>
				</el-table-column>

				<el-table-column label="头像" >
				<template slot-scope="scope"><img width="50px" height="50px" :src="scope.row.avatar"></template>
				</el-table-column>

				<el-table-column label="昵称" >
				<template slot-scope="scope">{{ scope.row.nickname }}</template>
				</el-table-column>
<!-- 
				<el-table-column label="加入时间">
				<template slot-scope="scope">{{ scope.row.add_time|formatDate}}</template>
				</el-table-column> -->

				<!-- <el-table-column label="操作">
				<template slot-scope="scope">
				<el-button plain>查看</el-button>
				<router-link :to="{name:'user_edit',params:{id:scope.row.id}}"><el-button plain icon="el-icon-edit" disabled>编辑</el-button></router-link>
				</template>
				</el-table-column> -->

			</el-table>
			<div class="fy">
				<el-pagination medium layout="total, sizes, prev, pager" :total="page.count" :page-size="page.limit" :current-page="page.page" @size-change="size_change" @current-change="current_change"> </el-pagination>
			</div>


			<!-- 试卷 -->
			<el-dialog title="我的试卷" :visible.sync="dialogTableVisible">
			  <el-radio v-model="radio" v-for="v in paperList" :label="v.id" >{{v.name}}</el-radio>
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="dialogTableVisible = false">取 消</el-button>
			    <el-button type="primary" @click="add_paper">确 定</el-button>
			  </span>
			</el-dialog>
	</div>
</template>

<script>

	export default {
	    data() {
		    return {
		    	lists: [],
		    	ids:null,
		    	page:[],
		    	username:'',
		    	paperList:null,
		    	dialogTableVisible:false,
		    	radio:'',

		    }
	    },
	    methods: {
	      handleCheckAllChange(val) {
	        this.checkedCities = val ? cityOptions : [];
	        this.isIndeterminate = false;
	      },
	      handleCheckedCitiesChange(value) {
	        let checkedCount = value.length;
	        this.checkAll = checkedCount === this.cities.length;
	        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
	      },
	      changeFun:function(val){
	      	this.ids = null;
	      	if(val.length>0){
	      		var ids = '';
	      		for(var i=0;i<val.length;i++){
	      			ids = ids + val[i]['id']+',';
	      		}
	      		this.ids = ids;
	      	}
	      },
	      del:function(){

	      	var _this = this;
	      	this.ids = this.ids.substr(0, this.ids.length - 1);
	      	this.$post(this.ROOT_URL + 'Admin/teacher_class/user_del',{id:this.ids,class_id:this.$route.params.id}).then(function(res){
	      		_this.$message({
		          message: '恭喜你，删除成功！',
		          type: 'success'
		        });
		        _this.getList();
	      	});
	      },
	      size_change:function(val){
	      	this.page.limit = val;
	      	this.getList();
	      },
	      current_change:function(val){
	      	this.page.page = val;
	      	this.getList();
	      },
	      search:function(){
	      	var _this = this;
	    	_this.$post(this.ROOT_URL + 'Admin/teacher_class/user_index/'+this.$route.params.id,{limit:this.page.limit,page:this.page.page,username:this.username}).then(function(res){
	    		_this.lists = res.data;
	    		_this.page = res.page;
	    	});
	      },
	      getList:function(){
	      	var _this = this;
	    	_this.$post(this.ROOT_URL + 'Admin/teacher_class/user_index/'+this.$route.params.id,{limit:this.page.limit,page:this.page.page}).then(function(res){
	    		_this.lists = res.data;
	    		_this.page = res.page;
	    	});
	      },
	      // 发布试卷给学生
	      add_paper:function(){
	      	var _this = this;
	      	console.log(this.ids);
	      	if(this.$isEmpty(this.ids) || this.$isEmpty(this.radio)){
	      		_this.$message({
		          message: '请选择好学生和试卷！',
		          type: 'error'
		        });
		        return;
	      	}
	      	this.ids = this.ids.substr(0, this.ids.length - 1);
	      	// console.log(this.radio);
	      	this.$post(this.ROOT_URL + 'Admin/teacher_class/add_paper',{id:this.ids,paper_id:this.radio}).then(function(res){
	      		_this.$message({
		          message: '发布成功！',
		          type: 'success'
		        });
		        _this.dialogTableVisible = false;
	      	});
	      },
	      // 获取所有试卷
	      get_paper:function(){
	      	this.dialogTableVisible = true
	      	var _this = this;
	      	this.$get(this.ROOT_URL + 'Admin/teacher_paper/get_paper').then(function(res){
	      		console.log(res);
	      		_this.paperList = res;
	      	});
	      }



	      
	    },
	    created:function(){
	    	this.getList();
	    }
	  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>