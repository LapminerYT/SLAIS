addEventListener('DOMContentLoaded', (event) => {
    const header = `
<nav class="menu">
        <div class="menuLogo"><h1>SLAIS</h1></div>
          
        </div>
        <div class="menuButtons">
          <div class="menuButton"></div>
        </div>
      </nav>
      <div class="sideBar">
        <div class="sideBarBox">
          <a class="sideBarLink" href="https://slais.lapminerstudio.repl.co/">Trang chủ</a>

          <div class="sideBarLine"></div>
<a href="https://aislais.lapminerstudio.repl.co/" class="sideBarLink">Trí tuệ nhân tạo</a>
<a href="/Game/" class="sideBarLink">Trò chơi</a>
<a href="https://sites.google.com/view/baigiangslais/trang-ch%E1%BB%A7" class="sideBarLink">Tài liệu</a>
<a href="http://slaisnews.hopto.org/" class="sideBarLink">Tin tức</a>


<div class="sideBarLine"></div>
<a href="https://www.facebook.com/profile.php?id=61553356558436&locale=vi_VN" class="sideBarLink">Fanpage</a>

`;

    const headerContainer = document.querySelector('#header');

    headerContainer.innerHTML = header;

    const menu = document.querySelector('.header');
    const menuButton = document.querySelector('.menuButtons');

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('menuOpen');
    });
});

addEventListener('DOMContentLoaded', (event) => {
    const footer = `
              <div class="footerTop">
                    <div class="container">
                        <p>© SLAIS</p>
                        <p>Make by SLAIS/8A2</p>
<p>The project is still in development - Beta 1.2</p>
                    </div>
                </div>
  `;

    const footerContainer = document.querySelector('#footer');

    footerContainer.innerHTML = footer;
});
