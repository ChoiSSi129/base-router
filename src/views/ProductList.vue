<template>
	<div class="productList">
		<ul v-if="successListData">
			<li v-for="item in listData.moduleData[0].prdList.items" :key="item.goodsNm">
				<router-link :to="{ name:'ProoductView', query: { goodsNo:item.goodsNo } }">
					<div class="imgWrap">
						<img :src="item.imgUrl" alt="">
					</div>
					<div class="txtWrap">
						<p class="name">{{item.goodsNm}}</p>
						<p class="price">{{item.orgPrice}} 원</p>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import Constant from '@/constant';
import {mapState} from 'vuex';
export default {
	name: 'ProductList',
	data(){
		return{
			
		}
	},
	computed: {
		...mapState([ "listData", "successListData", "errorList" ])
	},

	created(){
		this.$store.dispatch(Constant.PRODUCT_LIST);
	},

}
</script>

<style>
	.productList {}
	.productList > ul {}
	.productList > ul > li {float:left;width:50%;margin-top:20px;padding:0 10px;box-sizing:border-box;}
	.productList a {display:block;}
	.productList .imgWrap {}
	.productList .imgWrap img {}
	.productList .txtWrap {margin-top:10px;}
	.productList .name {overflow:hidden;height:28px;}
	.productList .price {margin-top:10px;}
</style>
