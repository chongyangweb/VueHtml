<template>
	<div class="index_main">
		<div class="main_btn_left">
			<!-- <router-link class="admin_fff_btn" :to="{name:'goods_add'}"><el-button type="primary" icon="el-icon-plus">添加</el-button></router-link> -->

			<!-- <input class="index_search_input" type="text" placeholder="输入搜索内容"> -->
			<el-input  class="search_input" size="small" v-model="order_no" placeholder="请输入订单号"></el-input>
			<el-button icon="el-icon-search" @click="search" plain>搜索</el-button>

			<!-- <el-button class="main_del_right" icon="el-icon-delete" type="danger" @click="del">批量删除</el-button> -->
		</div>
		<input type="hidden" v-model="ids" value="">
		<div class="unline"></div>

			<el-table ref="multipleTable" :data="lists" tooltip-effect="dark" size="medium" style="width: 100%" @selection-change="changeFun">‘

				<el-table-column type="selection" width="55"></el-table-column>

				<el-table-column label="#" width="80">
				<template slot-scope="scope">{{ scope.row.id }}</template>
				</el-table-column>

				<el-table-column label="产品" width="70">
				<template slot-scope="scope"><img width="50px" height="50px" :src="scope.row.image"></template>
				</el-table-column>

				<el-table-column label="标题" >
				<template slot-scope="scope">{{ scope.row.title }}</template>
				</el-table-column>

				<el-table-column label="订单号">
				<template slot-scope="scope">{{ scope.row.order_no}}</template>
				</el-table-column>

				<el-table-column label="支付状态">
				<template slot-scope="scope">
					<div v-if="scope.row.pay_status==0">
						<el-tag type="info">未支付</el-tag>
					</div>
					<div v-if="scope.row.pay_status==1">
						<el-tag type="success">已经支付</el-tag>
					</div>
				</template>
				</el-table-column>

				<el-table-column label="订单状态">
				<template slot-scope="scope">
					<div v-if="scope.row.order_status==0">
						<el-tag type="danger">未完成</el-tag>
					</div>
					<div v-if="scope.row.order_status==1">
						<el-tag type="success">完成</el-tag>
					</div>
					<div v-if="scope.row.order_status==99">
						<el-tag type="danger">未完成</el-tag>
					</div>
				</template>
				</el-table-column>

				<el-table-column label="加入时间">
				<template slot-scope="scope">{{ scope.row.add_time|formatDate}}</template>
				</el-table-column>

				<el-table-column label="操作">
				<template slot-scope="scope">
				<!-- <el-button plain>查看</el-button> -->
				<router-link :to="{path:'/Admin/order/info/'+scope.row.id}"><el-button plain icon="el-icon-edit" >查看</el-button></router-link>
				</template>
				</el-table-column>

			</el-table>
			<div class="fy">
				<el-pagination medium layout="total, sizes, prev, pager" :total="page.count" :page-size="page.limit" :current-page="page.page" @size-change="size_change" @current-change="current_change"> </el-pagination>
			</div>
	</div>
</template>

<script>

	export default {
	    data() {
		    return {
		    	lists: [],
		    	ids:null,
		    	page:[],
		    	order_no:'',

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
	      	this.$post(this.ROOT_URL + 'Admin/goods/del',{id:this.ids}).then(function(res){
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
	    	_this.$post(this.ROOT_URL + 'Admin/order/index',{limit:this.page.limit,page:this.page.page,order_no:this.order_no}).then(function(res){
	    		_this.lists = res.order_list;
	    		_this.page = res.page;
	    	});
	      },
	      getList:function(){
	      	var _this = this;
	    	_this.$post(this.ROOT_URL + 'Admin/order/index',{limit:this.page.limit,page:this.page.page}).then(function(res){
	    		_this.lists = res.order_list;
	    		_this.page = res.page;
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