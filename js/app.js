// mobile menu
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".menu");


// mobile menu event listeners
//btn.addEventListener("click", () => {
//    menu.classList.toggle("hidden");
//});



	// select dom items
	const menuBtn =
		document.querySelector(".menu-btn");

	const menuNav =
		document.querySelector(".menu-nav");

	const menuBranding =
		document.querySelector(".menu-branding");

	const navItems =
		document.querySelectorAll(".nav-item");

	// Set the initial state of the menu
	let showMenu = false;

	menuBtn.addEventListener("click", toggleMenu);

	function toggleMenu() {
		if (!showMenu) {
			menuBtn.classList.add("close");
			menu.classList.add("show");
			menuNav.classList.add("show");
			menuBranding.classList.add("show");
			navItems.forEach((item) =>
				item.classList.add("show"));

			// Reset the menu state
			showMenu = true;
		} else {
			menuBtn.classList.remove("close");
			menu.classList.remove("show");
			menuNav.classList.remove("show");
			menuBranding.classList.remove("show");
			navItems.forEach((item) =>
				item.classList.remove("show"));

			// Reset the menu state
			showMenu = false;
		}
	}

//	menuNav.addEventListener("click", (e) => {
//		const navTarget = e.target;

//		if (showMenu === true && navTarget !== menuNav) {
//		    menuNav.remove("close");
//			showMenu = false;
//		}
//	});
	



	
	

	

	
