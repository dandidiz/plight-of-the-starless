/* ==================================================================== */
/* Import Utilities
======================================================================= */
import { charadex } from '../utilities.js';

/* ==================================================================== */
/* Declare Functions
======================================================================= */
/**
 * Load other .html files via include.
 * Includes replace the entire div.
 * 
 * To use this, create the HTML file you want to import
 * Then using a div, give it a class load-html and
 * data-source of where the html file lives.
 * 
 * Example:
 * <div class="load-html" data-source="/charadex-rp/includes/header.html"></div>
 */
function loadIncludedFiles() {
  $(".load-html").each(function () {
    const target = $(this);
    $.get(this.dataset.source, function (data) {
      target.replaceWith(data);
      console.log("Loaded HTML file:", target);
      
      setActiveLink();
    });
  });
}

/**
 * Check if the path is in the current URL
 * @param {String} parentId The id of the parent navigation element.
 * @param {String} childClass The class of the child elements.
 */
function setActiveLink(parentId = 'sidebar', childClass = '.nav-link') {
  const current = window.location.href;
  let parent = document.getElementById(parentId);
  if (parent) {
    parent.querySelectorAll(childClass).forEach(function(e){ 
      if(current.includes(e.href)){
        e.classList.add('active');
      }
    });
  }
}

/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  console.log('======== Running base.js script ========');
  console.log('loading included files...');
  loadIncludedFiles();
  console.log('✅');

  console.log('setting active links...');
  setActiveLink();
  console.log('✅');

  console.log('updating meta...')
  charadex.tools.updateMeta();
  console.log('✅');

  charadex.tools.loadPage('html', 500, '')

  window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    document.documentElement.style.setProperty("--hue-shift", `${360 - scrollPosition * 360}deg`);
  });

});