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

export async function fetchCourses(category) {
  const res = await fetch(`${API_URL}/courses/index.php?category=${category}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch courses');
  return res.json();
}

export async function fetchStudents(level) {
  const res = await fetch(`${API_URL}/students/index.php?level=${level}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch students');
  return res.json();
}

export async function fetchFacultyDepartments(category) {
  const url = category
    ? `${API_URL}/faculty-departments/index.php?category=${category}`
    : `${API_URL}/faculty-departments/index.php`;
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch departments');
  return res.json();
}

export async function fetchFacultyMembers(departmentId) {
  const res = await fetch(`${API_URL}/faculty-members/index.php?department_id=${departmentId}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch members');
  return res.json();
}

export async function fetchAllFacultyWithMembers() {
  const res = await fetch(`${API_URL}/faculty-departments/index.php?include=members`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch faculty data');
  return res.json();
}

export async function fetchAdmissionDocuments(level) {
  const res = await fetch(`${API_URL}/admission-documents/index.php?level=${level}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch admission documents');
  return res.json();
}