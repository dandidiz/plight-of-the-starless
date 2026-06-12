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
 */
function loadIncludedFiles() {
  $(".load-html").each(function () {
    const target = $(this);
    $.get(this.dataset.source, function (data) {
      target.replaceWith(data);
      console.log("Loaded HTML file:", target);
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
      if(e.href.includes(current)){
        e.classList.add('active');
        e.classList.add('disabled');
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

});