import { defineConfig, presetUno, presetAttributify } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
  ],
  rules: [
    ['board', { display: 'grid', gap: '1px', 'grid-template-columns': 'repeat(9, 1fr)', border: '2px solid black' }],
    ['cell', {
      width: '100%',
      height: '100%',
      'text-align': 'center',
      'font-size': '1.25rem',
      'font-weight': 'bold',
      'transition': 'background-color 0.2s ease',
      'background-color': '#f9f9f9',
      color: '#333'
    }],
    ['cell:hover', { 'background-color': '#e0e0e0', cursor: 'pointer' }],
  ],
});
