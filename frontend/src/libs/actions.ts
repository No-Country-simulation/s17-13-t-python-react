'use server';

////////////////////////////
//* GET

export async function getTopTenBooks() {
  try {
    const query = 'popular';
    const maxResults = 10;
    const url = `https://openlibrary.org/search.json?q=${query}&limit=${maxResults}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const books = data.docs;

    const bookDetails = books.map((book: any) => ({
      title: book.title,
      author: book.author_name ? book.author_name.join(', ') : 'Unknown',
      cover: book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        : 'No cover available',
    }));

    return bookDetails;
  } catch (error) {
    console.error('💥Error:', error);
    return null;
  }
}
