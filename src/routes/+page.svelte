<script lang="ts">
	import anime from 'animejs'
	import Contacts from './Contacts.svelte'
	import { onMount } from 'svelte'

	let isResumeDisclaimerHidden = true

	onMount(() => {
		anime
			.timeline({ easing: 'easeOutExpo' })
			.add({
				targets: '.ml12 .letter',
				translateX: [70, 0],
				translateZ: 0,
				opacity: [0, 1],
				duration: 500,
				delay: anime.stagger(60)
			})
			.add({
				targets: '#about, #hire, #resume',
				opacity: [0, 1],
				translateY: [10, 0],
				duration: 1000,
				delay: anime.stagger(700)
			})
	})
</script>

<svelte:head><title>Konnko</title></svelte:head>

<div
	class="relative flex h-screen w-screen flex-col justify-center bg-gunmetal p-4 font-courier text-xl"
>
	<div />
	<div class="m-auto flex translate-y-[-36px] flex-col gap-4 text-silver ">
		<div class="ml12 h-7 font-extralight uppercase tracking-[.5em] text-white ">
			{@html 'Hello'.replace(/\S/g, "<span class='letter inline-block text-3xl'>$&</span>")}
		</div>
		<p id="about">I am a React/Svelte dev interested in SSR and all the bleeding edge stuff</p>
		<!--
		<p id="hire">Available to get hired</p>
		<div class="flex items-center gap-3">
			<a
				id="resume"
				class=" w-min cursor-pointer whitespace-nowrap rounded border-2 border-silver py-1 px-2 transition-colors hover:bg-hgunmetal hover:text-neutral-100"
				href="https://pb.misha.monster/Prochan_Mykhail_resume.pdf"
				target="_blank"
				rel="noreferrer"
				on:mouseenter={() => (isResumeDisclaimerHidden = false)}
				on:mouseleave={() => (isResumeDisclaimerHidden = true)}
			>
				Get resume
			</a>
			<p
				class={`text-base font-medium text-neutral-200 transition-opacity ${
					isResumeDisclaimerHidden ? 'opacity-0' : 'opacity-100'
				}`}
			>
				Currently only available in russian
			</p>
		</div>
		-->
	</div>
	<div />
	<Contacts />
</div>
