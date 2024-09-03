<script lang="ts">
	import type { PackageInfoProps } from './packageinfo';
	import PackageInfo from './PackageInfo.svelte';

	const pkg: PackageInfoProps = {
		name: 'svelte',
		speed: 'blazing',
		version: 5,
		website: 'https://svelte.dev'
	};
</script>

<PackageInfo {...pkg} />
