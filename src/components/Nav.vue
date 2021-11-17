<template>
	<header class="header shop">
		<!-- Topbar -->
		<div class="topbar">
			<div class="container">
				<div class="row">
					<div class="col-lg-4 col-md-12 col-12">
						<!-- Top Left -->
						<!-- <div class="top-left">
							<ul class="list-main">
								<li><i class="ti-headphone-alt"></i> +060 (800) 801-582</li>
								<li><i class="ti-email"></i> support@shophub.com</li>
							</ul>
						</div> -->
						<!--/ End Top Left -->
					</div>
					<div class="col-lg-8 col-md-12 col-12">
						<!-- Top Right -->
						<div class="right-content">
							<ul class="list-main">

								      <router-link to="/" tag="li"> <a><i class="ti-user"></i>  Home</a></router-link> |
									  <router-link to="/auth/login" tag="li"> <a><i class="ti-power-off"></i>  Login</a></router-link>
									   <router-link to="/auth/register" tag="li"> <a><i class="ti-power-off"></i>  Register</a></router-link>  
 
							</ul>
						</div>
						<!-- End Top Right -->
					</div>
				</div>
			</div>
		</div>

	</header>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
