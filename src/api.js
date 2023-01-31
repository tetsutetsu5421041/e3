export async function fetchImages() {
    const response = await fetch(
      `https://shibe.online/api/shibes?count=20`
    );
    const data = await response.json();
    return data;
  }