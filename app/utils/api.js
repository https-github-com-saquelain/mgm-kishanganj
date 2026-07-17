const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchGallery() {
  const res = await fetch(`${API_URL}/gallery/index.php`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch gallery');
  return res.json();
}

export async function fetchNotices(type) {
  const res = await fetch(`${API_URL}/notices/index.php?type=${type}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch notices');
  return res.json();
}