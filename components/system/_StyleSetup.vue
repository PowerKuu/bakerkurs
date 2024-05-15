<script setup lang="ts">

</script>

<template>
	<div></div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@200;300;400;500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@200;300;400;500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Figtree:wght@200;300;400;500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap");

:root {
	--primary: #000000;
	--weak-primary: #372E25;
	--secondary: #000000;
	--background: #ffffff;
	--neutral: #372E25;
	--text: #000000;
	--error: #FF0000;

	--page-padding: 4vw;
	
	--normal-height: 3rem;
	--border-radius: 10px;

	--border-width: 1px;
}

html, body {
	overflow-x: hidden;
	overflow-y: auto;
	scroll-behavior: smooth;

	max-width: 100%;
}

* {
	font-family: "Inter", sans-serif;
	font-weight: 500;

	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.text-overflow {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.text-underline {
	text-decoration: underline;
}

.text-bold {
	font-weight: 600 !important;
}

.text-reverse {
	color: var(--background) !important;
}

.pointer {
	cursor: pointer;
}

.border {
	border: var(--border-width) solid var(--neutral);
	border-radius: var(--border-radius);
}

a {
	text-decoration: none;
	color: inherit;
}

*[data-hide="true"] {
	opacity: 0;
	pointer-events: none;
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
	box-shadow: none !important;
	background-color: var(--weak-primary);
  	background-clip: content-box !important;
}

/* custom scrollbar */
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background-color: var(--neutral);
}

::-webkit-scrollbar-thumb {
  background-color: var(--text);
  border-radius: var(--border-radius);

  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: var(--text);
}
</style>