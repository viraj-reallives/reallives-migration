// imapct tab js start

document.addEventListener("DOMContentLoaded", function () {
  const navBtn = document.getElementById("navChangeMaker");
  const innerTab = document.getElementById("innerTab");
  const start1Btn = document.getElementById("start1Btn");
  const start2Btn = document.getElementById("start2Btn");

  const changeMaker = document.getElementById("changeMaker");
  const impactTabInner = document.getElementById("impactTabInner");

  const allNavLinks = document.querySelectorAll(".nav-link");

  let insideChangeMaker = false;

  innerTab.style.display = "none";
  changeMaker.style.display = "none";
  impactTabInner.style.display = "none";

  navBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (insideChangeMaker) {
      innerTab.style.position = "fixed";
      innerTab.style.top = "0%";
      innerTab.style.left = "0";
      innerTab.style.width = "100%";
      innerTab.style.zIndex = "99999";

      innerTab.style.display = "flex";
      changeMaker.style.display = "block";
      impactTabInner.style.display = "none";
    } else {
      innerTab.style.position = "static";
      innerTab.style.display = "flex";

      changeMaker.style.display = "none";
      impactTabInner.style.display = "none";
    }
  });

  start1Btn.addEventListener("click", function (e) {
    e.preventDefault();

    innerTab.style.display = "none";
    changeMaker.style.display = "block";
    impactTabInner.style.display = "none";

    insideChangeMaker = true;
  });

  start2Btn.addEventListener("click", function (e) {
    e.preventDefault();

    innerTab.style.display = "none";
    changeMaker.style.display = "none";
    impactTabInner.style.display = "block";

    insideChangeMaker = false;
  });

  allNavLinks.forEach((link) => {
    if (link.id !== "navChangeMaker") {
      link.addEventListener("click", function () {
        insideChangeMaker = false;

        innerTab.style.display = "none";
        innerTab.style.position = "static";
        changeMaker.style.display = "none";
        impactTabInner.style.display = "none";
      });
    }
  });
});

// imapct js end

// resource tab js start

document.addEventListener("DOMContentLoaded", function () {
  const navBtn = document.getElementById("navResources");
  const resourceInnerTab2 = document.getElementById("resourceInnerTab2");
  const resourceStart1Btn = document.getElementById("resourceStart1Btn");
  const resourceStart2Btn = document.getElementById("resourceStart2Btn");

  const resourcestabcontainer = document.getElementById(
    "resourcestabcontainer",
  );
  const pricingtabcontainer = document.getElementById("pricingtabcontainer");

  const allNavLinks = document.querySelectorAll(".nav-link");

  let insideChangeMaker = false;

  resourceInnerTab2.style.display = "none";
  resourcestabcontainer.style.display = "none";
  pricingtabcontainer.style.display = "none";

  navBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (insideChangeMaker) {
      resourceInnerTab2.style.position = "fixed";
      resourceInnerTab2.style.top = "0%";
      resourceInnerTab2.style.left = "0";
      resourceInnerTab2.style.width = "100%";
      resourceInnerTab2.style.zIndex = "99999";

      resourceInnerTab2.style.display = "flex";
      resourcestabcontainer.style.display = "block";
      pricingtabcontainer.style.display = "none";
    } else {
      resourceInnerTab2.style.position = "static";
      resourceInnerTab2.style.display = "flex";

      resourcestabcontainer.style.display = "none";
      pricingtabcontainer.style.display = "none";
    }
  });

  resourceStart1Btn.addEventListener("click", function (e) {
    e.preventDefault();

    resourceInnerTab2.style.display = "none";
    resourcestabcontainer.style.display = "block";
    pricingtabcontainer.style.display = "none";

    insideChangeMaker = true;
  });

  resourceStart2Btn.addEventListener("click", function (e) {
    e.preventDefault();

    resourceInnerTab2.style.display = "none";
    resourcestabcontainer.style.display = "none";
    pricingtabcontainer.style.display = "block";

    insideChangeMaker = false;
  });

  allNavLinks.forEach((link) => {
    if (link.id !== "navResources") {
      link.addEventListener("click", function () {
        insideChangeMaker = false;

        resourceInnerTab2.style.display = "none";
        resourceInnerTab2.style.position = "static";
        resourcestabcontainer.style.display = "none";
        pricingtabcontainer.style.display = "none";
      });
    }
  });
});

// resorces tab js end

// About tab js start

document.addEventListener("DOMContentLoaded", function () {
  const navBtn = document.getElementById("navidcompaney");
  const resourceInnerTab2 = document.getElementById("companyTab");
  const resourceStart1Btn = document.getElementById("commpaneytabbtn1");
  const resourceStart2Btn = document.getElementById("commpaneytabbtn2");

  const resourcestabcontainer = document.getElementById("aboutidtab");
  const pricingtabcontainer = document.getElementById("contactidtab");

  const allNavLinks = document.querySelectorAll(".nav-link");

  let insideChangeMaker = false;

  resourceInnerTab2.style.display = "none";
  resourcestabcontainer.style.display = "none";
  pricingtabcontainer.style.display = "none";

  navBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (insideChangeMaker) {
      resourceInnerTab2.style.position = "fixed";
      resourceInnerTab2.style.top = "0%";
      resourceInnerTab2.style.left = "0";
      resourceInnerTab2.style.width = "100%";
      resourceInnerTab2.style.zIndex = "99999";

      resourceInnerTab2.style.display = "flex";
      resourcestabcontainer.style.display = "block";
      pricingtabcontainer.style.display = "none";
    } else {
      resourceInnerTab2.style.position = "static";
      resourceInnerTab2.style.display = "flex";

      resourcestabcontainer.style.display = "none";
      pricingtabcontainer.style.display = "none";
    }
  });

  resourceStart1Btn.addEventListener("click", function (e) {
    e.preventDefault();

    resourceInnerTab2.style.display = "none";
    resourcestabcontainer.style.display = "block";
    pricingtabcontainer.style.display = "none";

    insideChangeMaker = true;
  });

  resourceStart2Btn.addEventListener("click", function (e) {
    e.preventDefault();

    resourceInnerTab2.style.display = "none";
    resourcestabcontainer.style.display = "none";
    pricingtabcontainer.style.display = "block";

    insideChangeMaker = false;
  });

  allNavLinks.forEach((link) => {
    if (link.id !== "navidcompaney") {
      link.addEventListener("click", function () {
        insideChangeMaker = false;

        resourceInnerTab2.style.display = "none";
        resourceInnerTab2.style.position = "static";
        resourcestabcontainer.style.display = "none";
        pricingtabcontainer.style.display = "none";
      });
    }
  });
});

