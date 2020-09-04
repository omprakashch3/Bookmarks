const express = require("express");
const bookmark = require("../controller/bookmark");
const tag = require("../controller/tag");

const router = express.Router();

router.post("/createbookmark", bookmark.createBookmark);
router.delete("/deletebookmark/:id", bookmark.deleteBookmark);
router.post("/createtag", tag.createTag);
router.delete("/deletetag/:id", tag.deleteTag);
router.put("/addtag/:id", bookmark.addTag);
router.delete("/removetag/:id", bookmark.removeTag);
router.get("/getallbookmarks", bookmark.gatAllBookmarks);
router.get("/getalltags", tag.gatAllTag);

module.exports = router;
