import presetTypography from '@unocss/preset-typography';
import { defineConfig, presetWind4 } from 'unocss';

export default defineConfig({
	presets: [
		presetWind4({ dark: 'class' }),
		presetTypography({
			cssExtend: {
				':where(.prose-invert)': {
					'--un-prose-body': '#d4d4d8',
					'--un-prose-headings': '#fafafa',
					'--un-prose-links': '#6ee7b7',
					'--un-prose-bold': '#fafafa',
					'--un-prose-quotes': '#a1a1aa',
					'--un-prose-code': '#e4e4e7'
				}
			}
		})
	],
	preflights: [
		{
			layer: 'base',
			getCSS: () => `
@keyframes aurora-drift {
	0%, 100% { transform: translate(0, 0) scale(1); }
	33% { transform: translate(12%, 8%) scale(1.08); }
	66% { transform: translate(-8%, 12%) scale(0.95); }
}
@keyframes aurora-drift-alt {
	0%, 100% { transform: translate(0, 0) scale(1.05); }
	50% { transform: translate(-10%, -12%) scale(1); }
}
@keyframes fade-in-up {
	from { opacity: 0; transform: translateY(14px); filter: blur(6px); }
	to { opacity: 1; transform: translateY(0); filter: blur(0); }
}
@keyframes border-glow {
	0%, 100% { opacity: 0.35; }
	50% { opacity: 0.85; }
}
`
		}
	],
	shortcuts: {
		'animate-aurora-drift': 'animate-[aurora-drift_24s_ease-in-out_infinite]',
		'animate-aurora-drift-alt': 'animate-[aurora-drift-alt_20s_ease-in-out_infinite]',
		'animate-fade-in-up': 'animate-[fade-in-up_0.65s_cubic-bezier(0.16,1,0.3,1)_both]',
		'animate-border-glow': 'animate-[border-glow_4s_ease-in-out_infinite]'
	}
});
