import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import Constant from '@/constant.js';
import LOTTE_SVC from '@/common/svc.js';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		// 상품 리스트
		listData: {},
		successListData: false,
		errorList: false,

		// 상품 상세보기
		productData: {},
		successProductData: false,
		errorProduct: false,
		goodsNo: null,

		// 추가혜택가
		benefitData: {},
		successbenefitData: false,
		errorbenefit: false,

	},

	mutations: {
		// 상품 리스트
		[Constant.PRODUCT_LIST] : (state, payload) => {
			state.listData = payload.listData;
			state.successListData = payload.successListData;
			state.errorList = payload.errorList;
		},

		// 상품 상세보기
		[Constant.PRODUCT_VIEW] : (state, payload) => {
			state.productData = payload.productData;
			state.successProductData = payload.successProductData;
			state.errorProduct = payload.errorProduct;
			state.goodsNo = payload.goodsNo;
		},

		// 상품 상세보기
		[Constant.PRODUCT_BENEFIT] : (state, payload) => {
			state.benefitData = payload.benefitData;
			state.successbenefitData = payload.successbenefitData;
		},
	},

	actions: {
		// 상품 리스트
		[Constant.PRODUCT_LIST] : (store) => {
			axios(LOTTE_SVC.product_list).then((res) => {
				store.commit(Constant.PRODUCT_LIST, { listData: res.data, successListData: true });
			})
			.catch(err => {
				store.commit(Constant.PRODUCT_LIST, { errorList: true });
				console.log(err);
			});
		},

		// 상품 상세보기
		[Constant.PRODUCT_VIEW] : (store, payload) => {
			if(store.state.goodsNo == payload.goodsNo) return;
			store.state.productData = {};
			store.state.successProductData = false;
			axios(LOTTE_SVC.product_view + payload.goodsNo).then((res) => {
				store.commit(Constant.PRODUCT_VIEW, { productData: res.data.data, successProductData: true, goodsNo: payload.goodsNo });
			})
			.catch(err => {
				store.commit(Constant.PRODUCT_VIEW, { errorProduct: true });
				console.log(err);
			});
		},

		// 추가혜택가
		[Constant.PRODUCT_BENEFIT] : (store, payload) => {
			axios(LOTTE_SVC.collectbenefit + payload.goodsNo).then((res) => {
				store.commit(Constant.PRODUCT_BENEFIT, { benefitData: res.data.data, successbenefitData: true });
			})
			.catch(err => {
				store.commit(Constant.PRODUCT_BENEFIT, { errorbenefit: true });
				console.log(err);
			});
		},

	}
})
