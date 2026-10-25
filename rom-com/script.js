
"use strict";

/* =========================================
   BETWEEN THE PAGES
   Interactive romance book library
   ========================================= */

const BOOKS = [
  {
    id: "twisted-love",
    title: "Twisted Love",
    author: "Ana Huang",
    isbn: "9781728274867",
    rating: 4.1,
    reviews: 1200,
    spice: 4,
    label: "BOOKTOK FAVE",
    year: 2021,
    tropes: ["Billionaire", "Forced proximity", "Dark romance"],
    warnings: ["Possessiveness", "Violence", "Grief"],
    description: "Ava and Alex are opposites drawn together by a past full of secrets. A dramatic contemporary romance with intense chemistry.",
    series: "Twisted series"
  },
  {
    id: "the-love-hypothesis",
    title: "The Love Hypothesis",
    author: "Ali Hazelwood",
    isbn: "9780593336823",
    rating: 4.0,
    reviews: 980,
    spice: 3,
    label: "READER FAVORITE",
    year: 2021,
    tropes: ["Enemies to lovers", "Fake dating", "Slow burn"],
    warnings: ["Workplace power dynamics", "Sexual content"],
    description: "A fake relationship between a PhD candidate and a grumpy professor becomes unexpectedly complicated.",
    series: "Standalone"
  },
  {
    id: "icebreaker",
    title: "Icebreaker",
    author: "Hannah Grace",
    isbn: "9781668026038",
    rating: 4.0,
    reviews: 850,
    spice: 4,
    label: "SPORTS ROMANCE",
    year: 2022,
    tropes: ["Sports romance", "Forced proximity", "Friends to lovers"],
    warnings: ["Sexual content", "Alcohol use"],
    description: "A figure skater and a hockey captain find themselves sharing ice time, leading to unexpected chemistry.",
    series: "Maple Hills series"
  },
  {
    id: "the-fine-print",
    title: "The Fine Print",
    author: "Lauren Asher",
    isbn: "9781538724736",
    rating: 4.0,
    reviews: 760,
    spice: 4,
    label: "BILLIONAIRE",
    year: 2021,
    tropes: ["Billionaire", "Enemies to lovers", "Forced proximity"],
    warnings: ["Grief", "Workplace power dynamics", "Sexual content"],
    description: "A demanding billionaire meets the creative employee who challenges everything he thinks he wants.",
    series: "Dreamland Billionaires"
  },
  {
    id: "seven-husbands",
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    isbn: "9781501161933",
    rating: 4.4,
    reviews: 1500,
    spice: 2,
    label: "UNFORGETTABLE",
    year: 2017,
    tropes: ["Forbidden love", "Friends to lovers", "Slow burn"],
    warnings: ["Homophobia", "Abuse", "Loss"],
    description: "An aging Hollywood icon reveals the truth behind her glamorous life and seven marriages.",
    series: "Standalone"
  },
  {
    id: "it-ends-with-us",
    title: "It Ends with Us",
    author: "Colleen Hoover",
    isbn: "9781501110368",
    rating: 4.0,
    reviews: 1400,
    spice: 3,
    label: "EMOTIONAL",
    year: 2016,
    tropes: ["Second chance", "Love triangle", "Friends to lovers"],
    warnings: ["Domestic abuse", "Trauma", "Violence"],
    description: "Lily's new relationship forces her to confront painful memories and difficult choices about love.",
    series: "Standalone"
  },
  {
    id: "fourth-wing",
    title: "Fourth Wing",
    author: "Rebecca Yarros",
    isbn: "9781649374042",
    rating: 4.4,
    reviews: 1300,
    spice: 3,
    label: "ROMANTASY",
    year: 2023,
    tropes: ["Enemies to lovers", "Fantasy romance", "Forced proximity"],
    warnings: ["Violence", "Death", "War"],
    description: "A young woman enters a brutal dragon-rider academy where survival and attraction are equally dangerous.",
    series: "The Empyrean"
  },
  {
    id: "acotar",
    title: "A Court of Thorns and Roses",
    author: "Sarah J. Maas",
    isbn: "9781619634442",
    rating: 4.2,
    reviews: 1100,
    spice: 3,
    label: "FANTASY ROMANCE",
    year: 2015,
    tropes: ["Fantasy romance", "Enemies to lovers", "Forced proximity"],
    warnings: ["Violence", "Captivity", "Death"],
    description: "A mortal huntress enters a dangerous faerie world, where hatred, magic, and attraction intertwine.",
    series: "A Court of Thorns and Roses"
  },
  {
    id: "cruel-prince",
    title: "The Cruel Prince",
    author: "Holly Black",
    isbn: "9780316310277",
    rating: 4.1,
    reviews: 900,
    spice: 1,
    label: "FAERIE INTRIGUE",
    year: 2018,
    tropes: ["Fantasy romance", "Enemies to lovers", "Slow burn"],
    warnings: ["Bullying", "Violence", "Political intrigue"],
    description: "A mortal girl navigates the treacherous politics of the faerie court and her rivalry with a cruel prince.",
    series: "The Folk of the Air"
  },
  {
    id: "spanish-love-deception",
    title: "The Spanish Love Deception",
    author: "Elena Armas",
    isbn: "9781668002520",
    rating: 3.9,
    reviews: 680,
    spice: 3,
    label: "FAKE DATING",
    year: 2021,
    tropes: ["Enemies to lovers", "Fake dating", "Slow burn"],
    warnings: ["Sexual content", "Workplace conflict"],
    description: "A woman brings her infuriating colleague to a family wedding in Spain, pretending he is her boyfriend.",
    series: "Standalone"
  },
  {
    id: "things-we-never-got-over",
    title: "Things We Never Got Over",
    author: "Lucy Score",
    isbn: "9781728274867",
    rating: 4.0,
    reviews: 730,
    spice: 3,
    label: "SMALL TOWN",
    year: 2022,
    tropes: ["Forced proximity", "Grumpy x sunshine", "Slow burn"],
    warnings: ["Family conflict", "Violence", "Sexual content"],
    description: "A runaway bride gets stranded in a small town with a grumpy barber who never planned to fall for anyone.",
    series: "Knockemout series"
  },
  {
    id: "king-of-wrath",
    title: "King of Wrath",
    author: "Ana Huang",
    isbn: "9781728274867",
    rating: 4.0,
    reviews: 650,
    spice: 4,
    label: "ARRANGED MARRIAGE",
    year: 2022,
    tropes: ["Billionaire", "Forced proximity", "Enemies to lovers"],
    warnings: ["Blackmail", "Family pressure", "Sexual content"],
    description: "A powerful billionaire and a woman determined to protect her independence enter an arranged marriage.",
    series: "Kings of Sin"
  }
];

