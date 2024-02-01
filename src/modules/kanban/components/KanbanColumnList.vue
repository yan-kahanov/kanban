<script setup>
import { provide, ref } from 'vue'
import { KanbanColumnItem } from '../components'
import { useColumnsStore } from '@/stores/columns'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css'
import 'swiper/css/free-mode'

const columnsStore = useColumnsStore()
const dragTask = ref(null)
const isArrowsVisible = ref(false)

const setDragTask = (value) => {
  dragTask.value = value
}
provide('dragTask', dragTask)
provide('setDragTask', setDragTask)
</script>

<template>
  <div class="pb-4 overflow-auto">
    <div v-if="columnsStore.columns.length">
      <swiper
        :class="{navigation: isArrowsVisible}"
        :modules="[FreeMode, Navigation]"
        :freeMode="true"
        :navigation="true"
        :allow-touch-move="false"
        :space-between="15"
        slidesPerView="auto"
        class="transition-all"
        @lock="isArrowsVisible = false"
        @unlock="isArrowsVisible = true"
      >
        <swiper-slide v-for="column in columnsStore.columns" :key="column.id">
          <kanban-column-item :column="column"
        /></swiper-slide>
      </swiper>
    </div>
    <div v-else class="w-full text-center mt-4">Нет стадий</div>
  </div>
</template>

<style scoped>
.swiper{
  padding-top: 25px;
}
.swiper.navigation {
  padding-top: 70px;
}
.swiper-slide {
  width: max-content;
}
.swiper:deep(.swiper-button-next),
.swiper:deep(.swiper-button-prev) {
  top: 35px;
}
</style>
