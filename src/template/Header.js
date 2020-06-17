const Header = () => {
  const view = `
    <div class = 'Header-main'>
      <div class = 'Header-logo'>
          <a href = '/'>
            <img src = 'https://i.imgur.com/rTqdCJx.png' alt="Rick and Morty"/>
          </a>
      </div>
      <a class = "about" href = '#/about/'>About</a>
      <div class="content-switch">
        <input type="checkbox" id="checkbox" class= "checkbox">
        <label class="switch" for="checkbox" id =  "switch">
        <span><i class="fas fa-sun"></i></span>
        <span><i class="fas fa-moon"></i></span>
        </label>
      </div>
    </div>
  `
  return view
}

export default Header
