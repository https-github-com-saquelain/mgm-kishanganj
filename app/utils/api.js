const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchGallery() {
  const res = await fetch(`${API_URL}/gallery`);
  if (!res.ok) throw new Error('Failed to fetch gallery');
  return res.json();
}

export async function fetchNotices(type) {
  const res = await fetch(`${API_URL}/notices?type=${type}`);
  if (!res.ok) throw new Error('Failed to fetch notices');
  return res.json();
}