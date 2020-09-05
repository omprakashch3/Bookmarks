# Bookmarks

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d0f3ab80f78c4b30adcceb983b71d869)](https://app.codacy.com/manual/omprakashch3/Bookmarks?utm_source=github.com&utm_medium=referral&utm_content=omprakashch3/Bookmarks&utm_campaign=Badge_Grade_Dashboard)
![Node.js CI](https://github.com/omprakashch3/Bookmarks/workflows/Node.js%20CI/badge.svg)

## this app tries to create or delete a bookmark after accesing the link.

## we can also tag the genre of the bokkmarks, tags on the single bookmark can be none, single or multiple tags

## Routes

### POST /createbookmark

```javascript
Content-Type: application/json

{
  "link":"https://github.co.in/",
  "title":"github",
  "publisher":"ompraksh",
  "tag":"edu"
}
```

### POST /createtag

```javascript
Content-Type: application/json

{
  "title":"politics"
}
```

### Get /getallbookmarks

```javascript
Content-Type: application/json
```

### Get /getalltags

```javascript
Content-Type: application/json
```

### Put /addtag/:id

```javascript
Content-Type: application/json
```

### Delete /deletebookmark/:id

```javascript
Content-Type: application/json
```

### Delete /deletetag/:id

```javascript
Content-Type: application/json
```

### Delete /removetag/:id

```javascript
Content-Type: application/json
```