const STORAGE_KEYS = {
  saved: "btp_saved_books_v1",
  reviews: "btp_reviews_v1"
};

const $ = (selector) => document.querySelector(selector);

const elements = {
  search: $("#search-input"),
  clearSearch: $("#clear-search"),
  sort: $("#sort-select"),
  tropeFilters: $("#trope-filters"),
  bookGrid: $("#book-grid"),
  bookCount: $("#book-count"),
  resultsLabel: $("#results-label"),
  empty: $("#empty-state"),
  emptyReset: $("#empty-reset"),
  readingGrid: $("#reading-grid"),
  readingEmpty: $("#reading-empty"),
  readingCount: $("#reading-count"),
  readingTabs: $("#reading-tabs"),
  savedCount: $("#saved-count"),
  recommendationGrid: $("#recommendation-grid"),
  recommendationNote: $("#recommendation-note"),
  refreshRecommendations: $("#refresh-recommendations"),
  dialog: $("#book-dialog"),
  dialogContent: $("#dialog-content"),
  closeDialog: $("#close-dialog"),
  toast: $("#toast")
};

let activeTrope = "all";
let activeReadingStatus = "all";
let currentBookId = null;
let toastTimer;

/* =========================================
   SAFE STORAGE
   ========================================= */

function loadStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch (error) {
    console.warn("Could not read local storage:", error);
    return fallback;
  }
}

let savedBooks = loadStorage(STORAGE_KEYS.saved, {});
let readerReviews = loadStorage(STORAGE_KEYS.reviews, {});

if (!savedBooks || typeof savedBooks !== "object" || Array.isArray(savedBooks)) {
  savedBooks = {};
}

if (!readerReviews || typeof readerReviews !== "object" || Array.isArray(readerReviews)) {
  readerReviews = {};
}

function persist(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error("Could not save data:", error);
    showToast("Could not save. Check your browser storage settings.");
    return false;
  }
}

