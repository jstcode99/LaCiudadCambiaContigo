<template>
<footer class="footer-area footer--dark">
  <div class="mini-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <div class="footer-widget">
            <div class="widget-about">
              <img src="@/assets/img/logo.png" height="56px">
              <img src="@/assets/img/logo-2.png" height="56px">
              <img src="@/assets/img/logo-3.png" height="56px">
              <p>Disfruta los videos historias que te encantan, mira original y compártelo con tus amigos, familiares y el resto del mundo en LaCiudadCambiaContigo.</p>
              <ul class="contact-details">
                <li>
                  <span class="icon-earphones"></span> Llamanos:
                  <a href="tel:3168314191">3168314191</a>
                </li>
                <li>
                  <span class="icon-envelope-open"></span>
                  <a href="mailto:jstorres0211@gmail.com">jstorres0211@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- Ends: .footer-widget -->
        </div>
        <div class="col-md-12">
          <div class="copyright-text">
            <p>© 2021
              <a href="#">LaCiudadCambiaContigo</a>. Todos los derechos reservados a
              <a href="#">Sebastian, Jesit, Santiago</a>
            </p>
          </div>

          <div class="go_top">
            <a href="#page-top">
              <b-icon icon="chevron-up"></b-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
</template>
<script>
export default {
  
}
</script>
<style>
.go_top {
 line-height:40px;
 cursor:pointer;
 width:40px;
 background: var(--info);
 color:#fff;
 position:fixed;
 -webkit-box-shadow:0 4px 4px rgba(0,0,0,.1);
 box-shadow:0 4px 4px rgba(0,0,0,.1);
 -webkit-border-radius:50%;
 border-radius:50%;
 right:-webkit-calc((100% - 1140px)/ 2);
 right:calc((100% - 1140px)/ 2);
 z-index:111;
 bottom:80px;
 text-align:center
}
.go_top svg {
  color: var(--light);
  display:inline-block
}
.mini-footer {
 background: var(--dark);
 text-align:center;
 padding:32px 0
}
.mini-footer p {
 margin:0;
 line-height:26px;
 font-size:15px;
 color:#999
}
.mini-footer p a {
 color: var(--info)
}
.mini-footer p a:hover {
 color:var(--success)
}
.widget-about img {
  margin-left: 10px;
 margin-bottom:30px
}
.widget-about p {
 font-weight:400
}
.widget-about .contact-details {
  list-style-type: none;
  margin:30px 0 0 0
}
.widget-about .contact-details li {
 margin-bottom:10px
}
.widget-about .contact-details li:last-child {
 margin-bottom:0
}
.widget-about .contact-details li span {
 padding-right:12px
}
.widget-about .contact-details li a {
 color: var(--info)
}
@media (max-width:991px) {
 .footer-menu {
  padding-left:0
 }
}
</style>