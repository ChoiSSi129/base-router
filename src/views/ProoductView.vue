<template>
    <div class="productView">
        <div v-if="successProductData">
            <div class="imgWrap">
                <ul>
                    <li v-for="item in productData.imgInfo.imgList" :key="item">
                        <img :src="item" alt="">
                    </li>
                </ul>
            </div>

            <div class="txtWrap">
                <p class="brandName">{{productData.prdInfo.brndNm}}</p>
                <p class="goodsName">{{productData.prdInfo.goodsNm}}</p>
            </div>
            <router-link :to="{ name:'productCollectBenefits', query:{ goodsNo:$route.query.goodsNo } }">추가혜택가</router-link>
        </div>
    </div>
</template>

<script>
import Constant from '@/constant'
import {mapState} from 'vuex';
export default {
    name: 'ProoductView',
    data(){
        return{
            
        }
    },
    computed: {
		...mapState([ "productData", "successProductData", "errorProduct" ])
	},

	created(){
        this.$store.dispatch(Constant.PRODUCT_VIEW, { goodsNo: this.$route.query.goodsNo });
	},
}
</script>

<style>
    .productView {}
    .productView .imgWrap {white-space:nowrap;}
    .productView .imgWrap > ul > li {display:inline-block;}
    .productView .txtWrap {font-size:14px;}
    .productView .brandName {margin-top:10px;}
    .productView .goodsName {margin-top:10px;}
</style>
