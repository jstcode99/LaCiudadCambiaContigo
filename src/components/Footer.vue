<template>
  <footer class="sticky-footer">
    <section class="footer-list">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="footer-logo mb-4">
              <a class="logo" href="index.html">
                <img alt="" :src="require('@/assets/img/logo.png')" height="80px"/>
              </a>
            </div>
            <p>86 Petersham town, New South wales Waedll Steet, Australia</p>
            <p class="mb-0">
              <a href="#" class="text-dark">
                <i class="fas fa-mobile fa-fw"></i> +61 525 240 310
                </a>
            </p>
            <p class="mb-0">
              <a href="#" class="text-dark">
                <i class="fas fa-envelope fa-fw"></i> iamosahan@gmail.com
                </a>
            </p>
            <p class="mb-0">
              <a href="#" class="text-dark">
                <i class="fas fa-globe fa-fw"></i> www.askbootstrap.com
                </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>
<script>
export default {
  name: "HelloWorld",
  props: {
    title: String,
  },
};
</script>