<script lang="ts">
	import Router, {location, link} from 'svelte-spa-router';
	import MobileHeader from './components/MobileHeader.svelte';
	import ActionBar from "./components/ActionBar/index.svelte"
	import Home from "./index.svelte"
</script>


<MobileHeader />
<ActionBar />

<Router routes={{
	'/': Home,

}} />

<style>
/*Md*/
@media (min-width: 768px) {

}
/*Lg*/
@media (min-width: 1024px) {
 
}
/*Xl*/
@media (min-width: 1280px) {
 
}
/*2Xl*/
@media (min-width: 1440px) {
 
}
</style>