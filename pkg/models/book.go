package models

import (
	"github.com/jinzhu/gorm"
	"github.com/katarinamak/Books/pkg/config"
)

var db *gorm.DB

type Book struct {
	gorm.Model
	ID          int64  `gorm: "json":"id"`
	Title       string `gorm: "json":"title"`
	Author      string `json:"author"`
	Publication string `json:"publication"`
	Rating      int32  `json:"rating"`
}

func init() {
	config.Connect()
	db = config.GetDB()
	db.AutoMigrate(&Book{})
}

func (b *Book) CreateBook() *Book {
	db.NewRecord(b)
	db.Create(&b)
	return b
}

func GetAllBooks() []Book {
	var Books []Book
	db.Find(&Books)
	return Books
}

func GetBookById(Id int64) (*Book, *gorm.DB) {
	var getBook Book
	db := db.Where("ID=?", Id).Find(&getBook)
	return &getBook, db
}

func GetBookByTitle(title string) (*Book, *gorm.DB) {
	var getBook Book
	db := db.Where("title=?", title).Find(&getBook)
	return &getBook, db
}

func GetBookByRating(rating int32) (*Book, *gorm.DB) {
	var getBook Book
	db := db.Where("rating=?", rating).Find(&getBook)
	return &getBook, db
}

func DeleteBook(ID int64) Book {
	var book Book
	db.Where("ID=?", ID).Delete(book)
	return book
}
