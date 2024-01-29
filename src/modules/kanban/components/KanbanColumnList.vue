<script setup>
import {KanbanColumnItem} from '../components';

const columns = [
  {
    id: 1,
    title: 'в работе',
    tasks: [
      { id: 1, title: 'поменять шрифт', text: 'В header поменять шрифт на Roboto' },
      {
        id: 2,
        title:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti sunt earum quas atque exercitationem. Ea!',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde optio, alias in eum at voluptatum a neque tenetur doloremque repellat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde optio, alias in eum at voluptatum a neque tenetur doloremque repellat!'
      }
    ]
  },
  {
    id: 2,
    title:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti sunt earum quas atque exercitationem. Ea!',
    tasks: [
      { id: 3, title: 'поменять шрифт', text: 'В header поменять шрифт на Roboto' },
      {
        id: 4,
        title:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti sunt earum quas atque exercitationem. Ea!',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti sunt earum quas atque exercitationem. Ea!'
      },
      { id: 5, title: 'поменять шрифт', text: 'В header поменять шрифт на Roboto' },
      { id: 6, title: 'поменять шрифт', text: 'В header поменять шрифт на Roboto' },
      { id: 7, title: 'поменять шрифт', text: 'В header поменять шрифт на Roboto' },
      { id: 8, title: 'поменять шрифт', text: 'В header поменять шрифт на Roboto' },
      { id: 9, title: 'поменять шрифт', text: 'В header поменять шрифт на Roboto' },
    ]
  }
]
</script>

<template>
  <div class="flex flex-nowrap gap-5 mt-5 pb-4">
    <kanban-column-item v-for="column in columns" :column="column" :key="column.id"/>
  </div>
</template>