/* =========================================
   GENERAL HELPERS
   ========================================= */

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function getBook(id) {
  return BOOKS.find((book) => book.id === id);
}

function getSaved(id) {
  return savedBooks[id] || null;
}

function getReviews(id) {
  const reviews = readerReviews[id];
  return Array.isArray(reviews) ? reviews : [];
}

function averageRating(book) {
  const reviews = getReviews(book.id);

  if (!reviews.length) {
    return book.rating;
  }

  const total = book.rating * book.reviews +
    reviews.reduce((sum, review) => sum + Number(review.rating || 0), 0);

  return total / (book.reviews + reviews.length);
}

function ratingMarkup(rating) {
  const fullStars = Math.round(rating);
  return "★".repeat(fullStars) + "☆".repeat(5 - fullStars);
}

function spiceLabel(level) {
  return ["Closed door", "Mild", "Low–moderate", "Open door", "Steamy", "Very steamy"][level] || "Not rated";
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    elements.toast.classList.remove("visible");
  }, 2600);
}

function escapeSelector(value) {
  if (window.CSS && typeof window.CSS.escape === "function") {
    return window.CSS.escape(value);
  }
  return String(value).replace(/[^a-zA-Z0-9_-]/g, "\\$&");
}

function coverMarkup(book, extraClass = "") {
  const title = escapeHTML(book.title);
  const author = escapeHTML(book.author);
  const isbn = escapeHTML(book.isbn);
  const imageURL = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;

  return `
    <div class="book-cover ${extraClass}" data-book-id="${escapeHTML(book.id)}">
      <img src="${imageURL}"
           alt="Cover of ${title} by ${author}"
           loading="lazy"
           onerror="this.hidden=true;this.nextElementSibling.hidden=false">
      <div class="cover-placeholder" hidden>
        <span>${title}<small>${author}</small></span>
      </div>
      ${book.label ? `<span class="cover-tag">${escapeHTML(book.label)}</span>` : ""}
      <button class="save-button ${getSaved(book.id) ? "saved" : ""}"
        type="button" data-action="save" data-id="${escapeHTML(book.id)}"
        aria-label="${getSaved(book.id) ? "Remove from" : "Add to"} reading list"
        aria-pressed="${Boolean(getSaved(book.id))}">${getSaved(book.id) ? "♥" : "♡"}</button>
    </div>
  `;
}

/* =========================================
   BOOK CARDS
   ========================================= */

function bookCardMarkup(book, options = {}) {
  const rating = averageRating(book);
  const isSaved = Boolean(getSaved(book.id));
  const isReadingList = options.readingList === true;

  return `
    <article class="book-card">
      ${coverMarkup(book)}
      <div class="book-info">
        <p class="book-author">${escapeHTML(book.author)}</p>
        <h3 class="book-title">
          <button type="button" data-action="details"
            data-id="${escapeHTML(book.id)}">${escapeHTML(book.title)}</button>
        </h3>

        <div class="book-rating" aria-label="${rating.toFixed(1)} out of 5 stars">
          <span aria-hidden="true">${ratingMarkup(rating)}</span>
          <small>${rating.toFixed(1)} (${book.reviews + getReviews(book.id).length})</small>
        </div>

        <div class="card-tags">
          <span class="tag spice">♨ ${book.spice}/5 · ${spiceLabel(book.spice)}</span>
          <span class="tag">${book.year}</span>
        </div>

        <div class="card-tags">
          ${book.tropes.slice(0, 2).map((trope) =>
            `<span class="tag">${escapeHTML(trope)}</span>`
          ).join("")}
        </div>

        ${isReadingList ? `
          <label class="status-label">
            <select class="status-select" data-action="status"
              data-id="${escapeHTML(book.id)}"
              aria-label="Reading status for ${escapeHTML(book.title)}">
              <option value="want" ${getSaved(book.id)?.status === "want" ? "selected" : ""}>♡ Want to read</option>
              <option value="reading" ${getSaved(book.id)?.status === "reading" ? "selected" : ""}>📖 Currently reading</option>
              <option value="finished" ${getSaved(book.id)?.status === "finished" ? "selected" : ""}>✓ Finished</option>
            </select>
          </label>
        ` : ""}

        <div class="card-bottom">
          <button type="button" class="button button-primary"
            data-action="details" data-id="${escapeHTML(book.id)}">Read more</button>
          <button type="button" class="button button-outline details-button"
            data-action="review" data-id="${escapeHTML(book.id)}">★ Rate</button>
        </div>
      </div>
    </article>
  `;
}

