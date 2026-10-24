(() => {
  const languages = [
    {
      code: "en",
      label: "English",
      flag: '<svg viewBox="0 0 30 20" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="30" height="20" fill="#21468b"/><path d="M0 0 30 20M30 0 0 20" stroke="#fff" stroke-width="4.5"/><path d="M0 0 30 20M30 0 0 20" stroke="#c8102e" stroke-width="2"/><path d="M15 0v20M0 10h30" stroke="#fff" stroke-width="7"/><path d="M15 0v20M0 10h30" stroke="#c8102e" stroke-width="3.5"/></svg>'
    },
    {
      code: "fr",
      label: "Français",
      flag: '<svg viewBox="0 0 30 20" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="10" height="20" fill="#002654"/><rect x="10" width="10" height="20" fill="#fff"/><rect x="20" width="10" height="20" fill="#ed2939"/></svg>'
    },
    {
      code: "es",
      label: "Español",
      flag: '<svg viewBox="0 0 30 20" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="30" height="5" fill="#aa151b"/><rect y="5" width="30" height="10" fill="#f1bf00"/><rect y="15" width="30" height="5" fill="#aa151b"/></svg>'
    },
    {
      code: "de",
      label: "Deutsch",
      flag: '<svg viewBox="0 0 30 20" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="30" height="6.67" fill="#000"/><rect y="6.67" width="30" height="6.66" fill="#d00"/><rect y="13.33" width="30" height="6.67" fill="#ffce00"/></svg>'
    }
  ];
  const selectorLabels = {
    en: { button: "Choose language", menu: "Select a language" },
    fr: { button: "Choisir la langue", menu: "Sélectionner une langue" },
    de: { button: "Sprache auswählen", menu: "Sprache auswählen" },
    es: { button: "Elegir idioma", menu: "Seleccionar un idioma" }
  };
  const routeFor = (language, page) => {
    if (page === "/") return language === "en" ? "/" : `/${language}/`;
    if (page === "/football") {
      return {
        en: "/football",
        fr: "/fr/football",
        de: "/de/fussball",
        es: "/es/futbol"
      }[language];
    }
    const translatedPages = {
      "/movies-entertainment": {
        en: "/movies-entertainment",
        fr: "/fr/films-et-divertissement",
        de: "/de/filme-und-unterhaltung",
        es: "/es/peliculas-y-entretenimiento"
      },
      "/pages/reseller": {
        en: "/pages/reseller",
        fr: "/fr/pages/revendeur",
        de: "/de/pages/wiederverkaeufer",
        es: "/es/pages/revendedor"
      },
      "/contact": {
        en: "/contact",
        fr: "/fr/contact",
        de: "/de/kontakt",
        es: "/es/contacto"
      },
      "/pages/how-to-install-iptv": {
        en: "/pages/how-to-install-iptv",
        fr: "/fr/pages/installation-iptv",
        de: "/de/pages/iptv-installieren",
        es: "/es/pages/instalar-iptv"
      },
      "/pages/how-to-install-iptv/downloader-guide": {
        en: "/pages/how-to-install-iptv/downloader-guide",
        fr: "/fr/pages/guide-downloader-firestick",
        de: "/de/pages/downloader-firestick-anleitung",
        es: "/es/pages/guia-downloader-firestick"
      },
      "/pages/how-to-install-iptv/iptv-smarters-pro": {
        en: "/pages/how-to-install-iptv/iptv-smarters-pro",
        fr: "/fr/pages/iptv-smarters-pro",
        de: "/de/pages/iptv-smarters-pro-anleitung",
        es: "/es/pages/iptv-smarters-pro-guia"
      },
      "/pages/how-to-install-iptv/smarters-player-on-amazon-firestick": {
        en: "/pages/how-to-install-iptv/smarters-player-on-amazon-firestick",
        fr: "/fr/pages/code-downloader-iptv-smarters-firestick",
        de: "/de/pages/smarters-player-auf-firestick-anleitung",
        es: "/es/pages/codigo-downloader-iptv-smarters-firestick"
      },
      "/pages/privacy-policy": {
        en: "/pages/privacy-policy",
        fr: "/fr/pages/politique-de-confidentialite",
        de: "/de/pages/datenschutzerklaerung",
        es: "/es/pages/politica-de-privacidad"
      },
      "/pages/refund-policy": {
        en: "/pages/refund-policy",
        fr: "/fr/pages/politique-de-remboursement",
        de: "/de/pages/erstattungsrichtlinie",
        es: "/es/pages/politica-de-reembolso"
      },
      "/pages/terms-of-use": {
        en: "/pages/terms-of-use",
        fr: "/fr/pages/conditions-d-utilisation",
        de: "/de/pages/nutzungsbedingungen",
        es: "/es/pages/condiciones-de-uso"
      }
    };
    if (translatedPages[page]) return translatedPages[page][language] || page;
    const localizedPath = Object.values(translatedPages).find((routes) => routes[language] === page);
    if (localizedPath) return localizedPath.en;
    return page;
  };
  const normalizedPath = (path) => {
    const withoutIndex = path.replace(/\/index\.html$/i, "/");
    const withoutExtension = withoutIndex.replace(/\.html$/i, "");
    return withoutExtension.replace(/\/+$/, "") || "/";
  };
  const canonicalPages = {
    "/": "/",
    "/football": "/football",
    "/fussball": "/football",
    "/futbol": "/football",
    "/movies-entertainment": "/movies-entertainment",
    "/films-et-divertissement": "/movies-entertainment",
    "/filme-und-unterhaltung": "/movies-entertainment",
    "/peliculas-y-entretenimiento": "/movies-entertainment",
    "/pages/reseller": "/pages/reseller",
    "/pages/revendeur": "/pages/reseller",
    "/pages/wiederverkaeufer": "/pages/reseller",
    "/pages/revendedor": "/pages/reseller",
    "/contact": "/contact",
    "/kontakt": "/contact",
    "/contacto": "/contact",
    "/pages/how-to-install-iptv": "/pages/how-to-install-iptv",
    "/pages/installation-iptv": "/pages/how-to-install-iptv",
    "/pages/iptv-installieren": "/pages/how-to-install-iptv",
    "/pages/instalar-iptv": "/pages/how-to-install-iptv",
    "/pages/privacy-policy": "/pages/privacy-policy",
    "/pages/politique-de-confidentialite": "/pages/privacy-policy",
    "/pages/datenschutzerklaerung": "/pages/privacy-policy",
    "/pages/politica-de-privacidad": "/pages/privacy-policy",
    "/pages/refund-policy": "/pages/refund-policy",
    "/pages/politique-de-remboursement": "/pages/refund-policy",
    "/pages/erstattungsrichtlinie": "/pages/refund-policy",
    "/pages/politica-de-reembolso": "/pages/refund-policy",
    "/pages/terms-of-use": "/pages/terms-of-use",
    "/pages/conditions-d-utilisation": "/pages/terms-of-use",
    "/pages/nutzungsbedingungen": "/pages/terms-of-use",
    "/pages/condiciones-de-uso": "/pages/terms-of-use",
    "/pages/how-to-install-iptv/downloader-guide": "/pages/how-to-install-iptv/downloader-guide",
    "/pages/how-to-install-iptv/smarters-player-on-amazon-firestick": "/pages/how-to-install-iptv/smarters-player-on-amazon-firestick",
    "/pages/guide-downloader-firestick": "/pages/how-to-install-iptv/downloader-guide",
    "/pages/downloader-firestick-anleitung": "/pages/how-to-install-iptv/downloader-guide",
    "/pages/guia-downloader-firestick": "/pages/how-to-install-iptv/downloader-guide",
    "/pages/how-to-install-iptv/iptv-smarters-pro": "/pages/how-to-install-iptv/iptv-smarters-pro",
    "/pages/iptv-smarters-pro": "/pages/how-to-install-iptv/iptv-smarters-pro",
    "/pages/iptv-smarters-pro-anleitung": "/pages/how-to-install-iptv/iptv-smarters-pro",
    "/pages/iptv-smarters-pro-guia": "/pages/how-to-install-iptv/iptv-smarters-pro",
    "/pages/how-to-install-iptv/smarters-player-on-amazon-firestick": "/pages/how-to-install-iptv/smarters-player-on-amazon-firestick",
    "/pages/code-downloader-iptv-smarters-firestick": "/pages/how-to-install-iptv/smarters-player-on-amazon-firestick",
    "/pages/smarters-player-auf-firestick-anleitung": "/pages/how-to-install-iptv/smarters-player-on-amazon-firestick",
    "/pages/codigo-downloader-iptv-smarters-firestick": "/pages/how-to-install-iptv/smarters-player-on-amazon-firestick",
    "/pages/iptv-installation-guide": "/pages/how-to-install-iptv"
  };
  const canonicalPage = (path) => {
    const page = normalizedPath(path).replace(/^\/(?:fr|de|es)(?=\/|$)/, "") || "/";
    return canonicalPages[page] || page;
  };
  const currentPage = () => canonicalPage(window.location.pathname);
  const currentLanguage = () => {
    const match = window.location.pathname.match(/^\/(fr|de|es)(?:\/|$)/);
    return match ? match[1] : "en";
  };

  // Rewrite known translated destinations only; unknown paths remain untouched.
  document.querySelectorAll('a[href]').forEach((link) => {
    const target = new URL(link.href, window.location.origin);
    if (target.origin !== window.location.origin || target.pathname.startsWith("/assets/")) return;
    const path = normalizedPath(target.pathname).replace(/^\/(?:fr|de|es)(?=\/|$)/, "") || "/";
    const page = canonicalPage(target.pathname);
    if (!canonicalPages[path] && path !== "/") return;
    const localizedTarget = routeFor(currentLanguage(), page);
    if (!localizedTarget || localizedTarget === page && page !== "/") return;
    target.pathname = localizedTarget;
    link.href = target.href;
  });

    const page = currentPage();
    const language = currentLanguage();
    const activeLanguage = languages.find((item) => item.code === language) || languages[0];
    const switcher = document.createElement("div");
    switcher.className = "language-switcher";
    switcher.innerHTML = `
      <button class="language-switcher__toggle" type="button"
        aria-expanded="false" aria-controls="language-menu">
        <span class="language-switcher__active-flag" aria-hidden="true">${activeLanguage.flag}</span>
        <span class="language-switcher__active-code" aria-hidden="true">${activeLanguage.code.toUpperCase()}</span>
      </button>
      <div class="language-switcher__menu" id="language-menu" role="group"
        aria-hidden="true" hidden inert></div>
    `;

    const toggle = switcher.querySelector(".language-switcher__toggle");
    const menu = switcher.querySelector(".language-switcher__menu");
    toggle.setAttribute("aria-label", selectorLabels[language].button);
    menu.setAttribute("aria-label", selectorLabels[language].menu);
    let closeTimer;

    languages.forEach((language) => {
      const option = document.createElement("a");
      option.className = "language-switcher__option";
      const target = new URL(routeFor(language.code, page), window.location.origin);
      target.search = window.location.search;
      target.hash = window.location.hash;
      option.href = target.href;
      option.setAttribute("aria-label", language.label);
      if (language.code === currentLanguage()) option.setAttribute("aria-current", "page");
      option.innerHTML = `<span class="language-switcher__flag" aria-hidden="true">${language.flag}</span>
        <span class="language-switcher__code" aria-hidden="true">${language.code.toUpperCase()}</span>`;
      menu.append(option);
    });

    const options = Array.from(menu.querySelectorAll(".language-switcher__option"));
    const setOpen = (open) => {
      window.clearTimeout(closeTimer);
      toggle.setAttribute("aria-expanded", String(open));

      if (open) {
        menu.hidden = false;
        menu.inert = false;
        options.forEach((option) => option.removeAttribute("tabindex"));
        menu.setAttribute("aria-hidden", "false");
        requestAnimationFrame(() => {
          if (toggle.getAttribute("aria-expanded") === "true") switcher.dataset.open = "true";
        });
        return;
      }

      delete switcher.dataset.open;
      menu.inert = true;
      options.forEach((option) => option.setAttribute("tabindex", "-1"));
      menu.setAttribute("aria-hidden", "true");
      closeTimer = window.setTimeout(() => {
        if (toggle.getAttribute("aria-expanded") === "false") menu.hidden = true;
      }, 500);
    };

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        event.preventDefault();
        setOpen(false);
        toggle.focus();
      }
    });

    switcher.addEventListener("keydown", (event) => {
      if (event.target === toggle && ["ArrowUp", "ArrowRight"].includes(event.key)) {
        event.preventDefault();
        setOpen(true);
        requestAnimationFrame(() => {
          if (toggle.getAttribute("aria-expanded") === "true") options[0].focus();
        });
        return;
      }

      const currentIndex = options.indexOf(event.target);
      if (currentIndex < 0) return;

      if (["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"].includes(event.key)) {
        event.preventDefault();
        const direction = ["ArrowUp", "ArrowLeft"].includes(event.key) ? -1 : 1;
        options[(currentIndex + direction + options.length) % options.length].focus();
      } else if (event.key === "Home") {
        event.preventDefault();
        options[0].focus();
      } else if (event.key === "End") {
        event.preventDefault();
        options[options.length - 1].focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (!switcher.contains(event.target) && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
      }
    });

    menu.addEventListener("click", (event) => {
      const option = event.target.closest(".language-switcher__option");
      if (!option) return;

      setOpen(false);
    });

    document.body.append(switcher);
})();
