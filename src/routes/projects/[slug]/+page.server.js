/**
 * Server-side load function for dynamic project pages
 * This runs on the SERVER and loads the markdown file for each project
 */

import { error } from '@sveltejs/kit';
import { readFileSync } from 'fs';
import { join } from 'path';

export function load({ params }) {
  const { slug } = params;
  
  // List of valid project slugs
  const validSlugs = ['pamela-chess-engine', 'cdl-website'];
  
  if (!validSlugs.includes(slug)) {
    throw error(404, `Project "${slug}" not found`);
  }
  
  try {
    // Read the markdown file from the content folder
    const filePath = join(process.cwd(), 'src', 'content', `${slug}.md`);
    const markdown = readFileSync(filePath, 'utf-8');
    
    // Get project title from slug
    const title = slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    return {
      markdown,
      slug,
      title
    };
  } catch (err) {
    console.error('Error loading project:', err);
    throw error(500, `Failed to load project "${slug}"`);
  }
}