/* =========================================
   SEARCH, TROPE FILTERS AND SORTING
   ========================================= */

function getFilteredBooks() {
  const query = elements.search.value.trim().toLowerCase();
  const sort = elements.sort.value;

  let books = BOOKS.filter((book) => {
    const searchable = [
      book.title,
      book.author,
      ...book.tropes,
      ...book.warnings,
      book.description
    ].join(" ").toLowerCase();

    const matchesSearch = searchable.includes(query);
    const matchesTrope = activeTrope === "all" ||
      book.tropes.includes(activeTrope);

    return matchesSearch && matchesTrope;
  });

  if (sort === "rating") {
    books.sort((a, b) => averageRating(b) - averageRating(a));
  } else if (sort === "title") {
    books.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "spice") {
    books.sort((a, b) => b.spice - a.spice);
  }

  return books;
}

function renderCatalog() {
  const books = getFilteredBooks();

  elements.bookGrid.innerHTML = books.map((book) => bookCardMarkup(book)).join("");
  elements.bookCount.textContent = `${books.length} BOOK${books.length === 1 ? "" : "S"}`;
  elements.resultsLabel.textContent = activeTrope === "all"
    ? "ALL THE FEELS, ALL THE BOOKS"
    : `TROPES: ${activeTrope.toUpperCase()}`;

  elements.empty.classList.toggle("hidden", books.length > 0);
  elements.bookGrid.classList.toggle("hidden", books.length === 0);
  elements.clearSearch.classList.toggle("hidden", !elements.search.value);
}

function resetFilters() {
  elements.search.value = "";
  elements.sort.value = "featured";
  activeTrope = "all";

  elements.tropeFilters.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.trope === "all");
  });

  renderCatalog();
}

/* =========================================
   SAVED BOOKS / READING LIST
   ========================================= */

function toggleSaved(id) {
  const book = getBook(id);
  if (!book) return;

  if (getSaved(id)) {
    delete savedBooks[id];
    persist(STORAGE_KEYS.saved, savedBooks);
    showToast(`Removed "${book.title}" from your reading list.`);
  } else {
    savedBooks[id] = {
      status: "want",
      savedAt: Date.now()
    };

    persist(STORAGE_KEYS.saved, savedBooks);
    showToast(`"${book.title}" added to your reading list ♥`);
  }

  renderAll();
}

function updateReadingStatus(id, status) {
  if (!getBook(id) || !getSaved(id)) return;

  if (!["want", "reading", "finished"].includes(status)) return;

  savedBooks[id].status = status;
  persist(STORAGE_KEYS.saved, savedBooks);
  renderReadingList();
  renderRecommendations();
  updateSavedCount();

  const labels = {
    want: "Want to read",
    reading: "Currently reading",
    finished: "Finished"
  };

  showToast(`Status updated: ${labels[status]}`);
}

function updateSavedCount() {
  const count = Object.keys(savedBooks).filter((id) => getBook(id)).length;
  elements.savedCount.textContent = count;
  elements.readingCount.textContent = `${count} SAVED`;
}

function renderReadingList() {
  const books = BOOKS.filter((book) => {
    const saved = getSaved(book.id);
    if (!saved) return false;

    return activeReadingStatus === "all" ||
      saved.status === activeReadingStatus;
  });

  elements.readingGrid.innerHTML = books.map((book) =>
    bookCardMarkup(book, { readingList: true })
  ).join("");

  const hasSaved = BOOKS.some((book) => Boolean(getSaved(book.id)));
  elements.readingEmpty.classList.toggle("hidden", hasSaved);
  elements.readingGrid.classList.toggle("hidden", books.length === 0);
}

function renderReadingTabs() {
  elements.readingTabs.querySelectorAll(".reading-tab").forEach((tab) => {
    const active = tab.dataset.status === activeReadingStatus;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-pressed", String(active));
  });
}

/* =========================================
   PERSONALIZED RECOMMENDATIONS
   ========================================= */

