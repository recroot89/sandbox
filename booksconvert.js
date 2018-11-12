import { readFileSync, writeFileSync } from 'fs';

const convertCsvToJson = (content) => {
  const [head, ...body] = content.split('\n');
  const headers = head.split(';').map(i => i.trim());
  const titleIndex = headers.indexOf('Title');
  const authorIndex = headers.indexOf('Author');
  const descriptionIndex = headers.indexOf('Annotation');

  return JSON.stringify(body.reduce((acc, line) => {
    const metaData = line.split(';').map(i => i.trim());
    const authorName = metaData[authorIndex];
    const currentAuthor = acc.authors.find(a => a.author === authorName);
    const isAuthorExist = !!currentAuthor;
    const book = { title: metaData[titleIndex], description: metaData[descriptionIndex] };

    if (isAuthorExist) {
      currentAuthor.books = [...currentAuthor.books, book];
      return acc;
    }

    const newAuthor = { author: authorName, books: [book] };
    return { authors: [...acc.authors, newAuthor] };
  }, { authors: [] }));
};

const booksListConverter = (sourceFilePath, destFilePath) => {
  const data = readFileSync(sourceFilePath).toString();
  const result = convertCsvToJson(data);

  writeFileSync(destFilePath, result);
};

export default booksListConverter;

booksListConverter('./books.csv', './books.json');
