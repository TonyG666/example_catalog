// src/index.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
import.meta.env = import.meta.env || {};
const SUPA_URL = import.meta.env.SUPABASE_URL || 'https://lopjxkbxphszujymoxti.supabase.co';
const SUPA_KEY = import.meta.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvcGp4a2J4cGhzenVqeW1veHRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4OTk5MDAsImV4cCI6MjA2NDQ3NTkwMH0.ENXXdmZDTe1MrKyT4HY3vUrrLxaLRC1sZJT4x-jjyvk';
const supabase = createClient(SUPA_URL, SUPA_KEY);

/**
 * Creates a URL for a specific class page
 * @param {string} id - The class ID
 * @returns {string} The formatted URL with the class ID
 */
function getCatalogUrl(id) {
  return `class.html#id=${id}`;
}

/**
 * Loads and displays the class catalog
 * Fetches all classes from the database and creates clickable cards
 * Each card shows class image, title, and a preview of the description
 */
async function loadCatalog() {
  // Fetch all classes from the database with their basic info
  const { data: classes, error } = await supabase
    .from('classes')
    .select('id, title, description, image_url');

  // Handle any database errors
  if (error) {
    console.error('Error loading classes:', error);
    return;
  }

  // Get the container element where cards will be displayed
  const container = document.getElementById('catalog');
  if (!container) {
    console.error('Missing #catalog element');
    return;
  }

  // Create and display class cards
  // Each card contains:
  // - A link to the class detail page
  // - Class image (or placeholder if none exists)
  // - Class title
  // - Truncated description (first 80 characters)
  container.innerHTML = classes.map(c => `
    <a href="${getCatalogUrl(c.id)}" target="_blank" class="card">
      <img src="${c.image_url || 'https://via.placeholder.com/120'}" />
      <div class="info">
        <h3>${c.title}</h3>
        <p>${c.description.substring(0, 80)}…</p>
      </div>
    </a>
  `).join('');
}

loadCatalog();