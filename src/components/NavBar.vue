<template>
<nav class="z-depth-1 lighten-4" style="background-color: cornflowerblue;">
    <div class="nav-wrapper container" style="display: flex; justify-content:space-between;">
      <div>
      <a href="#" class="brand-logo">
        <img src="@/assets/logo.png" style="width: 130px; margin-bottom: 20px;">
      </a>
      </div>
      <div>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li class="logged-in">
            <a href="#" class="white-text modal-trigger" data-target="modal-account">Account</a>
          </li>
          <li class="logged-in">
            <a href="#" class="white-text" id="logout">Logout</a>
          </li>
          <li class="logged-in">
            <a href="#" class="white-text modal-trigger" data-target="modal-create">Create Guide</a>
          </li>
          <li class="logged-out">
            <a href="#" class="white-text modal-trigger" data-target="modal-login">Login</a>
          </li>
          <li class="logged-out">
            <a href="#" class="white-text modal-trigger" data-target="modal-signup">Sign up</a>
          </li>
      </ul>
      </div>
    </div>
  </nav>

  <div id="modal-signup" class="modal">
    <div class="modal-content">
      <h4>Sign up</h4><br />
      <form id="signup-form">
        <div class="input-field">
          <input type="email" id="signup-email" required />
          <label for="signup-email">Email address</label>
        </div>
        <div class="input-field">
          <input type="password" id="signup-password" required />
          <label for="signup-password">Choose password</label>
        </div>
        <button class="btn yellow darken-2 z-depth-0">Sign up</button>
      </form>
    </div>
  </div>

  <div id="modal-login" class="modal">
    <div class="modal-content">
      <h4>Login</h4><br />
      <form id="login-form">
        <div class="input-field">
          <input type="email" id="login-email" required />
          <label for="login-email">Email address</label>
        </div>
        <div class="input-field">
          <input type="password" id="login-password" required />
          <label for="login-password">Your password</label>
        </div>
        <button class="btn yellow darken-2 z-depth-0">Login</button>
      </form>
    </div>
  </div>

  <div id="modal-account" class="modal">
    <div class="modal-content center-align">
      <h4>Account details</h4><br />
      <div class="account-details"></div>
    </div>
  </div>

  <div id="modal-create" class="modal">
    <div class="modal-content">
      <h4>Create Guide</h4><br />
      <form id="create-form">
        <div class="input-field">
          <input type="text" id="title" required>
          <label for="title">Guide Title</label>
        </div>
        <div class="input-field">
          <textarea id="content" class="materialize-textarea" required></textarea>
          <label for="content">Guide Content</label>
        </div>
        <button class="btn yellow darken-2 z-depth-0">Create</button>
      </form>
    </div>
  </div>

  <div class="container" style="margin-top: 40px;">
    <ul class="collapsible z-depth-0 guides" style="border: 0;">
      <li>
        <div class="collapsible-header grey lighten-4">Guide title</div>
        <div class="collapsible-body white">Lorem ipsum dolor sit amet.</div>
      </li>
      <li>
        <div class="collapsible-header grey lighten-4">Guide title</div>
        <div class="collapsible-body white"><span>Lorem ipsum dolor sit amet.</span></div>
      </li>
      <li>
        <div class="collapsible-header grey lighten-4">Guide title</div>
        <div class="collapsible-body white"><span>Lorem ipsum dolor sit amet.</span></div>
      </li>
      <li>
        <div class="collapsible-header grey lighten-4">Guide title</div>
        <div class="collapsible-body white"><span>Lorem ipsum dolor sit amet.</span></div>
      </li>
    </ul>
  </div>
</template>

<script>
import M from 'materialize-css'
document.addEventListener('DOMContentLoaded', function() {

var modals = document.querySelectorAll('.modal');
M.Modal.init(modals);

var items = document.querySelectorAll('.collapsible');
M.Collapsible.init(items);

});export default {

}
</script>


