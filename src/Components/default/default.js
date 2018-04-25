import React from 'react';


export default function Home() {
    return(
        <div id="instructions" className="paper">
        <div className='sword-focus'>
        <h1 className='bottom-description login-title'>Your adventure starts here! Just grab the sword to begin.</h1>
      <div class="l-container container center">
  <div class="l-sword">
    <div class="l-handle-orb handle-orb"></div>
    <div class="l-handle-block handle-block"></div>
    <div class="l-handle-block-curve handle-block-curve"></div>
    <a href='http://localhost:4042/auth'><div class="l-handle handle"></div></a>
    <div class="l-small-handle-block handle-block"></div>
    <div class="l-large-handle-block-curve handle-block-curve"></div>
    <div class="l-blade">
      <div class="l-blade-top blade-top"></div>
      <div class="l-blade-left blade-left"></div>
      <div class="l-blade-right blade-right"></div>
      <div class="l-blade-bottom blade-bottom"></div>
    </div>
  </div>
</div>
<h6 className="credit">Credit to @djirdehh on twitter for the sword</h6>
        </div>
        </div>
    )
}


// try bootstrap hover button for sword