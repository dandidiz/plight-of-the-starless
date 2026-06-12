/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {

  console.log('checking sidenav for active links')
  charadex.tools.setActiveLink();
  console.log('✅');

  /* Load Page
  ===================================================================== */
  charadex.tools.loadPage('.softload', 100);
});