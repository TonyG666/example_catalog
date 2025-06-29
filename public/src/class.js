// src/class.js

// Import Supabase client from CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Set up env variables (or use default values)
import.meta.env = import.meta.env || {};
const SUPA_URL = import.meta.env.SUPABASE_URL || 'https://lopjxkbxphszujymoxti.supabase.co';
const SUPA_KEY = import.meta.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvcGp4a2J4cGhzenVqeW1veHRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4OTk5MDAsImV4cCI6MjA2NDQ3NTkwMH0.ENXXdmZDTe1MrKyT4HY3vUrrLxaLRC1sZJT4x-jjyvk';
const supabase = createClient(SUPA_URL, SUPA_KEY);

/**
 * Gets a parameter value from either the URL query string or hash fragment
 * @param {string} name - The name of the parameter to look for
 * @returns {string|null} The parameter value if found, null otherwise
 */
function getParam(name) {
  const queryParam = new URLSearchParams(window.location.search).get(name);
  if (queryParam) return queryParam;
  
  const hash = window.location.hash.substring(1);
  return new URLSearchParams(hash).get(name);
}

/**
 * Loads and displays class details on the page
 * Fetches class info from db and shows title, image, description, and teacher info
 */
async function loadClass() {
  // Get the class ID from URL parameters
  const id = getParam('id');
  if (!id) return;

  // Query the database for class details and related teacher info
  const { data: cls, error } = await supabase
    .from('classes')
    .select('title, description, image_url, teacher_id, teachers(name)')
    .eq('id', id)
    .single();

  // Handle any database errors
  if (error) {
    console.error(error);
    return;
  }

  // Build and display the class details HTML
  // - Shows class title as main heading
  // - Displays class image (or placeholder if none exists)
  // - Shows full class description
  // - Creates a link to the teacher's profile page
  document.getElementById('detail').innerHTML = `
    <h1>${cls.title}</h1>
    <img src="${cls.image_url || 'https://via.placeholder.com/300'}" style="max-width:300px;" />
    <p>${cls.description}</p>
    <p>
      Teacher:
      <a href="teacher.html#id=${cls.teacher_id}" target="_blank">
        ${cls.teachers.name}
      </a>
    </p>
  `;
}

loadClass();