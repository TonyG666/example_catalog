// src/teacher.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
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
 * Loads and displays teacher details on the page
 * Fetches teacher info from the database and shows name and description
 */
async function loadTeacher() {
  // Get the teacher ID from URL parameters
  const id = getParam('id');
  if (!id) return;

  // Query the database for teacher details
  const { data: t, error } = await supabase
    .from('teachers')
    .select('name, description')
    .eq('id', id)
    .single();

  // Handle any database errors
  if (error) {
    console.error(error);
    return;
  }

  // Build and display the teacher profile HTML
  // - Shows teacher name as main heading
  // - Displays teacher's full description
  document.getElementById('profile').innerHTML = `
    <h1>${t.name}</h1>
    <p>${t.description}</p>
  `;
}

loadTeacher();