// About tab js end

// footer javascript  pricing tab

document.addEventListener("DOMContentLoaded", function () {
  const footerButtons = document.querySelectorAll(".footer-tab-trigger");

  footerButtons.forEach((btn) => {
    btn.onclick = function (e) {
      e.preventDefault();

      const mainNavBtn = document.getElementById("navResources");

      if (mainNavBtn) {
        mainNavBtn.click();

        const impactSection = document.getElementById("impact");
        if (impactSection) {
          impactSection.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.location.href = "index.html?open=research#impact";
      }
    };
  });

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("open") === "research") {
    setTimeout(() => {
      const mainNavBtn = document.getElementById("navResources");
      if (mainNavBtn) mainNavBtn.click();
    }, 500);
  }
});

// about  contact  footer js

document.addEventListener("DOMContentLoaded", function () {
  const footerButtons1 = document.querySelectorAll(".footer-tab-trigger-2");
  footerButtons1.forEach((btn) => {
    btn.onclick = function (e) {
      e.preventDefault();

      const mainNavBtn = document.getElementById("navidcompaney");

      if (mainNavBtn) {
        mainNavBtn.click();

        const impactSection = document.getElementById("pricing");
        if (impactSection) {
          impactSection.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.location.href = "index.html?open=research#pricing";
      }
    };
  });

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("open") === "research") {
    setTimeout(() => {
      const mainNavBtn = document.getElementById("navidcompaney");
      if (mainNavBtn) mainNavBtn.click();
    }, 500);
  }
});

// footer changemaker project link

document.addEventListener("DOMContentLoaded", function () {
  const footerButtons2 = document.querySelectorAll(".footer-tab-trigger-3");

  footerButtons2.forEach((btn) => {
    btn.onclick = function (e) {
      e.preventDefault();

      const mainNavBtn = document.getElementById("navChangeMaker");

      if (mainNavBtn) {
        mainNavBtn.click();

        const impactSection = document.getElementById("educater");
        if (impactSection) {
          impactSection.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.location.href = "index.html?open=research#educater";
      }
    };
  });

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("open") === "research") {
    setTimeout(() => {
      const mainNavBtn = document.getElementById("navChangeMaker");
      if (mainNavBtn) mainNavBtn.click();
    }, 500);
  }
});

// footer javascript


// navigation arrow js 

document.addEventListener("DOMContentLoaded", () => {
  const allNavLinks = document.querySelectorAll(".nav-link");
  const arrowLinks = document.querySelectorAll(".nav-link-with-arrow");

  allNavLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const hasArrow = this.classList.contains("active-arrow");

      arrowLinks.forEach((item) => {
        item.classList.remove("active-arrow");
      });

      if (this.classList.contains("nav-link-with-arrow") && !hasArrow) {
        this.classList.add("active-arrow");
      }
    });
  });

  const infoIcon = document.getElementById("infoIcon");
  const toolInfo = document.getElementById("toolInfo");
  if (infoIcon && toolInfo) {
    infoIcon.onclick = () => {
      toolInfo.style.display =
        toolInfo.style.display === "none" || toolInfo.style.display === ""
          ? "block"
          : "none";
    };
  }
});

// navigation arrow js 


// foundation imapct slider js  school

const allImpactContainers = document.querySelectorAll(
  ".impact-slider-container",
);

allImpactContainers.forEach((container) => {
  const sliderImages = container.querySelectorAll(".impact-slider");
  let currentSlide = 0;

  if (sliderImages.length > 0) {
    function cycleImages() {
      sliderImages[currentSlide].classList.remove("active-slider");

      currentSlide = (currentSlide + 1) % sliderImages.length;

      sliderImages[currentSlide].classList.add("active-slider");
    }

    setInterval(cycleImages, 3000);
  }
});

// foundation imapct slider js  school


// larne more btn school foundation click event  start 


function handleImpactClick() {
    // 1. Instant Tab Click
    const mainTabBtn = document.getElementById('navChangeMaker'); 
    if (mainTabBtn) {
        mainTabBtn.click();
    }

    // 2. Doosre tab ko turant hide karein
    const otherTab = document.getElementById('innerTab');
    if (otherTab) {
        otherTab.style.display = 'none'; 
    }

    // 3. Fast Scroll Logic
    const targetContent = document.getElementById('impactTabInner');
    if (targetContent) {
        // Display ko pehle hi block kar dein taaki height calculate ho sake
        targetContent.style.display = 'block'; 

        // Delay ko 350ms se ghata kar 50ms-100ms kar dein (Halka sa gap animation ke liye zaroori hai)
        setTimeout(() => {
            targetContent.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }, 100); // Sirf 100ms ka delay, jo bilkul instant feel hoga
    }
}


// larne more btn school foundation click event  end


  