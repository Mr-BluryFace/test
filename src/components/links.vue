<template>
  <div>
    <div id="nv" class="container sticky-top">
      <nav class="navbar navbar-light sticky-top" style="color:#FFF;background-color: #0f2862;">
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
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#nv{
  position: sticky;
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
</style>
