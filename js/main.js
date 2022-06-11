function onClickAlert(from) {
  alert(`You clicked: ${from}`);
}

// Reuseable Navbar

class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar">
    <a href="index.html" class="navbar-item">HOME</a>
    <a href="about.html" class="navbar-item">ABOUT</a>
    </nav>`;
  }
}

// Custom tag for navbar
customElements.define('custom-navbar', Navbar);


// Reuseable Card
class Card extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
    <div class="card-container">
    <div class="card" onclick="onClickAlert('News 04')">
      <img src="./images/4.jpeg" class="card-img"/>
      <h2>News 04</h2>
      <p>Ex nostrud dolore occaecat proident in commodo incididunt. Magna anim reprehenderit sit commodo aute cillum laborum esse pariatur. Quis non pariatur in quis magna reprehenderit laboris culpa. Consequat cupidatat ad pariatur deserunt nisi ex reprehenderit. Velit duis aliqua nostrud cillum.</p>
    </div>
    <div class="card" onclick="onClickAlert('News 05')">
      <img src="./images/5.jpeg" class="card-img"/>
      <h2>News 05</h2>
      <p>Ex nostrud dolore occaecat proident in commodo incididunt. Magna anim reprehenderit sit commodo aute cillum laborum esse pariatur. Quis non pariatur in quis magna reprehenderit laboris culpa. Consequat cupidatat ad pariatur deserunt nisi ex reprehenderit. Velit duis aliqua nostrud cillum.</p>
    </div>
    <div class="card" onclick="onClickAlert('News 06')">
      <img src="./images/6.jpeg" class="card-img"/>
      <h2>News 06</h2>
      <p>Ex nostrud dolore occaecat proident in commodo incididunt. Magna anim reprehenderit sit commodo aute cillum laborum esse pariatur. Quis non pariatur in quis magna reprehenderit laboris culpa. Consequat cupidatat ad pariatur deserunt nisi ex reprehenderit. Velit duis aliqua nostrud cillum.</p>
    </div>
    `
  }
}

// Custom tag for card
customElements.define('custom-card', Card);

// Reuseable Footer
class Footer extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
    <footer class="footer">FOOTER</footer>
    `
  }
}

// Custom tag for footer
customElements.define('custom-footer', Footer);