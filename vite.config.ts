import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import lqip from 'vite-plugin-lqip';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';

export default defineConfig({ plugins: [tailwindcss(), lqip(), enhancedImages(), sveltekit()] });
