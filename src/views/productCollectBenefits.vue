<template>
    <div class="benefitWrap" v-if="successbenefitData">
        <p>{{benefitData.adTxt}}</p>
        <p>{{benefitData.finalDscntPrc}}</p>
        <p>{{benefitData.immedDscntCardInfo}}</p>
        <p>{{benefitData.immed_pay_dscnt_amt}}</p>
        <p>{{benefitData.inst_cpn_aply_unit_price}}</p>
        <p>{{benefitData.lpoint_mem_dscnt_price}}</p>
        <p>{{benefitData.nintCardMaxMonth}}</p>
        <p>{{benefitData.orgPrice}}</p>
    </div>
</template>

<script>
import Constant from '@/constant';
import {mapState} from 'vuex';
export default {
    name:'productCollectBenefits',
    data(){
        return{
            
        }
    },
    
    computed: {
        ...mapState([ "benefitData", "successbenefitData", "errorbenefit" ])
    },

    created(){
        this.$store.dispatch(Constant.PRODUCT_BENEFIT, { goodsNo: this.$route.query.goodsNo });
    }
}
</script>

<style>

</style>