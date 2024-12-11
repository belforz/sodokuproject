<template>
  <div class="container p-6 mx-auto">
    <h2 class="text-center text-2xl font-bold mb-4">O Board de Sudoku</h2>
    <div class="board grid gap-1">
      <div
        v-for="(row, rowIndex) in board"
        :key="'row-' + rowIndex"
        class="grid grid-cols-9 gap-1"
      >
        <div
          v-for="(cell, cellIndex) in row"
          :key="'cell-' + rowIndex + '-' + cellIndex"
          class="cell border border-gray-500 flex items-center justify-center h-12 w-12 cursor-pointer transition-colors hover:bg-gray-200"
          @click="handleCellClick(cell)"
        >
          {{ cell }}
        </div>
      </div>
    </div>
    <div class="mt-4 text-center">
      <p v-if="selectedNumber !== null" class="text-lg font-semibold">
        Número selecionado: {{ selectedNumber }}
      </p>
      <p v-else class="text-lg font-semibold">Nenhum número selecionado</p>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

const board = ref<number[][]>([
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
]);

const selectedNumber = ref<number | null>(null);

const handleCellClick = (cell: number) => {
  if (cell !== 0) {
    selectedNumber.value = cell;
  } else {
    selectedNumber.value = null;
  }
};

export default {
  setup() {
    return {
      board,
      selectedNumber,
      handleCellClick,
    };
  },
};
</script>


