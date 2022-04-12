<template>
    <div class="list-wrap">
        <section class="banner-box _type_thumb3">
            <h2 class="hidden">banner</h2>
            
            <ul>
                <Thumb v-for="(tl, i) in loadData.thumbA" :key="tl" :liData="loadData.thumbA[i]"/>               
            </ul>
        </section>
    </div>
</template>

<script setup>
import {reactive, computed} from 'vue';
import ThumbDataA from '@/data/thumbData';
import Thumb from '@/components/reference/Thumb.vue';

const state = reactive({
  thumbData: {
    thumbA : ThumbDataA
  }
});

const loadData = computed(()=>
  state.thumbData
);

/*
export default {
    name: 'Reference-2',
    data() {
        return {
            thumbA : ThumbData,
        }
    },
    components: {
        Thumb : ThumbList
    }
}
*/
</script>


<style lang="scss">
.list-wrap {
  padding: 0 0 160px;
  background: linear-gradient(rgb(0,0,0), rgb(15,69,155), rgb(132,103,66));
}
</style>