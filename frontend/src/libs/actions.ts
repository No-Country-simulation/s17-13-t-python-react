'use server';

////////////////////////////
//* Get

// Get Top Ten Books
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

// Get Single Book
export async function getBook(bookId: string) {
  try {
    const url = ` https://openlibrary.org/works/${bookId}.json`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const resAuthor = await fetch(`https://openlibrary.org/${data.authors[0].author.key}.json`);
    const dataAuthor = await resAuthor.json();

    const book = {
      title: data.title,
      author: dataAuthor.name || 'Unknown',
      description: data.description,
      cover: 'https://covers.openlibrary.org/b/id/12498647-M.jpg',
      editorial: 'Puffin',
      rating: 3.9,
      pageNumber: 96,
    };

    return book;
  } catch (error) {
    console.error('💥Error:', error);
    return null;
  }
}
