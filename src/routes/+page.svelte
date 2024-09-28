<script lang="ts">
	import Particles, { particlesInit } from '@tsparticles/svelte';
	import type { RecursivePartial, IOptions } from '@tsparticles/engine';
	import { loadSlim } from '@tsparticles/slim';

	let particlesConfig: RecursivePartial<IOptions> = {
		background: {
			color: {
				value: '#000'
			}
		},
		fpsLimit: 90,
		interactivity: {
			detectsOn: 'window',
			events: {
				onClick: {
					enable: true,
					mode: 'push'
				},
				onDiv: {
					selectors: '#main',
					enable: true,
					mode: 'bounce',
					type: 'rectangle'
				}
			},
			modes: {
				push: {
					quantity: 4
				},
				repulse: {
					distance: 100,
					duration: 0.5
				}
			}
		},
		particles: {
			color: {
				value: '#ffffff'
			},
			links: {
				color: '#ffffff',
				distance: 100,
				enable: true,
				opacity: 0.55,
				width: 1
			},
			move: {
				direction: 'none',
				enable: true,
				speed: 1
			},
			number: {
				density: {
					enable: true
				},
				value: 100,
				limit: { mode: 'delete', value: 300 }
			},
			opacity: {
				value: 1
			},
			shape: {
				type: 'circle'
			},
			size: {
				value: { min: 1, max: 3 }
			}
		},
		detectRetina: true
	};

	void particlesInit(async (engine) => {
		await loadSlim(engine);
	});
</script>

<div>
	<Particles id="tsparticles" options={particlesConfig} />
	<div class="flex flex-row min-h-screen justify-center items-center">
		<div
			id={'main'}
			style="box-shadow: 0 0 35px 40px #262626BF;"
			class="drop-shadow h-full bg-neutral-800 bg-opacity-75 px-10"
		>
			<p class={'text-white text-center text-pretty'}>
				Hi! My name is Fabricio, I&apos;m a full-stack software engineer,
				<br />
				passionate about learning new things and solving problems.
			</p>
			<div id={'social'} class={'flex flex-row justify-evenly mt-5'}>
				<a href="https://www.linkedin.com/in/fabalcu97/" target="_blank">
					<img src="/linkedin.svg" alt="linkedin" width={16} height={16} />
				</a>
				<a href="https://www.github.com/fabalcu97/" target="_blank">
					<img src="/github.svg" alt="github" width={16} height={16} />
				</a>
			</div>
		</div>
	</div>
</div>