function renderRecommendations() {
  const saved = BOOKS.filter((book) => Boolean(getSaved(book.id)));
  const likedTropes = new Set(saved.flatMap((book) => book.tropes));

  let recommendations = BOOKS
    .filter((book) => !getSaved(book.id))
    .map((book) => ({
      book,
      score: book.tropes.filter((trope) => likedTropes.has(trope)).length
    }));

  recommendations.sort((a, b) => b.score - a.score);

  const matched = recommendations.filter((item) => item.score > 0);
  const pool = matched.length ? matched : recommendations;
  const results = pool.slice(0, 4).map((item) => item.book);

  elements.recommendationGrid.innerHTML = results
    .map((book) => bookCardMarkup(book))
    .join("");

  if (saved.length === 0) {
    elements.recommendationNote.textContent =
      "Save a few books to unlock recommendations based on your favorite tropes.";
  } else if (matched.length === 0) {
    elements.recommendationNote.textContent =
      "Try these books next. Save more favorites to personalize your recommendations.";
  } else {
    elements.recommendationNote.textContent =
      "Matched to the tropes in your saved books. Your taste, your next obsession.";
  }
}

/* =========================================
   BOOK DETAILS AND READER REVIEWS
   ========================================= */

function openBookDialog(id, focusReview = false) {
  const book = getBook(id);
  if (!book) return;

  currentBookId = id;
  const rating = averageRating(book);
  const reviews = getReviews(id);

  elements.dialogContent.innerHTML = `
    <div class="dialog-layout">
      <div>${coverMarkup(book, "dialog-cover-wrap")}</div>
      <div class="dialog-details">
        <p class="eyebrow">${escapeHTML(book.label)}</p>
        <h2>${escapeHTML(book.title)}</h2>
        <p>By ${escapeHTML(book.author)} · ${book.year}</p>

        <div class="book-rating">
          <span aria-hidden="true">${ratingMarkup(rating)}</span>
          <small>${rating.toFixed(1)} / 5 · ${book.reviews + reviews.length} ratings</small>
        </div>

        <p>${escapeHTML(book.description)}</p>

        <div class="card-tags">
          ${book.tropes.map((trope) =>
            `<span class="tag">${escapeHTML(trope)}</span>`
          ).join("")}
        </div>

        <p><strong>Spice level:</strong> ${book.spice}/5 — ${spiceLabel(book.spice)}</p>

        <div class="dialog-warning">
          <strong>Content notes</strong><br>
          ${book.warnings.map(escapeHTML).join(" · ")}
        </div>

        <p><strong>Series:</strong> ${escapeHTML(book.series)}</p>

        <button class="button button-primary" type="button"
          data-action="save" data-id="${escapeHTML(book.id)}">
          ${getSaved(book.id) ? "♥ Saved to my list" : "♡ Add to my reading list"}
        </button>
      </div>
    </div>

    <section class="review-form" id="review-form">
      <h3>Leave your mark.</h3>
      <p class="section-description">Share your rating and review. Your review stays in this browser.</p>
      <form id="reader-review-form" data-book-id="${escapeHTML(book.id)}">
        <label for="review-rating">Your star rating</label>
        <select id="review-rating" name="rating" required>
          <option value="5">★★★★★ — Loved it</option>
          <option value="4">★★★★☆ — Really liked it</option>
          <option value="3">★★★☆☆ — It was okay</option>
          <option value="2">★★☆☆☆ — Not for me</option>
          <option value="1">★☆☆☆☆ — Disappointing</option>
        </select>

        <label for="review-name">Display name (optional)</label>
        <input id="review-name" name="name" maxlength="40" placeholder="Anonymous reader">

        <label for="review-text">Your review</label>
        <textarea id="review-text" name="review" maxlength="1000"
          placeholder="Tell us about the chemistry, the plot, the heartbreak..." required></textarea>

        <button class="button button-primary" type="submit">Submit my review ♡</button>
      </form>
    </section>

    <section class="reader-reviews">
      <h3>Reader thoughts</h3>
      ${reviews.length ? reviews.slice().reverse().map((review) => `
        <article class="reader-review">
          <strong>${escapeHTML(review.name || "Anonymous reader")}</strong>
          <div class="book-rating" aria-label="${Number(review.rating)} out of 5 stars">
            ${ratingMarkup(Number(review.rating))}
          </div>
          <p>${escapeHTML(review.text)}</p>
          <small>${escapeHTML(review.date || "")}</small>
        </article>
      `).join("") : "<p class='section-description'>No reader reviews yet. Be the first to leave one.</p>"}
    </section>
  `;

  if (typeof elements.dialog.showModal === "function") {
    if (!elements.dialog.open) elements.dialog.showModal();
  } else {
    showToast("Your browser does not support the book details dialog.");
    return;
  }

  if (focusReview) {
    $("#review-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function closeBookDialog() {
  if (elements.dialog.open) elements.dialog.close();
  currentBookId = null;
}

/* =========================================
   EVENTS
   ========================================= */

elements.search.addEventListener("input", renderCatalog);
elements.sort.addEventListener("change", renderCatalog);

elements.clearSearch.addEventListener("click", () => {
  elements.search.value = "";
  renderCatalog();
  elements.search.focus();
});

elements.tropeFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-trope]");
  if (!button) return;

  activeTrope = button.dataset.trope;

  elements.tropeFilters.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.classList.toggle("active", chip === button);
  });

  renderCatalog();
});

