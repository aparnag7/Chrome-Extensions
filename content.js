const generateSTYLES = () => {
    return `<style>@import url('https://fonts.googleapis.com/css?family=Nunito:400,600,700');
    $nunito-font: 'Nunito', sans-serif;
    
    // mixins
    @mixin breakpoint($point) {
        @if $point==mobile {
            @media (max-width: 480px) and (min-width: 320px) {
                @content ;
            }
        }
    }
    
    // keyrames
    @keyframes floating {
        from { transform: translateY(0px); }
        65%  { transform: translateY(15px); }
        to   { transform: translateY(-0px); }
    }
    
    html {
      height: 100%;
    }
    
    body{
      background-image: url('https://assets.codepen.io/1538474/star.svg'),linear-gradient(to bottom, #05007A, #4D007D);
      height: 100%;
      margin: 0;
      background-attachment: fixed;
      overflow: hidden;
    }
    
    .mars{
      left:0;
      right:0;
      bottom:0;
      position:absolute;
      height: 27vmin;
      background: url('https://assets.codepen.io/1538474/mars.svg') no-repeat bottom center;
      background-size: cover;
    }
    
    .logo-404{
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      top: 16vmin;
      width: 30vmin;
    
      @include breakpoint(mobile){
        top: 45vmin;
      }
    }
    
    .meteor{
      position: absolute;
      right: 2vmin;
      top: 16vmin;
    }
    
    .title{
      color: white;
      font-family: $nunito-font;
      font-weight: 600;
      text-align: center;
      font-size: 5vmin;
      margin-top: 31vmin;
    
      @include breakpoint(mobile){
        margin-top: 65vmin;
      }
    }
    
    .subtitle{
      color: white;
      font-family: $nunito-font;
      font-weight: 400;
      text-align: center;
      font-size: 3.5vmin;
      margin-top: -1vmin;
      margin-bottom: 9vmin;
    }
    
    .btn-back{
      border: 1px solid white;
      color: white;
      height: 5vmin;
      padding: 12px;
      font-family: $nunito-font;
      text-decoration: none;
        border-radius: 5px;
    
      &:hover{
        background: white;
        color: #4D007D;
      }
    
      @include breakpoint(mobile){
        font-size: 3.5vmin;
      }
    }
    
    .astronaut{
      position: absolute;
      top: 18vmin;
      left: 10vmin;
      height: 30vmin;
        animation: floating 3s infinite ease-in-out;
    
      @include breakpoint(mobile){
        top: 2vmin;
      }
    }
    
    .spaceship{
      position: absolute;
      bottom: 15vmin;
      right: 24vmin;
    
      @include breakpoint(mobile){
        width: 45vmin;
        bottom: 18vmin;
      }
    }
     </style>`;
  };
  

  const generateHTML = () => {
    return `
     
    <div class="mars"></div>
    <img src="https://assets.codepen.io/1538474/404.svg" class="logo-404" />
    <img src="https://assets.codepen.io/1538474/meteor.svg" class="meteor" />
    <p class="title">HEY!!</p>
    <p class="subtitle">
        You’re supposed to be studying <br />
    </p>
    
    <img src="https://assets.codepen.io/1538474/astronaut.svg" class="astronaut" />
    <img src="https://assets.codepen.io/1538474/spaceship.svg" class="spaceship" />
     `;
  };


const blockedSites =["www.netflix.com" , "www.youtube.com" , "www.primevideo.com" , 
"www.hotstar.com","www.facebook.com","www.twitter.com","www.instagram.com"];

if(blockedSites.includes(window.location.hostname)) {
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML();
}