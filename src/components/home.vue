<template>
  <div id="Home">
    <!--
  <div id="back" class="over back">
    <img src="./images/4.jpg" />
  </div>
    -->
    <div id="nv" class="container sticky-top">
      <nav class="navbar navbar-light sticky-top" style="color:#FFF;background-color:#501e36;">
        <img src="./images/logo1.png" />
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon text-white"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>

          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>

    </div>

    <!--slide-->
    <div class="header">
      <div class="container">
        <h1>Dress Shop</h1>
        <p>
          We Are Selling Some Cool Stuff
        </p>
      </div>

    </div>


    <!--
    <div class="container">
      <div class="slide">
          <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src='./images/q.jpg' class="d-block w-100" alt="">
              </div>
              <div class="carousel-item">
                <img src="./images/w.jpg" class="d-block w-100" alt="">
              </div>
              <div class="carousel-item">
                <img src="./images/e.jpg" class="d-block w-100" alt="">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
      </div>
    </div>
      -->

    <!-- port -->
    <div class="portofolio">
      <div id="b-port" class="container">

        <h1><q>Our Portofolio</q></h1>
        <p class="h3">
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        </p>
        <div id="port" class="row">
          <div class="col-sm">
            <img class="img-fluid" src="./images/port/a.jpg" />
            <h3>Wedding Dress</h3>
          </div>
          <div class="col-sm">
            <img class="img-fluid" src="./images/port/b.jpg" />
            <h3>Wedding Dress</h3>
          </div>
          <div class="col-sm">
            <img class="img-fluid" src="./images/port/c.jpg" />
          <h3>Wedding Dress</h3>
          </div>
        </div>
        <div id="port" class="row">
          <div class="col-sm">
            <img class="img-fluid" src="./images/port/d.jpg" />
            <h3>Wedding Dress</h3>
          </div>
          <div class="col-sm">
            <img class="img-fluid" src="./images/port/f.jpg" />
            <h3>Wedding Dress</h3>
          </div>
          <div class="col-sm">
            <img class="img-fluid" src="./images/port/g.jpg" />
          <h3>Wedding Dress</h3>
          </div>
        </div>
      </div>
    </div>
    <!-- contact me -->
    <div class="contact">
      <div class="container">
        <h1 id="title2">Our Contacts</h1>
        <img id="map1" class="img-fluid" src="./images/7.jpg" />
        <div class="info">
          <h1 id="title">I Can</h1>

          <div class="addr">
            <h1>Adress</h1>
            <div class="words">
              <h4>8020 Shore Rd.</h4>
              <h4>Brooklyn, NY 11209</h4>
            </div>

          </div>

          <div class="phone">
            <h1>phone</h1>
            <h5>099 541235</h5>
          </div>
          <div class="mail">
            <h1>E-mail</h1>
            <h5>aahmedemad1000@gmail.com</h5>
          </div>

        </div>
      </div>
    </div>

  </div>

  </div>
</template>

<script>
export default {
  data() {

  },
  methods:{
    scrollHandler: function(){
      this.isUserScrolling = (window.scrollY > 0);
      console.log('calling handleScroll');
    }
  },
  mounted: function(){
    $('.back').height($(window).height());
  }

}
</script>

<style scoped>
*{
  font-family: garamond;
  color: #9e363a;
}
h3{
  text-align: center;
}
#nv{
  position: sticky;
}
#back img{
  position: fixed;
  width: 100%;


}
#Home{
  /*background-image: url(../images/4.jpg);
  background-size:cover;*/
  height: 5000px;
  background-color: #501e36;

}
.navbar{
  background-color:	#501e36;
}
.navbar-light .navbar-brand{
  color: #FFF;
  position: sticky;
}
.navbar-light .navbar-nav .active>.nav-link{
  color: #FFF
}
.navbar-light .navbar-nav .nav-link{
  color: #FFF;
}
.navbar-light .navbar-nav .nav-link:hover{
  color: #9e363a;
}
.carousel-item{
  position: relative;
}
.over{
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  background-color: #000;
  opacity: 0.2;
  width: 100%;
  height: 100%;
}

