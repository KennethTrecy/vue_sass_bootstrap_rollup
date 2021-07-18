<template>
	<h1 class="text-center">{{ message }}</h1>
	<h2>{{ message }}</h2>
	<button
		@click="activateModal"
		type="button"
		class="btn btn-primary">
		Launch demo modal
	</button>

	<div
		class="modal fade"
		id="sampleModal"
		tabindex="-1"
		aria-labelledby="sampleModalLabel"
		aria-hidden="true">
		<div class="modal-dialog">
			<article class="modal-content">
				<header class="modal-header">
					<h5
						class="modal-title"
						id="sampleModalLabel">
						Sample modal
					</h5>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close">
					</button>
				</header>
				<section class="modal-body">
					<p>This is a sample modal.</p>
					<button
						type="button"
						class="btn btn-primary"
						data-bs-dismiss="modal">
						Close
					</button>
				</section>
			</article>
		</div>
	</div>
</template>

<style lang="scss">
@import "bootstrap.configuration";

h1 {
	color: red;
	+ h2 {
		color: blue;
	}
}
</style>

<script>
import Modal from "bootstrap";

export default {
	data() {
		return {
			"message": "Hello World"
		}
	},
	methods: {
		activateModal() {
			const sampleModalElement = document.getElementById("sampleModal");
			const exampleModal = new Modal(sampleModalElement, {});
			exampleModal.show();
		}
	}
}
</script>
