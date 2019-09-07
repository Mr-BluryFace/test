<template>
  <div id="app">
  <div id="back" class="over back">
    <img src="../images/4.jpg" />
  </div>
    <div id="nv" class="container sticky-top">
      <nav class="navbar navbar-light sticky-top" style="color:#FFF;background-color: #0f2862;">
        <img src="../images/logo1.png" />
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
    <div class="container">
      <div class="slide">
          <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src='../images/q.jpg' class="d-block w-100" alt="">
                <div class="over"></div>
              </div>
              <div class="carousel-item">
                <img src="../images/w.jpg" class="d-block w-100" alt="">
                <div class="over"></div>
              </div>
              <div class="carousel-item">
                <img src="../images/e.jpg" class="d-block w-100" alt="">
                <div class="over"></div>
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

    <div class="container">
      <hr />
    </div>

    <!-- port -->

    <div class="container">
      <p class="h1">Our Portofolio</p>
      <div class="row">
        <div class="col-sm">
          <img src="../images/port/a.jpg" />
          <p class="lead">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
          </p>
        </div>
        <div class="col-sm">
          <img src="../images/port/b.jpg" />
          <p class="lead">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
          </p>
        </div>
        <div class="col-sm">
          <img src="../images/port/c.jpg" />
          <p class="lead">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
          </p>
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

<style>
#nv{
  position: sticky;
}
#back img{
  position: fixed;
  width: 100%;


}
#app{
  /*background-image: url(../images/4.jpg);
  background-size:cover;*/
  height: 5000px;

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
  height:500px;
  overflow: hidden;
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



hr{
  color: #444;
  margin-bottom: 35px;
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
  margin-bottom: 35px;
}
.col-sm{
  border-radius: 4px;
}
.col-sm  img{
  height: 303px;
  width: 334px;
  border-radius: 4px;
  margin-bottom: 25px;
}
</style>
