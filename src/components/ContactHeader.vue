<template>
	<header class="header">
		<div class="header-right">
      <a target="_blank" href="https://www.facebook.com/PoliJuniorEngenharia/">
				<icon class="header-icon" name="facebook"></icon>
			</a>
			<a target="_blank" href="https://www.instagram.com/polijunioreng/">
				<icon class="header-icon" name="instagram"></icon>
			</a>
			<a target="_blank" href="https://www.linkedin.com/company/poli-j%C3%BAnior-engenharia/">
				<icon class="header-icon" name="linkedin"></icon>
			</a>
		</div>
		<div class="header-left">
			<label class="header-right">
		      <icon class="header-icon" name="phone" scale="0.8"></icon> (81) 3184-7554
		      <icon class="header-icon" name="calendar" scale="0.8"></icon> Seg - Sex (08:00 - 20:00)
		      <icon class="header-icon" name="map-marker" scale="0.8"></icon>
		      R. Benfica, 455 - Madalena <label class="header-info">- Escola Politecnica de Pernambuco</label> - Recife - PE.
		    </label>
		</div>
	</header>
</template>

<script>
export default {
};

</script>

<style scoped>
a { color: #fefefe; }
a:hover { color: #ffd100; }

.header {
	padding: 15px 30px 0;
	background-color: #1b1b1e;
	color: #fefefe;
	text-align: right;
	width: 100%;
	height: 45px;
}

.header-icon {
	margin: 0 2px 0 15px;
	position: relative;
	top: 2px;
}

.header-left,
.header-right {
	font-size: 0.9em;
	font-weight: normal;
}

.header-left,
.header-info {
	display: none;
}

@media screen and (min-width: 700px) {
	.header{
		padding: 15px 30px 5px;
	}

	.header-left {
		display: block;
		float: left;
	}

	.header-right {
		float: right;
	}
}
@media screen and (min-width: 800px) {
	.header-info { display: inline-block; }
}
</style>
