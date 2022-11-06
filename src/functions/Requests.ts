export async function Get<T>(url: string): Promise<T> {
  return await fetch(url, {
    method: 'GET',
  }).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}