.navbar img{
  width: 100px;
}
li{
  color: #FFF;
}
.navbar{
  border-radius: 6px;
  margin-bottom: 18px;
}
navbar-toggler{
  color: #FFF;
}
#carouselExampleFade{
  overflow: hidden;
  height: 500px;
  position: relative;
  border-radius: 5px;
  margin-bottom: 35px;

}
.carousel-fade .carousel-item >img{
  width: 100%;
  height: 100%;
  bottom: 80px;
  position: relative;
}
.h1{
  font-family: garamond;
  color: #FFF;
  padding-top: 40px;
}
.h3{
  text-align: center;
  margin-bottom: 35px;
  color: #FFF;
}
.col-sm p{
  font-family: garamond;
  color: #9e363a;
}

hr{
  color: #444;
  margin-bottom: 0px;
}
.btn-outline-success{
  color: #9e363a;
  border-color: #9e363a;
}
.btn:hover{
  color: #FFF;
  background-color: #9e363a;
  border-color: #9e363a;
}

.h1{
  color: #FFF;
  margin-bottom: 35px;
  text-align: center;
}
.col-sm{
  border-radius: 4px;
  margin-bottom: 35px;
}
.col-sm  img{
  height: 303px;
  width: 334px;
  border-radius: 4px;
  margin: auto;
  margin-bottom: 25px;
}
.portofolio{
  background-color: #FFF;
  position: relative;
  margin-top: 0px;
  top: -85px;
}
.portofolio h1{
  padding-top: 60px;
  text-align: center;
  color: #501e36;
}
.portofolio q{
  color: #501e36;
}
.portofolio h3{
  color: #501e36;
}
.portofolio p{
  margin-bottom: 75px;
  color: #501e36;
}
#port{
  margin-bottom: 25px;
}
.header{
  position: relative;
  height: 670px;
  background-image: url(./images/8.jpg);
  background-size: cover;
  top: -85px;
  background-color: #FFF;
}
.header h1{
  margin: auto;
  padding-top: 250px;
  text-align: center;
  color: #FFF;
  font-size: 100px;
  margin-bottom: 0px;
  opacity:
}
.header p{
  color: #FFF;
  font-size: 50px;
  text-align: center;
}

#map1{
  box-sizing: border-box;
  width: 50%;
  float: left;
  height: 400px;
  background-color: rgba(150,150,150,0.3);
  border: solid 3px #FFF;
  border-radius: 4px;
  margin-bottom: 5px;
  background-size: cover;
  margin-bottom: 20px;
  display: inline-block;
}
.contact h1{
  color: #FFF;
  text-align: center;
  margin-bottom: 35px;

}
.contact .info{
  float: left;
  margin-left: 60px;
  box-sizing: content-box;
}
.addr,.mail,.phone{
  margin-bottom: 25px;
}
.addr h1,.addr h4{
  color: #FFF;
  text-align: center;
}
.addr h4{
  margin-top: -15px;
  text-align: center;
  font-size: 20px;
  font-style: italic;
}
.words{
  margin-top: -25px;
  margin-left: 30px;
}
.phone h5{
  color: #FFF;
  margin-top: -25px;
  text-align: center;
  font-size: 20px;
  font-style: italic;
}
.mail h1{
  margin-top: 20px;
  margin-bottom: 5px;
  text-align: center;
      font-size: 40px;
}
.mail h5{
  color: #FFF;
  margin-left: 30px;
  text-align: center;
  font-size: 20px;
  font-style: italic;
}
#title{
  font-size: 55px;
}
#title2{
  margin-bottom: 80px;
  font-size: 50px;
}
@media (max-width: 576px) {
  #map1{
    display: block;
    width: 80%;
    margin: auto;
  }
}
@media (max-width: 768px) {
  #map1{
    display: block;
    width: 80%;
    margin: auto;
  }
}
</style>