$("#reset-filters").addEventListener("click", resetFilters);
elements.emptyReset.addEventListener("click", resetFilters);

elements.readingTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-status]");
  if (!button) return;

  activeReadingStatus = button.dataset.status;
  renderReadingTabs();
  renderReadingList();
});

elements.refreshRecommendations.addEventListener("click", () => {
  renderRecommendations();
  $("#recommendations").scrollIntoView({ behavior: "smooth", block: "start" });
  showToast("Your recommendations have been refreshed ♥");
});

elements.closeDialog.addEventListener("click", closeBookDialog);

elements.dialog.addEventListener("click", (event) => {
  if (event.target === elements.dialog) {
    closeBookDialog();
  }
});

elements.dialog.addEventListener("close", () => {
  currentBookId = null;
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && elements.dialog.open) {
    closeBookDialog();
  }
});

/* Delegate book card actions, including cards rendered later. */
document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const id = button.dataset.id;
  const action = button.dataset.action;

  if (action === "save") {
    event.preventDefault();
    event.stopPropagation();
    toggleSaved(id);

    // Keep the details dialog open and refresh its save button.
    if (elements.dialog.open && currentBookId === id) {
      openBookDialog(id);
    }
  }

  if (action === "details") {
    openBookDialog(id);
  }

  if (action === "review") {
    openBookDialog(id, true);
  }
});

document.addEventListener("change", (event) => {
  const select = event.target.closest('select[data-action="status"]');
  if (!select) return;

  updateReadingStatus(select.dataset.id, select.value);
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest("#reader-review-form");
  if (!form) return;

  event.preventDefault();

  const bookId = form.dataset.bookId;
  const book = getBook(bookId);
  if (!book) return;

  const formData = new FormData(form);
  const text = String(formData.get("review") || "").trim();
  const name = String(formData.get("name") || "").trim().slice(0, 40);
  const rating = Number(formData.get("rating"));

  if (!text) {
    showToast("Write a few words before submitting your review.");
    return;
  }

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    showToast("Please select a valid star rating.");
    return;
  }

  const reviews = getReviews(bookId);

  reviews.push({
    name: name || "Anonymous reader",
    rating,
    text: text.slice(0, 1000),
    date: new Date().toLocaleDateString()
  });

  readerReviews[bookId] = reviews;

  if (!persist(STORAGE_KEYS.reviews, readerReviews)) {
    reviews.pop();
    return;
  }

  showToast("Your review has been saved. Thank you, reader! ♥");

  renderCatalog();
  renderReadingList();
  renderRecommendations();
  openBookDialog(bookId);
});

/* =========================================
   INITIALIZE THE WEBSITE
   ========================================= */

function renderAll() {
  renderCatalog();
  renderReadingList();
  renderReadingTabs();
  renderRecommendations();
  updateSavedCount();
}

function initializeWebsite() {
  $("#year").textContent = new Date().getFullYear();

  // Remove invalid IDs left over from an older catalog.
  Object.keys(savedBooks).forEach((id) => {
    if (!getBook(id)) delete savedBooks[id];
  });

  Object.keys(readerReviews).forEach((id) => {
    if (!getBook(id) || !Array.isArray(readerReviews[id])) {
      delete readerReviews[id];
    }
  });

  persist(STORAGE_KEYS.saved, savedBooks);
  persist(STORAGE_KEYS.reviews, readerReviews);

  renderAll();
}

initializeWebsite();
